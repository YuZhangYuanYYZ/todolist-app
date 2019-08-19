import React from 'react';
import './style.css'
// import { Data } from '../Data.js';

function View(props) {
    let functionButtons = (
        <div className="buttons">
            <button className="remove">Delete</button>
            <button className="complete">Complete</button>
        </div>
           );
    let completeList = props.data.completed.map((list) => <li key={list.toString()}> {list}  {functionButtons} </li>);

 
    return (
        <ul className="todo" id="completed">
            {completeList} 
           
        </ul >
    );
}


export default View;