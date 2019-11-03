import React from 'react';
import './style.css'
import PropTypes from 'prop-types'
import CommonTodoList from '../CommonTodo/View'
import {Droppable } from "react-beautiful-dnd";

function View({ todos }) {
   return (
    <Droppable droppableId="droppable">
    {(provided, snapshot) => (
      <div
        {...provided.droppableProps}
        ref={provided.innerRef}
        style={getListStyle(snapshot.isDraggingOver)}
      >
    {todos && todos.map((todo, index) => <CommonTodoList todo={todo} index ={index} id="todo" />)}
      {provided.placeholder}
</div>
)}
</Droppable>
    )}

View.propTypes = {
    todos: PropTypes.array.isRequired,
}
export default View;