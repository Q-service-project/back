package com.example.demo.controller;

import com.example.demo.common.ErrorResponse;
import com.example.demo.common.SuccessResponse;
import com.example.demo.entity.UserEntity;
import com.example.demo.jwt.JwtUtil;
import com.example.demo.service.auth.GoogleService;
import com.example.demo.service.auth.KakaoService;
import com.example.demo.service.auth.NaverService;
import com.example.demo.util.CookieUtil;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/public/auth")
@RequiredArgsConstructor
public class AuthController {

    @Value("${jwt.access-token-expiration-time}")
    private long accessTokenExpirationTime;
    @Value("${jwt.refresh-token-expiration-time}")
    private long refreshTokenExpirationTime;

    private final KakaoService kakaoService;
    private final NaverService naverService;
    private final GoogleService googleService;
    private final JwtUtil jwtUtil;

    @GetMapping("/login/kakao")
    public ResponseEntity<?> kakaoLogin(@RequestParam("code") String code, HttpServletRequest request, HttpServletResponse response) {
        try {
            UserEntity user = kakaoService.getUserFromKakao(code);

            generateAndAddTokenCookie(user, request, response);

            return ResponseEntity.ok(new SuccessResponse("Login successful by Kakao", null));
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new ErrorResponse("", "Access denied"));
        }
    }

    @GetMapping("/login/naver")
    public ResponseEntity<?> naverLogin(@RequestParam("code") String code, HttpServletRequest request, HttpServletResponse response) {
        try {
            UserEntity user = naverService.getUserFromNaver(code);

            generateAndAddTokenCookie(user, request, response);

            return ResponseEntity.ok(new SuccessResponse("Login successful by Naver", null));
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new ErrorResponse("", "Access denied"));
        }
    }

    @GetMapping("/login/google")
    public ResponseEntity<?> googleLogin(@RequestParam("code") String code, HttpServletRequest request, HttpServletResponse response) {
        try {
            UserEntity user = googleService.getUserFromGoogle(code);

            generateAndAddTokenCookie(user, request, response);

            return ResponseEntity.ok(new SuccessResponse("Login successful by Google", null));
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new ErrorResponse("", "Access denied"));
        }
    }

    private void generateAndAddTokenCookie(UserEntity user, HttpServletRequest request, HttpServletResponse response) {
        String ip = JwtUtil.getIpFromRequest(request);

        String accessToken = jwtUtil.generateAccessToken(user, ip);
        String refreshToken = jwtUtil.generateRefreshToken(user);

        CookieUtil.addCookie(response, "accessToken", accessToken, accessTokenExpirationTime);
        CookieUtil.addCookie(response, "refreshToken", refreshToken, refreshTokenExpirationTime);

        removeAnonymousToken(response);
    }

    private void removeAnonymousToken(HttpServletResponse response) {
        CookieUtil.addCookie(response, "anonymousToken", null, 0L);
    }

}

