import React, { useEffect } from 'react';
import './App.css';
import TodoList from './components/todoList';

import store from './redux/store'
import { fetchTodos } from './redux/actions/'

function App (props) {
  useEffect(()=>{
    store.dispatch(fetchTodos());
  })

    return (
      <div className="App" >
        <TodoList />
      </div>
    );

}

export default App;
