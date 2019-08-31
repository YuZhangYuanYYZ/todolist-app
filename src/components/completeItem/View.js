import React from 'react';
import './style.css'
import FunctionButtons from '../functionButtons'

function View(props) {

    let completeList = props.todos && props.todos.map((todo, index) => {
        return (<li key={index} data-index={index}> {todo.text} <FunctionButtons /> </li>);
    });
    return (
        <ul className="todo" id="completed">
            {completeList}
        </ul >
    );
}

export default View;