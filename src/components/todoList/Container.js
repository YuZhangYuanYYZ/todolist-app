import { connect } from 'react-redux'
import View from './View'

const addTodo = (payload) => {
    return {
        type: "ADD_TODO",
        payload: payload
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onInputEnter: payload => {
            dispatch(addTodo(payload))
        }
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos,
        completes: state.completes,
    }
}

const TodoList = connect(
    mapStateToProps,
    mapDispatchToProps,
)(View)

export default TodoList;

