import React from 'react'
import TodolistHeader from './components/ToDoList/TodolistHeader'
import ListTodo from './components/ToDoList/ListTodo';

function TodoList() {
  return (
    <div >
      <center>
      <TodolistHeader/>   {/*  //display which is written in TodolistHeader.js file */}
      <ListTodo/>
      </center>
    </div>
    
  );
}

export default TodoList