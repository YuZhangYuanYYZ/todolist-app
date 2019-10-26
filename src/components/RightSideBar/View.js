import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import React from 'react';

import DatePicker from "react-datepicker";

import './style.css'

import "react-datepicker/dist/react-datepicker.css";

class View extends React.Component {

constructor(props){

super(props);

this.state = {

startDate: new Date()

};

this.onHandleChange = this.onHandleChange.bind(this);

this.changeDueDate = this.changeDueDate.bind(this);

this.dueTimeSetDone =this.dueTimeSetDone.bind(this)

}

dueTimeSetDone(){

this.props.hideSideBar();

}

onHandleChange(date){

let id = this.props.id;

let todo = this.props.todo;

this.setState({

startDate: new Date(date)

});

const putOptions = {

method: 'PUT',

headers: {

'Content-Type': 'application/json'

},

body: JSON.stringify({

...todo,

dueTime: new Date(date)

})

}

this.changeDueDate(id,putOptions,new Date(date));

}

changeDueDate(id, putOptions,dueTime) {

window.fetch('http://localhost:3004/todos/' + id, putOptions)

.then(res => res.json())

.then(json => {

this.props.saveDate({id,dueTime});

});

}

render(){

return (

<ReactCSSTransitionGroup

transitionAppear={true}

transitionAppearTimeout={500}

transitionEnterTimeout={400}

transitionLeaveTimeout={800}

transitionName="animated"

>

<div key="amache" className="rightSideBar animated fadeInLeftBig" >

<DatePicker selected={this.state.startDate} onChange={this.onHandleChange}/>

<button className="doneButton" onClick={this.dueTimeSetDone}>DONE</button>

</div>

</ReactCSSTransitionGroup>

)

}}

export default View;