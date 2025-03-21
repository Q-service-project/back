package com.example.demo.dto;

import com.example.demo.type.NotificationType;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class NotificationDto {

    private Long id;

    private String content;

    private NotificationType type;

    public NotificationDto(String content, NotificationType type) {
        this.content = content; this.type = type;
    }
    public NotificationDto(Long id, String content, NotificationType type) {
        this.content = content; this.type = type; this.id = id;
    }

    @Override
    public String toString() {
        return String.format("{'content':'%s', 'type':'%s'}", content, type.type);
    }

}
