package com.example.demo.controller;

import com.example.demo.dto.NotificationDto;
import com.example.demo.dto.response.QuestionResponseDto;
import com.example.demo.entity.NotificationEntity;
import com.example.demo.entity.QuestionEntity;
import com.example.demo.jwt.JwtUtil;
import com.example.demo.service.NotificationService;
import com.example.demo.type.NotificationType;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

@RestController
@RequestMapping("/api/notification")
@RequiredArgsConstructor
public class NotificationController {

    private final NotificationService notificationService;

    @GetMapping("/connect")
    public ResponseEntity<SseEmitter> connect() {
        Long userId = JwtUtil.getUserIdFromAuthentication();

        SseEmitter emitter = notificationService.getConnect(userId);

        return ResponseEntity.ok().body(emitter);
    }

    @GetMapping
    public ResponseEntity<?> getNotifications() {
        Long userId = JwtUtil.getUserIdFromAuthentication();

        List<NotificationEntity> entityList = notificationService.getAllNotifications(userId);

        List<NotificationDto> dtoList = entityList.stream()
                .map(e->new NotificationDto(e.getId(), e.getContent(), e.getNotificationType()))
                .toList();

        return ResponseEntity.ok().body(dtoList);
    }

    @GetMapping("/{notificationId}")
    public ResponseEntity<?> readNotification(@PathVariable Long notificationId) {
        Long userId = JwtUtil.getUserIdFromAuthentication();

        QuestionEntity question = notificationService.readNotification(userId, notificationId);

        QuestionResponseDto dto = QuestionResponseDto.builder()
                .id(question.getId())
                .content(question.getContent())
                .heart(question.getHeart())
                .categoryName(question.getCategory().getName())
                .commentCount(question.getComments().size())
                .createTime(question.getCreatedDateTime())
                .build();

        return ResponseEntity.ok().body(dto);
    }

    @PostMapping("/test")
    public ResponseEntity<?> testAddNotification() {
        notificationService.addNotification(JwtUtil.getUserIdFromAuthentication(), new NotificationDto("content", NotificationType.COMMENT));
        return ResponseEntity.ok().build();
    }
}
