import { connect } from 'react-redux'
import View from './View'
function activeTodos(todos, filter) {
    if ((filter === "SHOW_ALL") || (filter === "SHOW_ACTIVE")) {
        return todos.filter((todo) => todo.completed === false)
    }
    else {
        return [];
    }
}

const mapStateToProps = state => {
    return {
        todos: activeTodos(state.todos, state.filter),
        filter: state.filter
    }
}

const TodoItem = connect(
    mapStateToProps
)(View)

export default TodoItem;

