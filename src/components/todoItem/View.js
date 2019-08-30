import React from 'react';
import './style.css'
import FunctionButtons from '../functionButtons'
import PropTypes from 'prop-types'
function View({ todos }) {
    let todoList = todos && todos.map((todo, index) => {
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
View.propoTypes = {
    todos: PropTypes.array.isRequired,
}
export default View;