import { connect } from 'react-redux'
import View from './View'
function completedTodos(todos, filter) {
    if ((filter === "SHOW_ALL") || (filter === "SHOW_COMPLETED")) {
        return todos.filter((todo) => todo.completed === true)
    }
    else {
        return [];
    }
}

const mapStateToProps = state => {
    return {
        todos: completedTodos(state.todos, state.filter),
        filter: state.filter
    }
}

const TodoItem = connect(
    mapStateToProps
)(View)

export default TodoItem;

