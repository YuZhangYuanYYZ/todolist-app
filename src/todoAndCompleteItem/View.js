import React from 'react';
import './style.css'
import TodoItem from '../todoItem';
import CompleteItem from '../completeItem';
//import { Data } from '../Data.js';

function View(props) {
    // let dataLength = props.data.todo.length + props.data.completed.length;
    console.log("I'm here")
    console.log(props.data);
    if (props.data.todo.length >= 1) {
        return (
            <div className="toDoListContainer">
                <TodoItem data={props.data} />
                <CompleteItem data={props.data} />
            </div>
        );
    }
    else {
        return null;
    }
}


export default View;