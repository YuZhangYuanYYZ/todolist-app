import { connect } from 'react-redux'
import View from './View'
import { completeToggle ,favorateToggle} from "../../redux/actions";
import { deleteTodo ,saveDate,receiveTodos} from "../../redux/actions";

const mapStateToProps = state => {
    return {
        todos: state.todos,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onCompleteToggle: payload => {
            dispatch(completeToggle(payload))
        },
        onFavorate: payload => {
            dispatch(favorateToggle(payload))
        },

        onDeleteItem: payload => {
            dispatch(deleteTodo(payload));
        }, 
        saveDate: payload => {
            dispatch(saveDate(payload))
        },
        onReceiveTodos: payload => {
            dispatch(receiveTodos(payload))
        }
    };
}

const FunctionButtons = connect(
    mapStateToProps,
    mapDispatchToProps
)(View)

export default FunctionButtons;

