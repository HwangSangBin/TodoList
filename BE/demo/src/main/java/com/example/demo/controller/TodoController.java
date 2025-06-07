package com.example.demo.controller;

import com.example.demo.Dto.TodoDto;
import com.example.demo.Entity.Todo;
import com.example.demo.service.TodoService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/todo")
public class TodoController {
    private final TodoService todoService;

    @PostMapping("/add")
    public void addTodo(@RequestBody TodoDto todoDto){
        todoService.saveTodo(todoDto);
    }

    @GetMapping("/read")
    public List<Todo> readTodoId(){
        return todoService.loadTodo();
    }

    @PostMapping("/delete/{todoId}")
    public void deleteTodo(@PathVariable int todoId){
        todoService.deleteById(todoId);
    }
}
