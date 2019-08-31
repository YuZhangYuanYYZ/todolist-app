import React from 'react';
import FunctionButtons from './functionButtons'

function CommonTodoList({ todos, id }) {
    const completeList = todos && todos.map((todo, index) => {
        return (<li key={index} data-index={index}> {todo.text} <FunctionButtons /> </li>);
    });
    return (
        <ul className="todo" id={id}>
            {completeList}
        </ul >
    );
}

export default CommonTodoList;