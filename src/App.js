import React from 'react';
import './App.css';
import TodoList from './todoList';
import { Provider } from 'react-redux'
import store from './store.js'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
