import React from 'react';
import './style.css'
import TodoItem from '../todoItem';
import CompleteItem from '../completeItem';

function View(props) {
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