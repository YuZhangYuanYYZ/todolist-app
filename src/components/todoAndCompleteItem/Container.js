import { connect } from 'react-redux'
import View from './View'
import { setTodo } from "../../redux/actions";

const mapStateToProps = state => {
    return {
        todos: state.todos,
    }
}

const mapDispatchToProps = dispatch => {
    return {
       
        setTodos: payload => {
            dispatch(setTodo(payload));
        }
    };
}

const WholeItems = connect(
    mapStateToProps,
    mapDispatchToProps
)(View)

export default WholeItems;

