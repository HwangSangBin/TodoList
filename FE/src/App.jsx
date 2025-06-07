/* eslint-disable no-undef */
/* eslint-disable no-useless-catch */
import { useEffect, useRef, useState } from 'react'
import TodoDate from './Component/TodoDate'
import TodoList from './Component/TodoList'
import TodoWrite from './Component/TodoWrite'
import axios from 'axios';
import './App.css'

function App() {
  const [todo, setTodo] = useState([{
    "todoId": "",
    "checkBox": "",
    "todoContent": "",
    "todoDate": ""
  }]);
  const idRef = useRef(0);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/todo/read");
        setTodo(response.data);
        idRef.current = response.data.length+1;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const onCreate = (todoContent) => {
    const newData = {
      todoId: idRef.current,
      checkBox: false,
      todoContent,
      todoDate: new Date().getTime()
    };
  
    const addData = async () => {
      try {
        idRef.current += 1;
        await axios.post("http://localhost:8080/todo/add", newData);
        setTodo([...todo, newData]);
      }catch(error){
        console.log("Error");
      }
    }
    addData();
  };

  const onUpdate = (targetId) => {
    setTodo(
      todo.map((it) => 
          it.id === targetId ? {...it, isDone : !it.isDone} : it
      )
    )
  }

  const onDelete = async (todoId) => {
    try {
        console.log(todoId)
        await axios.post("http://localhost:8080/todo/delete/" + todoId);
        setTodo(
          todo.filter((it) => it.id !== todoId)
        )
    } catch(error){
      console.log(error);
    }
  }

  return (
    <div className='App'>
      <TodoDate />
      <TodoWrite onCreate={onCreate}/>
      <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete}/>
    </div>
  )
}

export default App
