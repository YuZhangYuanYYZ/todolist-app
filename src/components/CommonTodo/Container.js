import { connect } from 'react-redux'
import View from './View'
import { judgeDoubleClick } from "../../redux/actions";

const mapDispatchToProps = dispatch => {
    return {
        judgeDoubleClick: () => {
            dispatch(judgeDoubleClick())
        }


    }
}
const CommonTodo = connect(
    null,
    mapDispatchToProps
)(View)

export default CommonTodo;

