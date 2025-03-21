package com.example.demo.entity;

import com.example.demo.type.NotificationType;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;

import java.util.Date;

@Entity
@Table(name = "notification")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class NotificationEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String content;

    @Column(nullable = false)
    private boolean isRead;

    @Column(nullable = false)
    private NotificationType notificationType;

    @ManyToOne(fetch = FetchType.LAZY)
    private UserEntity receiver;

    @ManyToOne(fetch = FetchType.LAZY)
    private QuestionEntity question;

    @CreatedDate
    private final Date sentDateTime = new Date();

    @Builder
    public NotificationEntity(Long id, String content, boolean isRead,
        NotificationType notificationType, UserEntity receiver, QuestionEntity question) {
        this.id = id;
        this.content = content;
        this.isRead = isRead;
        this.notificationType = notificationType;
        this.receiver = receiver;
        this.question = question;
    }
}
