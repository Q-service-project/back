package com.example.demo.entity;

import com.example.demo.type.Role;
import jakarta.persistence.*;

import java.util.Collection;
import java.util.Date;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.SQLRestriction;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

@Entity
@Table(name = "user")
@Getter
@SQLDelete(sql = "UPDATE user SET deleted_date_time = CURRENT_TIMESTAMP WHERE id = ?") // soft delete
@SQLRestriction("deleted_date_time IS NULL") // 지워지지 않은 레코드에 대한 조건
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class UserEntity implements UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = true)
    private String oAuthId;

    @Column(nullable = true)
    private String oAuthPlatform;

    @Column(nullable = false)
    private String name;

    @Column(nullable = true)
    private String email;

    @Column
    private String phone;

    @Column(nullable = false)
    private String role;

    @Column(nullable = true)
    private String uuid;

    @CreatedDate
    private final Date createdDateTime = new Date();

    @Column
    private Date deletedDateTime;

    @Builder
    public UserEntity(Long id, String oAuthId, String oAuthPlatform, String name, String email, String phone, String role, String uuid) {
        this.id = id;
        this.oAuthId = oAuthId;
        this.oAuthPlatform = oAuthPlatform;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.role = role;
        this.uuid = uuid;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return Role.getRole(role).getAuthorities();
    }

    @Override
    public String getUsername() {
        return id.toString();
    }

    // 사용할 일이 없음
    @Override
    public String getPassword() {
        return null;
    }
}

