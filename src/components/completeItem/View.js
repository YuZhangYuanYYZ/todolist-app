import React from 'react';
import './style.css'
import CommonTodoList from '../CommonTodoList'

function View({ todos }) {
    return (<CommonTodoList todos={todos} id="completed" />)
}

export default View;