package com.example.demo.service;

import com.example.demo.entity.UserEntity;
import com.example.demo.repository.UserRepository;
import com.example.demo.util.FormattingUtil;
import com.example.demo.vo.UserRegisterInfoVo;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import java.util.Map;
import java.util.Optional;

@Slf4j
@Service
@RequiredArgsConstructor
public class GoogleService {
    @Value("${google.client_id}")
    private String clientId;

    @Value("${google.client_secret}")
    private String clientSecret;

    @Value("${google.redirect_uri}")
    private String redirectUri;

    private String KAUTH_TOKEN_URL_HOST = "https://oauth2.googleapis.com";
    private String KAUTH_USER_URL_HOST = "https://www.googleapis.com";
    private String KUATH_PHONE_URL_HOST = "https://people.googleapis.com";

    private final UserRepository userRepository;
    private final UserService userService;

    public Long getUserIdFromGoogle(String code){
        String accessToken = getAccessTokenFromGoogle(code);

        //System.out.println("access\n" + accessToken);

        GoogleUserInfoResponseDto info = getUserInfoFromGoogle(accessToken);

        UserEntity user;
        Optional<UserEntity> findUser = userRepository.findByOAuthId(info.getId());

        if(findUser.isPresent())
            user = findUser.get();
        else {
            // create new user
            user = userService.registerByUserInfo(UserRegisterInfoVo.builder()
                    .oAuthId(info.getId())
                    .name(info.getName())
                    .email(info.getEmail())
                    .phone(FormattingUtil.formatPhoneNumber(getPhoneNumberFromGoogle(accessToken, info.getId())))
                    .oAuthPlatform("GOOGLE")
                    .build());
        }

        return user.getId();
    }

    private String getAccessTokenFromGoogle(String code){
        // get google access token with client code
        Map<String, String> googleTokenResponse = WebClient.create(KAUTH_TOKEN_URL_HOST).post()
                .uri(uriBuilder -> uriBuilder
                        .scheme("https")
                        .path("/token")
                        .queryParam("client_id", clientId)
                        .queryParam("client_secret", clientSecret)
                        .queryParam("code", code)
                        .queryParam("redirect_uri", redirectUri)
                        .queryParam("grant_type", "authorization_code")
                        .build())
                .contentType(MediaType.APPLICATION_FORM_URLENCODED)
                .retrieve()
                .onStatus(HttpStatusCode::is4xxClientError, (response) -> {
                    return response.bodyToMono(String.class)
                            .flatMap(body -> {
                                // 본문 내용과 상태 코드 모두 포함시켜 RuntimeException 생성
                                return Mono.error(new RuntimeException("Error response: " + response.statusCode() + ", Body: " + body));
                            });
                })
                .bodyToMono(Map.class)
                .block();
        return googleTokenResponse.get("access_token");
    }

    private GoogleUserInfoResponseDto getUserInfoFromGoogle(String accessToken){
        // get client info with access token
        GoogleUserInfoResponseDto info = WebClient.create(KAUTH_USER_URL_HOST).get()
                .uri(uriBuilder -> uriBuilder
                        .scheme("https")
                        .path("/oauth2/v2/userinfo")
                        .build())
                .header(HttpHeaders.AUTHORIZATION, "Bearer " + accessToken)
                .retrieve()
                .onStatus(HttpStatusCode::is4xxClientError, (response) -> {
                    return Mono.error(new RuntimeException(response.toString()));
                })
                .bodyToMono(GoogleUserInfoResponseDto.class)
                .block();

        return info;
    }
    private void printUserInfoFromGoogle(String accessToken){
        // get client info with access token
        String str = WebClient.create(KAUTH_USER_URL_HOST).get()
                .uri(uriBuilder -> uriBuilder
                        .scheme("https")
                        .path("/oauth2/v2/userinfo")
                        .build())
                .header(HttpHeaders.AUTHORIZATION, "Bearer " + accessToken)
                .retrieve()
                .onStatus(HttpStatusCode::is4xxClientError, (response) -> {
                    return Mono.error(new RuntimeException(response.toString()));
                })
                .bodyToMono(String.class)
                .block();

        System.out.println(str);
    }

    private String getPhoneNumberFromGoogle(String token, String userId){
        String phoneNumber = WebClient.create(KUATH_PHONE_URL_HOST).get()
                .uri("https://people.googleapis.com/v1/people/"+userId+"?personFields=phoneNumbers")
                .header(HttpHeaders.AUTHORIZATION, "Bearer " + token)
                .retrieve()
                .onStatus(HttpStatusCode::is4xxClientError, (response) -> {
                    return response.bodyToMono(String.class)
                            .flatMap(body -> {
                                // 본문 내용과 상태 코드 모두 포함시켜 RuntimeException 생성
                                return Mono.error(new RuntimeException("Error response: " + response.statusCode() + ", Body: " + body));
                            });
                })
                .bodyToMono(String.class)
                .block();

        return null;
    }
}
