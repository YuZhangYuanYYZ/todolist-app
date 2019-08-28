import { connect } from 'react-redux'
import View from './View'

const mapStateToProps = state => {
    return {
        completes: state.completes,
    }
}

const CompleteItem = connect(
    mapStateToProps
)(View)

export default CompleteItem;

