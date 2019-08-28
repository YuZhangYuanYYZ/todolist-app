import React from 'react';
import './style.css'
import TodoItem from '../todoItem';
import CompleteItem from '../completeItem';

class View extends React.Component {
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

