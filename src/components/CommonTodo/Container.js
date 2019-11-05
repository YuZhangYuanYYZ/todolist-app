import { connect } from 'react-redux'
import View from './View'
import { showSideBarTogle} from "../../redux/actions";

const mapStateToProps = state => {
    return {
        showSideBar:state.showSideBar
        }
    }

const mapDispatchToProps = dispatch => {
    return {
        showSideBarTogle: (payload) => {
            dispatch(showSideBarTogle(payload))
        }
    }
}
const CommonTodo = connect(
    mapStateToProps,
    mapDispatchToProps
)(View)

export default CommonTodo;

