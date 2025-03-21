package com.example.demo.service;

import com.example.demo.dto.NotificationDto;
import com.example.demo.entity.NotificationEntity;
import com.example.demo.entity.QuestionEntity;
import com.example.demo.entity.UserEntity;
import com.example.demo.exception.CustomException;
import com.example.demo.exception.ErrorCode;
import com.example.demo.repository.NotificationRepository;
import jakarta.persistence.EntityManager;
import jakarta.transaction.Transactional;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

@Service
@Slf4j
@RequiredArgsConstructor
public class NotificationService {

//    @Value("${sse.connection_time}")
    private final Long SSE_CONNECTION_TIME = Long.MAX_VALUE;
    private final Long SEE_RECONNECTION_TIME = 1000 * 10L; // 10초

    private final NotificationRepository notificationRepository;
    private final EntityManager entityManager;

    private static HashMap<Long, SseEmitter> emitterMap = new HashMap<>();

    public SseEmitter getConnect(Long userId) {
        SseEmitter oldEmitter = emitterMap.get(userId);
        if(oldEmitter != null) {
            oldEmitter.complete();
        }

        SseEmitter emitter = new SseEmitter(SSE_CONNECTION_TIME);
        emitter.onTimeout(()->{ emitterMap.remove(userId); });
        emitter.onCompletion(() -> { emitterMap.remove(userId); });
        emitterMap.put(userId, emitter);

        sendAllNotifications(emitter, userId);

        return emitter;
    }

    public List<NotificationEntity> getAllNotifications(Long userId) {
        return notificationRepository.getAllNotifications(userId);
    }

    @Transactional
    public QuestionEntity readNotification(Long userId, Long notificationId) {
        if (notificationRepository.readNotification(userId, notificationId) != 1)
            throw new CustomException(ErrorCode.CONFLICT ,String.format("notificationId(%d)'s Author is not userId(%d)", notificationId, userId));

        return notificationRepository.getNotificationQuestionById(notificationId);
    }

    // Sse 관련 함수들
    public void addNotification(Long userId, NotificationDto data) {
        sendSSEData(emitterMap.get(userId), data);

        notificationRepository.save(
            NotificationEntity.builder()
                .notificationType(data.getType())
                .content(data.getContent())
                .receiver(entityManager.getReference(UserEntity.class, userId))
                .isRead(false)
                .build()
        );
    }

    public void sendAllNotifications(SseEmitter emitter, Long userId) {
        List<NotificationEntity> entityList = notificationRepository.getAllNotifications(userId);
        List<NotificationDto> data = entityList.stream()
            .map(entity -> new NotificationDto(entity.getId(), entity.getContent(), entity.getNotificationType()))
            .toList();

        sendSSEData(emitter, data);
    }

    private void sendSSEData(SseEmitter sseEmitter, Object data) {
        log.info("try send " + data.toString());
        if(sseEmitter == null) {
            log.info("sseEmitter is null");
            return;
        }

        try {
            sseEmitter.send(SseEmitter.event().name("notification").data(data.toString()).reconnectTime(SEE_RECONNECTION_TIME).build());
            log.info("sseEmitter sended");
        } catch (IOException e) {
            log.info("sseEmitter send error");
        }
        log.info("Sse send end");
    }
}
