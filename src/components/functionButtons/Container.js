import { connect } from 'react-redux'
import View from './View'
import { completeToggle } from "../../redux/actions";
import { deleteTodo ,saveDate} from "../../redux/actions";

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

        onDeleteItem: payload => {
            dispatch(deleteTodo(payload));
        }, 
        saveDate: payload => {
            dispatch(saveDate(payload))
        }
    };
}

const FunctionButtons = connect(
    mapStateToProps,
    mapDispatchToProps
)(View)

export default FunctionButtons;

