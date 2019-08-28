import { connect } from 'react-redux'
import View from './View'

import { addTodo } from "../../redux/actions";

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

