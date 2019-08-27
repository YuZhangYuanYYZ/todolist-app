import React from 'react';
import './style.css'
import store from '../store.js'
class View extends React.Component {
    constructor(props) {
        super(props);
        this.state = { todos: [], completes: [] };
        this.removeHandeler = this.removeHandeler.bind(this);
        this.completeHandeler = this.completeHandeler.bind(this);
    }
    componentDidMount() {
        store.subscribe(() => {
            this.setState({ todos: store.getState().todos, completes: store.getState().completes })
        })
    }
    removeHandeler(e) {
        let grandParent = e.target.parentNode.parentNode.parentNode;
        let grandParentId = grandParent.parentNode.id;
        let dataIndex = Number(grandParent.dataset.index);
        if (grandParentId === "todo") {
            store.dispatch({ type: "DELETE_TODO", payload: dataIndex })
        }
        if (grandParentId === "completed") {
            store.dispatch({ type: "DELETE_COMPLETE", payload: dataIndex })
        }

    }
    completeHandeler(e) {
        let grandParent = e.target.parentNode.parentNode.parentNode;
        let grandParentId = grandParent.parentNode.id;
        let dataIndex = Number(grandParent.dataset.index);

        if (grandParentId === "todo") {
            let value = Number(store.getState().todos[dataIndex].text);
            store.dispatch({ type: "DELETE_TODO", payload: dataIndex });
            store.dispatch({ type: "ADD_TODO_COMPLETE", payload: value });
        }
        if (grandParentId === "completed") {
            let value = Number(store.getState().completes[dataIndex].text);
            store.dispatch({ type: "DELETE_COMPLETE", payload: dataIndex });
            store.dispatch({ type: "ADD_COMPLETE_TODO", payload: value });
        }

    }
    render() {
        return (
            <div className="buttons" >
                <button className="remove"  >
                    <svg onClick={this.removeHandeler} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style={{ enablebackground: "new 0 0 22 22" }} xml space="preserve"><rect className="noFill" width="22" height="22" /><g><g><path className="fill" d="M16.1,3.6h-1.9V3.3c0-1.3-1-2.3-2.3-2.3h-1.7C8.9,1,7.8,2,7.8,3.3v0.2H5.9c-1.3,0-2.3,1-2.3,2.3v1.3c0,0.5,0.4,0.9,0.9,1v10.5c0,1.3,1,2.3,2.3,2.3h8.5c1.3,0,2.3-1,2.3-2.3V8.2c0.5-0.1,0.9-0.5,0.9-1V5.9C18.4,4.6,17.4,3.6,16.1,3.6z M9.1,3.3c0-0.6,0.5-1.1,1.1-1.1h1.7c0.6,0,1.1,0.5,1.1,1.1v0.2H9.1V3.3z M16.3,18.7c0,0.6-0.5,1.1-1.1,1.1H6.7c-0.6,0-1.1-0.5-1.1-1.1V8.2h10.6V18.7z M17.2,7H4.8V5.9c0-0.6,0.5-1.1,1.1-1.1h10.2c0.6,0,1.1,0.5,1.1,1.1V7z" /></g><g><g><path class="fill" d="M11,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6s0.6,0.3,0.6,0.6v6.8C11.6,17.7,11.4,18,11,18z" /></g><g><path class="fill" d="M8,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6v6.8C8.7,17.7,8.4,18,8,18z" /></g><g><path class="fill" d="M14,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6v6.8C14.6,17.7,14.3,18,14,18z" /></g></g></g></svg>
                </button>
                <button className="complete" >
                    <svg onClick={this.completeHandeler} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style={{ enablebackground: "new 0 0 22 2" }} xml space="preserve">
                        <rect y="0" className="noFill" width="22" height="22" />
                        <g>
                            <path className="fill" d="M9.7,14.4L9.7,14.4c-0.2,0-0.4-0.1-0.5-0.2l-2.7-2.7c-0.3-0.3-0.3-0.8,0-1.1s0.8-0.3,1.1,0l2.1,2.1l4.8-4.8c0.3-0.3,0.8-0.3,1.1,0s0.3,0.8,0,1.1l-5.3,5.3C10.1,14.3,9.9,14.4,9.7,14.4z" />
                        </g>
                    </svg>

                </button>
            </div>
        )
    }

}


export default View;

