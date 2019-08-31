import React from 'react';
import FunctionButtons from './functionButtons'

function convertDataToClassName(todo) {
    return todo.completed ? "completed-li" : "todo-li";
}

function CommonTodoList({ todos }) {
    const completeList = todos && todos.map((todo, index) => {
        return (
            <li key={index} data-index={index} className={convertDataToClassName(todo)}>
                {todo.text} <FunctionButtons />
            </li>);
    });
    return (
        <ul className="todo">
            {completeList}
        </ul >
    );
}

export default CommonTodoList;