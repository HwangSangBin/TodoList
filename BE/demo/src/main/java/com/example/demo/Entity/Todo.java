package com.example.demo.Entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@Entity
@Table(name = "Todo")
@Data
public class Todo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "TodoId")
    float todoId;

    @Column(name = "checkBox")
    Boolean checkBox;

    @Column(name = "TodoContent")
    String todoContent;

    @Column(name = "TodoDate")
    Date todoDate;
}
