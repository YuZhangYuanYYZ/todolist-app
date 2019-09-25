import React from 'react';
import './style.css'
import PropTypes from 'prop-types'
import CommonTodoList from '../CommonTodoList'
import { Draggable , Droppable } from "react-beautiful-dnd";

function View({ todos }) {
   return (
       <div className = "complete">
           <ul>
    <Droppable droppableId="droppable">
    {(provided, snapshot) => (
      <div
        {...provided.droppableProps}
        ref={provided.innerRef}
        style={{ backgroundColor: provided.isDragging ? 'green' : 'lightblue' }}
        >
    {todos && todos.map((todo, index) => (< CommonTodoList todo={todo}  index ={index} />))}
      {provided.placeholder}
</div>
)}
</Droppable>
</ul>
</div>)}

View.propTypes = {
    todos: PropTypes.array.isRequired,
}
export default View;