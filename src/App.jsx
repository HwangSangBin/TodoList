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
    "todoid": "",
    "checkBox": "",
    "todoContent": "",
    "todoDate": ""
  }]);
  const idRef = useRef(todo.length);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/todo/read");
        setTodo(response.data);
        idRef.current = response.data.length;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const onCreate = (todoContent) => {
    const newData = {
      todoid: idRef.current,
      checkBox: false,
      todoContent,
      todoDate: new Date().getTime()
    };
  
    const addData = async () => {
      try {
        await axios.post("http://localhost:8080/todo/add", newData);
        setTodo([...todo, newData]);

      }catch(error){
        console.log("Error");
      }
    }
    addData();
    console.log(todo)
    console.log(newData)
  };

  const onUpdate = (targetId) => {
    setTodo(
      todo.map((it) => 
          it.id === targetId ? {...it, isDone : !it.isDone} : it
      )
    )
  }

  const onDelete = (targetId) => {
    setTodo(
      todo.filter((it) => it.id !== targetId)
    )
  }

  return (
    <div className='App'>
      <TodoDate />
      <TodoWrite onCreate={onCreate}/>
      <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete}/>
      <button onClick={() => {console.log(todo);
      }}>button</button>
    </div>
  )
}

export default App
