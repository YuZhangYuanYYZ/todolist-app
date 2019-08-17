import React from 'react';
import './style.css'
import TodoItem from '../todoItem';
import CompleteItem from '../completeItem';
import { Data } from '../Data.js';

function View() {
    let dataLength = Data.todo.length + Data.completed.length;
    console.log(`original datalength is ${dataLength}`);
    if (dataLength >= 1) {
        return (
            <div className="toDoListContainer">
                <TodoItem />
                <CompleteItem />
            </div>
        );
    }
    else {
        return null;
    }
}


export default View;