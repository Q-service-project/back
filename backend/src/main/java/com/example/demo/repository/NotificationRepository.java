package com.example.demo.repository;

import com.example.demo.entity.NotificationEntity;
import com.example.demo.entity.QuestionEntity;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface NotificationRepository extends JpaRepository<NotificationEntity, Long> {
    @Query("select n from NotificationEntity n where n.isRead=false and n.receiver.id = :userId")
    List<NotificationEntity> getAllNotifications(@Param("userId") Long userId);

    @Query("select n.question from NotificationEntity n where n.id = :notificationId")
    QuestionEntity getNotificationQuestionById(@Param("notificationId") Long notificationId);

    @Query("update NotificationEntity n set n.isRead = true where n.receiver.id = :userId and n.id = :notificationId")
    int readNotification(@Param("userId") Long userId, @Param("notificationId") Long notificationId);
}
