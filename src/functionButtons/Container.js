import { connect } from 'react-redux'
import View from './View'

const addTodoToComplete = (payload) => {
    return {
        type: "ADD_TODO_COMPLETE",
        payload: payload
    }
};
const deleteTodo = (payload) => {
    return {
        type: "DELETE_TODO",
        payload: payload
    }
}
const deleteComplete = (payload) => {
    return {
        type: "DELETE_COMPLETE",
        payload: payload
    }
}
const addCompleteToTodo = (payload) => {
    return {
        type: "ADD_COMPLETE_TODO",
        payload: payload
    }
}


const mapStateToProps = state => {
    return {
        todos: state.todos,
        completes: state.completes,
    }
}

const mapDispatchToProps = dispatch => {
    return (
        {
            onCompletedCompleteButtonClick: payload => {
                dispatch(addCompleteToTodo(payload))
            },

            onTodoCompleteButtonClick: payload => {
                dispatch(addTodoToComplete(payload))
            },

            onTodoDeleteButtonClick: payload => {
                dispatch(deleteTodo(payload));
            },

            onCompleteDeleteButtonClick: payload => {
                dispatch(deleteComplete(payload));
            }
        });

}

const FunctionButtons = connect(
    mapStateToProps,
    mapDispatchToProps
)(View)

export default FunctionButtons;

