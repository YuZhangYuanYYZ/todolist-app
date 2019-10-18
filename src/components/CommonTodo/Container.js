import { connect } from 'react-redux'
import View from './View'
import { judgeDoubleClick } from "../../redux/actions";

const mapStateToProps = state => {
    return {
        showSideBar:state.showSideBar
        }
    }

const mapDispatchToProps = dispatch => {
    return {
        judgeDoubleClick: (payload) => {
            dispatch(judgeDoubleClick(payload))
        }


    }
}
const CommonTodo = connect(
    null,
    mapDispatchToProps
)(View)

export default CommonTodo;

