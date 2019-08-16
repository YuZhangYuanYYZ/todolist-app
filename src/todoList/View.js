import React from 'react';
import './style.css'
import { Data } from '../Data.js';
import TodoItem from '../todoItem';
import CompleteItem from '../completeItem';

class View1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: { todo: [], completed: [] } };
        this.addItemByEnter = this.addItemByEnter.bind(this)
    }
    addItemByEnter(e) {
        let inputValue = e.target.value;
        if ((inputValue) && ((e.code === 'Enter') || (e.code === 'NumpadEnter'))) {
            Data.todo.push(inputValue);
            e.target.value = '';
        }
    }

    render() {
        return (
            <div>
                <header>
                    <input id="item" placeholder="Enter your todolist" onKeyDown={this.addItemByEnter}></input>
                    <button id="add">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns xlink="http://www.w3.org/1999/xlink" x="0px"
                            // eslint-disable-next-line react/style-prop-object
                            y="0px" viewBox="0 0 16 16" style={{ enableBackground: "new 0 0 16 16" }} xml space="preserve">
                            <g>
                                <path className="fill"
                                    d="M16,8c0,0.5-0.5,1-1,1H9v6c0,0.5-0.5,1-1,1s-1-0.5-1-1V9H1C0.5,9,0,8.5,0,8s0.5-1,1-1h6V1c0-0.5,0.5-1,1-1s1,0.5,1,1v6h6C15.5,7,16,7.5,16,8z" />
                            </g>
                        </svg>
                    </button>
                </header>

                <div className="toDoListContainer">
                    <TodoItem></TodoItem>
                    <CompleteItem></CompleteItem>
                </div>
            </div >
        )
    }
}

export default View1;