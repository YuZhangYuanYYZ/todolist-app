import { connect } from 'react-redux'
import View from './View'

const completeTodo = (payload) => {
    return {
        type: "ADD_TODO_COMPLETE",
        payload: payload
    }
};

const mapStateToProps = state => {
    return {
        todos: state.todos,
        completes: state.completes,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onCompleteButtonClick: payload => {
            dispatch(completeTodo(payload))
        },
    }
}

const FunctionButtons = connect(
    mapStateToProps,
    mapDispatchToProps
)(View)

export default FunctionButtons;

