import { connect } from 'react-redux'
import View from './View'
function getVisibleTodos(todos, filter) {
    if (filter === "SHOW_COMPLETED") {
        return todos.filter((todo) => todo.completed)
    }
    else if (filter === "SHOW_ACTIVE") {
        return todos.filter((todo) => !todo.completed)
    }
    else if (filter === "SHOW_ALL") {
        return todos
    }
}

const mapStateToProps = state => {
    return {
        todos: getVisibleTodos(state.todos, state.filter),
        filter: state.filter
    }
}

const TodoItem = connect(
    mapStateToProps
)(View)

export default TodoItem;

