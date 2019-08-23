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
        let dataIndex = Number(grandParent.dataset.index);
        store.dispatch({ type: "DELETE_TODO", payload: dataIndex })

    }
    completeHandeler(e) {
        let grandParent = e.target.parentNode.parentNode;
        let dataIndex = grandParent.dataset.index;
        let value = Number(store.getState().todos[dataIndex].text);
        store.dispatch({ type: "ADD_TODO_COMPLETE", payload: value });
        console.log("here3"); console.log(store.getState())
    }
    render() {
        return (
            <div className="buttons" >
                <button className="remove" onClick={this.removeHandeler}>Delete</button>
                <button className="complete" onClick={this.completeHandeler}>Complete</button>
            </div>
        )
    }

}


export default View;