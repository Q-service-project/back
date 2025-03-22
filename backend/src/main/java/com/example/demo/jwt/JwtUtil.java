package com.example.demo.jwt;

import com.example.demo.entity.UserEntity;
import com.example.demo.exception.CustomException;
import com.example.demo.exception.ErrorCode;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import jakarta.servlet.http.HttpServletRequest;

import java.util.HashMap;
import java.util.Map;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Date;

@Slf4j
@Component
@RequiredArgsConstructor
public class JwtUtil {

    @Value("${jwt.secret}")
    private String secretKey;

    @Value("${jwt.access-token-expiration-time}")
    private long accessTokenExpirationTime;

    @Value("${jwt.refresh-token-expiration-time}")
    private long refreshTokenExpirationTime;

    private Key getSigningKey() {
        return Keys.hmacShaKeyFor(secretKey.getBytes());
    }

    public String generateAccessToken(UserEntity user, String ip) {
        return Jwts.builder()
                .setSubject(user.getId().toString())
                .claim("ip", ip)
                .claim("role", user.getRole())
                .setExpiration(new Date(System.currentTimeMillis() + accessTokenExpirationTime * 1000))
                .signWith(getSigningKey(), SignatureAlgorithm.HS256)
                .compact();
    }

    public String generateRefreshToken(UserEntity user) {
        return Jwts.builder()
                .setSubject(user.getId().toString())
                .claim("uuid", user.getUuid())
                .setExpiration(new Date(System.currentTimeMillis() + refreshTokenExpirationTime * 1000))
                .signWith(getSigningKey(), SignatureAlgorithm.HS256)
                .compact();
    }

    public String generateAnonymousToken(UserEntity user) {
        return Jwts.builder()
            .setSubject(user.getId().toString())
            .claim("role", user.getRole())
            .signWith(getSigningKey(), SignatureAlgorithm.HS256)
            .compact();
    }

    public Map<String, String> extractToken(String token, String... includedClaims) throws ExpiredJwtException {
        HashMap<String, String> claims = new HashMap<>();

        Claims body = Jwts.parserBuilder()
                .setSigningKey(getSigningKey())
                .build()
                .parseClaimsJws(token)
                .getBody();

        claims.put("subject", body.getSubject());

        for (String arg : includedClaims) {
            claims.put(arg, body.get(arg, String.class));
        }

        return claims;
    }

    public static String getIpFromRequest(HttpServletRequest request) {
        String ipAddress = request.getHeader("X-Forwarded-For");
        if (ipAddress == null || ipAddress.isEmpty() || "unknown".equalsIgnoreCase(ipAddress)) {
            ipAddress = request.getHeader("Proxy-Client-IP");
        }
        if (ipAddress == null || ipAddress.isEmpty() || "unknown".equalsIgnoreCase(ipAddress)) {
            ipAddress = request.getHeader("WL-Proxy-Client-IP");
        }
        if (ipAddress == null || ipAddress.isEmpty() || "unknown".equalsIgnoreCase(ipAddress)) {
            ipAddress = request.getRemoteAddr();
        }
        return ipAddress;
    }

    public static Long getUserIdFromAuthentication() {
        Long userId = (Long)SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        if(userId == null) {
            throw new CustomException(ErrorCode.UNAUTHORIZED, "user token is not found");
        }
        return userId;
    }
}
