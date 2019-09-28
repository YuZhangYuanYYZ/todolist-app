import React from 'react';
import FunctionButtons from './functionButtons'
import { Draggable , Droppable } from "react-beautiful-dnd";
function convertDataToClassName(todo) {
    return todo.completed ? "completed-li" : "todo-li";
}

function CommonTodoList(props) {
    return (
     <Draggable key={props.todo.id} draggableId={props.index.toString()} index={props.index}>
     {(provided, snapshot) => (
    <div
    ref={provided.innerRef}
    {...provided.draggableProps}
    {...provided.dragHandleProps}
    style={snapshot.isDragging,
        provided.draggableProps.style }
    >
    {
     <li key={props.todo.id} data-index={props.index} className={convertDataToClassName(props.todo)}>{props.todo.text} <FunctionButtons />
    </li>
    }
  </div>
)}
</Draggable>);
}

export default CommonTodoList;