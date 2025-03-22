package com.example.demo.service;

import com.example.demo.entity.UserEntity;
import com.example.demo.jwt.JwtUtil;
import com.example.demo.repository.UserRepository;
import com.example.demo.type.Role;
import com.example.demo.vo.UserRegisterInfoVo;
import jakarta.transaction.Transactional;
import java.util.Optional;
import java.util.UUID;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    @Transactional
    public UserEntity registerByUserInfo(UserRegisterInfoVo vo) {
        // get anonymous authentication from security context
        Optional<UserEntity> anonymousUser = userRepository.findById(JwtUtil.getUserIdFromAuthentication());
        Long anonymousUserId = null;

        if (anonymousUser.isPresent())
            anonymousUserId = anonymousUser.get().getId();


        String uuid = UUID.randomUUID().toString();
        UserEntity newUser = UserEntity.builder()
                .id(anonymousUserId)
                .oAuthPlatform(vo.getOAuthPlatform())
                .oAuthId(vo.getOAuthId())
                .name(vo.getName())
                .email(vo.getEmail())
                .phone(vo.getPhone())
                .role(Role.USER.name())
                .uuid(uuid)
                .build();

        return userRepository.save(newUser);
    }

    @Transactional
    public UserEntity registerAnonymousUser() {
        return userRepository.save(
            UserEntity.builder()
                .role(Role.ANONYMOUS.name())
                .name("비회원")
                .build()
            );
    }

}