import React from 'react';
import './style.css'
import store from '../store.js'
import FunctionButtons from '../functionButtons'
function View(props) {
    let todoList = store.getState().todos.map((list, index) => <li key={index} data-index={index}> {list.text} <FunctionButtons /> </li>);

    return (
        <ul className="todo" id="todo">
            {todoList}

        </ul >
    );
}


export default View;