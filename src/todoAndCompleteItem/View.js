import React from 'react';
import './style.css'
import TodoItem from '../todoItem';
import CompleteItem from '../completeItem';
import store from '../store.js'


class View extends React.Component {
    // componentDidMount() {
    //     store.subscribe(() => {
    //         this.setState({ todos: store.getState().todos, completes: store.getState().completes });
    //     })
    // }

    render() {
        return (
            <div className="toDoListContainer">
                <TodoItem />
                <CompleteItem />
            </div>
        );
    }

}


export default View;

