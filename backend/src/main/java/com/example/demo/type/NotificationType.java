package com.example.demo.type;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum NotificationType {

    QUESTION_LIKE("QUESTION_LIKE"),
    COMMENT("COMMENT");

    public final String type;

}