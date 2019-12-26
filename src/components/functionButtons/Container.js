import { connect } from 'react-redux'
import View from './View'
import { completeToggle ,favorateToggle} from "../../redux/actions";
import { saveDate} from "../../redux/actions";

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

