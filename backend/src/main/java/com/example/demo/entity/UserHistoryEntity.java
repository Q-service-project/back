package com.example.demo.entity;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import java.util.Date;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;
import org.springframework.data.annotation.LastModifiedDate;

@Entity
@Table(name = "user_history")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class UserHistoryEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(targetEntity = UserEntity.class, fetch = FetchType.LAZY)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "user_id", nullable = false)
    private UserEntity user;

    @LastModifiedDate
    @Column(name = "last_login", nullable = false)
    private Date lastLogin= new Date();

    @Column(nullable = false)
    private String ip;

    @Column(nullable = false)
    private String agent;

    @Column(nullable = true)
    private String uri;

    @Builder
    public UserHistoryEntity(UserEntity user, String ip, String agent,
        String uri) {
        this.user = user;
        this.ip = ip;
        this.agent = agent;
        this.uri = uri;
    }
}
