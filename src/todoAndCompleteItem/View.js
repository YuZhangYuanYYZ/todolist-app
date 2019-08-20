import React from 'react';
import './style.css'
import TodoItem from '../todoItem';
import CompleteItem from '../completeItem';
import store from '../store.js'


class View extends React.Component {
    constructor(props) {
        super(props);
        this.state = { todos: [], completes: [] }
    }
    componentDidMount() {
        store.subscribe(() => {
            this.setState({ todos: store.getState().todos, completes: store.getState().completes });
        })
    }

    render() {
        if (this.state.todos.length >= 1) {
            return (
                <div className="toDoListContainer">
                    <TodoItem data={this.state.todos} />
                    <CompleteItem data={this.state.completes} />
                </div>
            );
        }
        else {
            return null;
        }
    }

}


export default View;