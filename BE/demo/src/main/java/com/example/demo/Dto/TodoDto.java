package com.example.demo.Dto;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class TodoDto {
    float todoId;
    Boolean checkBox;
    String todoContent;
    Date todoDate;
}
