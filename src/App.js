import React, { useEffect } from 'react';
import './App.css';
import TodoList from './components/todoList';

import store from './redux/store'
import { receiveTodos } from './redux/actions'

function App (props) {
  useEffect(()=>{
    window.fetch('http://localhost:3004/todos')
      .then(res => res.json())
    
      .then(json => {
       return store.dispatch(receiveTodos(json));
      }    
     );
     
  })

    return (
      <div className="App" >
        <TodoList />
       
      </div>

    );

}

export default App;
