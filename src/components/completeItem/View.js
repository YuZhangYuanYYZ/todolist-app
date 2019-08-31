import React from 'react';
import './style.css'
import FunctionButtons from '../functionButtons'

function View(props) {

    let completeList = props.todos && props.todos.map((todo, index) => {
        if ((todo.completed === true) && ((props.filter === "SHOW_ALL") || (props.filter === "SHOW_COMPLETED"))) {
            return (<li key={index} data-index={index}> {todo.text} <FunctionButtons /> </li>);
        }
        else {
            return null;
        }
    })

    if ((props.filter === "SHOW_ALL") || (props.filter === "SHOW_COMPLETED")) {
        return (
            <ul className="todo" id="completed">
                {completeList}
            </ul >
        );
    }
    else {
        return null
    }

}


export default View;