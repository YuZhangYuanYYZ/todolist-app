import React from 'react';
import './style.css'
import FunctionButtons from '../functionButtons'
import PropTypes from 'prop-types'
function View({ todos, filter }) {
    let todoList = todos && todos.map((todo, index) => {
        if (todo.completed === false) {
            return (<li key={index} data-index={index}> {todo.text} <FunctionButtons /> </li>)
        }
        else {
            return null;
        }
    });
    if ((filter === "SHOW_ALL") || (filter === "SHOW_ACTIVE")) {
        return (
            <ul className="todo" id="todo">
                {todoList}
            </ul >
        );
    }
    else {
        return null
    }

}
View.propTypes = {
    todos: PropTypes.array.isRequired,
}
export default View;