import React from 'react';
import './style.css'
import TodoAndCompleteItem from '../todoAndCompleteItem'
import ChooseFilter from '../chooseFilter'
import addIcon from './addIcon.svg'

class View extends React.Component {
    constructor(props) {
        super(props);
        this.addItemByEnter = this.addItemByEnter.bind(this)

    }
    postTodo(postOptions) {
        fetch('http://localhost:3004/todos', postOptions)
            .then(res => res.json())
            .then(json => {
                this.props.onInputEnter(json)
            });
    }
    addItemByEnter(e) {
        let inputValue = this.input.value
        if ((inputValue) && ((e.key === 'Enter') || (e.key === 'NumpadEnter'))) {
            this.input.value = '';
            const postOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    
                    completed: false,
                    dueTime: new Date(),
                    text: inputValue,
                    favorate:false
                })
            }
            this.postTodo(postOptions);
        }
    }


    render() {
        return (
            <div>
                <header>
                    <input ref={node => this.input = node} id="item" placeholder="Enter your todolist" onKeyDown={this.addItemByEnter}></input>
                    <button id="add">
                       <img src={addIcon} className="add-icon" alt='add'/>
                    </button>
                </header>
                <div className="todoAndDateSelect"><TodoAndCompleteItem /> 
                </div>
                <div><ChooseFilter />  </div>
            </div>
        )
    }
}

export default View;