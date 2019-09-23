import React from 'react';
import './style.css'
import CompleteItem from '../completeItem';

class View extends React.Component {
    render() {
        return (
            <div className="toDoListContainer">
                <CompleteItem />
            </div>
        );
    }
}


export default View;

