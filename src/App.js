import React, { Component,useEffect } from 'react';
import './App.css';
import TodoList from './components/todoList';
import store from './redux/store'
import { receiveTodos } from './redux/actions'





function App (props) {
  let todos;
  useEffect(()=>{
    window.fetch('http://localhost:3004/todos ')
      .then(res => res.json())
      .then(json => {
        store.dispatch(receiveTodos(json));
 todos = store.getState().todos;

      });
  })
  console.log(todos,"todos2")

    return (
      <div className="App" >
        <TodoList todos={todos}/>
      </div>

    );

}

export default App;
