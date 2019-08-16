import React from 'react';
import './style.css'
import { Data } from '../Data.js';

function View() {
    let completeList = Data.completed.map((list) => <li key={list.toString()}> {list} </li>);
    let functionButtons = (
        <div className="buttons">
            <button className="remove">Delete</button>
            <button className="complete">Complete</button>
        </div>
    );
    return (
        <ul className="todo" id="completed">
            {completeList} 
            {functionButtons} 
        </ul >
    );
}


export default View;