import React from 'react';
import './style.css'
import FunctionButtons from '../functionButtons'

function View(props) {
    let todoList = props.todos.map((list, index) => <li key={index} data-index={index}> {list.text} <FunctionButtons /> </li>);
    return (
        <ul className="todo" id="todo">
            {todoList}
        </ul >
    );
}


export default View;