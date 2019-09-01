import React, { Component } from 'react';
import './App.css';
import TodoList from './components/todoList';
import store from './redux/store'

const receiveTodos = (payload) => {
  return {
    type: "RECEIVE_TODOS",
    payload: payload,
  }
}

async function getTodos() {
  window.fetch('http://localhost:3004/todos')
    .then(res => res.json())
    .then(json => {
      store.dispatch(receiveTodos(json))
    });
}


class App extends Component {
  componentWillMount() {
    getTodos();
  }

  render() {
    return (
      <div className="App" >
        <TodoList />
      </div>

    );
  }
}

export default App;
