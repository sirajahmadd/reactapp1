import React, { useState } from 'react'
import { Form } from 'react-router-dom'
import TodolistForm from './TodolistForm'

function ListTodo() {
  const [todos, setTodos] = useState([]); //contains all to do list
  const addToDo = (todo) => {
    console.log(todo);
    const toDosCopy = [...todos]
    toDosCopy.push(todo);
    setTodos(toDosCopy);
  }
  const markAsCompleted = (name) => {
    const index = todos.findIndex(todo => todo.name === name)
    const toDosCopy = [...todos]
    toDosCopy[index].completed = !toDosCopy[index].completed;
    setTodos(toDosCopy)
  }

  return (
    <div>
      <div>
        {
          todos.map((todo) => {
            return <p key={todo.name} onClick={() => markAsCompleted(todo.name)} className={todo.completed ? "strike" : ""}>{todo.name}</p>;
          })
        }
      </div>

      <TodolistForm onAddToDoCallback={addToDo} />
    </div>
  );
}

export default ListTodo