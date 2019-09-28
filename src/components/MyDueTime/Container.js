import { connect } from 'react-redux'
import View from './View'
import { saveDate } from "../../redux/actions";

const mapStateToProps = state => {
    return {
        todos: state.todos,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        saveDate: payload => {
            dispatch(saveDate(payload))
        }
    };
}

const MyDueTime = connect(
    mapStateToProps,
    mapDispatchToProps
)(View)

export default MyDueTime;

