import React from 'react';
import './style.css'
import PropTypes from 'prop-types'
import CommonTodoList from '../CommonTodo'
import { Droppable } from "react-beautiful-dnd";

function View({ todos }) {
   return (
    // <div className = "complete"> 
    <ul className='todo'>
    <Droppable droppableId="droppable">
    {(provided, snapshot) => (
      <div
        {...provided.droppableProps}
        ref={provided.innerRef}
        style={{ backgroundColor: snapshot.isDragging ? 'green' : 'lightblue' }}
        >
      
       {todos && todos.map((todo, index) => < CommonTodoList todo={todo} todos={todos} index ={index} />)}
       
      {provided.placeholder}
</div>
)}
</Droppable>
</ul>
)}

View.propTypes = {
    todos: PropTypes.array.isRequired,
}
export default View