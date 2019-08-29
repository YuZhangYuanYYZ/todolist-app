import { connect } from 'react-redux'
import View from './View'

const mapStateToProps = state => {
    return {
        todos: state.todos,
    }
}

const TodoItem = connect(
    mapStateToProps
)(View)

export default TodoItem;

