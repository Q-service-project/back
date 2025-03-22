package com.example.demo.entity;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;
import org.springframework.data.annotation.CreatedDate;

import java.util.Date;

@Entity
@Table(name = "question_history")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class QuestionHistoryEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @CreatedDate
    private final Date createdDateTime = new Date();

    @ManyToOne
    @OnDelete(action = OnDeleteAction.CASCADE)
    private UserEntity user;

    @ManyToOne
    @OnDelete(action = OnDeleteAction.CASCADE)
    private QuestionEntity question;

    @Builder
    public QuestionHistoryEntity(UserEntity user, QuestionEntity question) {
        this.user = user;
        this.question = question;
    }
}
