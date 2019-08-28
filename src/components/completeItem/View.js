import React from 'react';
import './style.css'
import FunctionButtons from '../functionButtons'

function View(props) {

    let completeList = props.completes && props.completes.map((complete, index) => <li key={index} data-index={index}> {complete.text} <FunctionButtons /> </li>);


    return (
        <ul className="todo" id="completed">
            {completeList}

        </ul >
    );
}


export default View;