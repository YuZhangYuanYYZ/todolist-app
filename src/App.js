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
 //odos = store.getState().todos;

      });
  })

    return (
      <div className="App" >
        <TodoList />
       
      </div>

    );

}

export default App;
