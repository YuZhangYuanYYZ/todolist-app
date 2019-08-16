import React from 'react';
import './style.css'
import Data from '../Data.js';

// class View extends Component {
//     constructor(props) {
//         super(props);
//     }
//     todoLists() {
//         let todoList = Data.todo.map((list) => { <li key={list.toString()}> {list.JSON.parse()} </li> });
//         return todoList;
//     }
//     render() {
//         return (
//             <ul class="todo" id="todo">
//                 {todoLists()}
//             </ul >
//         );
//     }
// }

function View() {

    let todoList = Data.todo.map((list) => <li key={list.toString()}> {list} </li>);
    let functionButtons = (<div className="buttons">
        <button className="remove">Delete</button>
        <button className="complete">Complete</button>
    </div>);
    return (

        <ul className="todo" id="todo">
            {todoList}
            {functionButtons}
        </ul >
    );
}


export default View;