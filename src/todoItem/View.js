import React from 'react';
import './style.css'

function View(props) {
    function removeHandeler(e) {
        let grandParent = e.target.parentNode.parentNode;
        let dataIndex = grandParent.dataset.index;
        let todoArray = JSON.parse(localStorage.getItem('todoList')).todo;

        //localStorage.getItem('todoList')
        //let newLocalData = todoArray.filter((number) => dataSet !== todoArray.indexOf[number]);
        let newtodoArray = todoArray.filter((number) => number !== todoArray[dataIndex]);
        // props.data = { todo: newtodoArray, completed: [] };
        //let todoArray = localStorage.getItem('Data.todo').todo;
        console.log(newtodoArray)
        console.log(props.data);
    }
    const completeHandeler = function () {

    }
    let functionButtons = (
        <div className="buttons">
            <button className="remove" onClick={removeHandeler}>Delete</button>
            <button className="complete" onClick={completeHandeler}>Complete</button>
        </div>);
    let todoList = props.data.todo.map((list, index) => <li key={index} data-index={index}> {list} {functionButtons} </li>);

    return (
        <ul className="todo" id="todo">
            {todoList}

        </ul >
    );
}


export default View;