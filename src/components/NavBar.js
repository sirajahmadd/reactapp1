import React from 'react'
import {Link} from 'react-router-dom'


function NavBar() {
  return (
    <div>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/teams">Teams</Link>
        <Link to="/form">Add-student</Link>
        <Link to="/todo-list">To Do List </Link>
        
    </div>
  );
}

export default NavBar