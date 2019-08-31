import React from 'react';
import './style.css'
import FunctionButtons from '../functionButtons'

function View({ todos, filter }) {

    let completeList = todos && todos.map((todo, index) => {
        if ((todo.completed === true) && ((todo.filter === "SHOW_ALL") || (todo.filter === "SHOW_COMPLETED"))) {
            return (<li key={index} data-index={index}> {todo.text} <FunctionButtons /> </li>);
        }
        else {
            return null;
        }
    })

    if ((filter === "SHOW_ALL") || (filter === "SHOW_COMPLETED")) {
        console.log(filter)
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