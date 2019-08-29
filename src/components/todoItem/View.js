import React from 'react';
import './style.css'
import FunctionButtons from '../functionButtons'
function View(props) {
    let todoList = props.todos && props.todos.map((todo, index) => {
        if (todo.completed === false) {
            return (<li key={index} data-index={index}> {todo.text} <FunctionButtons /> </li>)
        }
    });

    return (
        <ul className="todo" id="todo">
            {todoList}
        </ul >
    );
}
export default View;