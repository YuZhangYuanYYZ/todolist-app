import { connect } from 'react-redux'
import View from './View'

const mapStateToProps = state => {
    return {
        todos: state.todos,
        filter: state.filter
    }
}

const TodoItem = connect(
    mapStateToProps
)(View)

export default TodoItem;

