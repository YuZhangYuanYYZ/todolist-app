import { connect } from 'react-redux'
import View from './View'
import { saveDate ,hideSideBar} from "../../redux/actions";

const mapStateToProps = state => {
    return {
        todos: state.todos,
        id:state.showSideBarGetTodoid,
        showSideBar:state.showSideBar
    }
}

const mapDispatchToProps = dispatch => {
    return {
        saveDate: payload => {
            dispatch(saveDate(payload))
        },
        hideSideBar:()=>{
            dispatch(hideSideBar())
        }
    };
}

const RightSideBar = connect(
    mapStateToProps,
    mapDispatchToProps
)(View)

export default RightSideBar;

