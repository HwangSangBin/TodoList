package com.example.demo.service;

import com.example.demo.Dto.TodoDto;
import java.util.List;
import com.example.demo.Entity.Todo;
import com.example.demo.Repository.TodoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class TodoService {
    private final TodoRepository todoRepository;
    // 추가
    public void saveTodo(TodoDto todoDto){
        Todo t = new Todo();
        t.setTodoId(todoDto.getTodoId());
        t.setCheckBox(todoDto.getCheckBox());
        t.setTodoContent(todoDto.getTodoContent());
        t.setTodoDate(todoDto.getTodoDate());
        todoRepository.save(t);
    }
    // 읽기
    public List<Todo> loadTodo() {
        List<Todo> tl = todoRepository.findAll();
        return tl;
    }
    // 체크 박스 수정
    // 삭제
    public void deleteById(int todoId){
        todoRepository.deleteById((long)todoId);
    }
}
