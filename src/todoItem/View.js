import React from 'react';
import './style.css'
import store from '../store.js'
function View(props) {
    function removeHandeler(e) {
        let grandParent = e.target.parentNode.parentNode;
        let dataIndex = Number(grandParent.dataset.index);
        store.dispatch({ type: "DELETE_TODO", payload: dataIndex })

    }
    const completeHandeler = function (e) {
        let grandParent = e.target.parentNode.parentNode;
        let dataIndex = grandParent.dataset.index;
        let value = Number(store.getState().todos[dataIndex].text);
        store.dispatch({ type: "ADD_TODO_COMPLETE", payload: value });
        console.log("here3"); console.log(store.getState())
    }
    let functionButtons = (
        <div className="buttons">
            <button className="remove" onClick={removeHandeler}>Delete</button>
            <button className="complete" onClick={completeHandeler}>Complete</button>
        </div>);
    let todoList = store.getState().todos.map((list, index) => <li key={index} data-index={index}> {list.text} {functionButtons} </li>);

    return (
        <ul className="todo" id="todo">
            {todoList}

        </ul >
    );
}


export default View;