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
        let grandParent = e.target.parentNode.parentNode;
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
        let grandParent = e.target.parentNode.parentNode;
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
                <button className="remove" onClick={this.removeHandeler}>DELETE</button>
                <button className="complete" onClick={this.completeHandeler}>COMPLETE</button>
            </div>
        )
    }

}


export default View;