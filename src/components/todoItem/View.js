import React from 'react';
import './style.css'
import PropTypes from 'prop-types'
import CommonTodoList from '../CommonTodoList'

function View({ todos }) {
    return (<CommonTodoList todos={todos} id="todo" />)
}

View.propTypes = {
    todos: PropTypes.array.isRequired,
}
export default View;