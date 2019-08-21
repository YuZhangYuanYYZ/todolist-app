import React from 'react';
import './style.css'
import store from '../store.js'
function View(props) {

    let functionButtons = (
        <div className="buttons">
            <button className="remove">Delete</button>
            <button className="complete" >Complete</button>
        </div>
    );

    let completeList = store.getState().completes.map((list, index) => <li key={index} data-index={index}> {list.text} {functionButtons} </li>);


    return (
        <ul className="todo" id="completed">
            {completeList}

        </ul >
    );
}


export default View;