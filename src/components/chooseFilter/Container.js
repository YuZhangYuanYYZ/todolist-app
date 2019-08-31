import { connect } from 'react-redux'
import View from './View'
import { showAll, showActive, showCompleted } from "../../redux/actions";

const mapDispatchToProps = dispatch => {
    return {
        onAllClick: () => {
            dispatch(showAll())
        },
        onActiveClick: () => {
            dispatch(showActive())
        },
        onCompletedClick: () => {
            console.log("entercompleted")

            dispatch(showCompleted())
        },


    }
}
const ChooseFilter = connect(
    null,
    mapDispatchToProps
)(View)

export default ChooseFilter;

