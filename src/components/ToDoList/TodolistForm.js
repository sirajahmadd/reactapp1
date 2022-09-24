import React,{useState} from 'react'


function TodolistForm(props) {
  const [todo,setTodo] = useState({name:"", completed:false});

const handleSubmit = (e) =>{
  e.preventDefault();
  props.onAddToDoCallback(todo);
  setTodo({name: "",completed:false})
}

  return (
    <div>
      <form value="formborder" onSubmit={handleSubmit}>
        <input type="text" value={todo.name} placeholder='enter a to-do'
        onChange={(e) => setTodo({name: e.target.value, completed: false})}></input><br></br>
        <button>ADD ITEM</button>
      </form>
    </div>
  )
}

export default TodolistForm