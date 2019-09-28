import React from 'react';
import FunctionButtons from './functionButtons'
import { Draggable  } from "react-beautiful-dnd";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

class CommonTodoList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            startDate: new Date()
          };
        this.convertDataToClassName = this.convertDataToClassName.bind(this);
    }
     convertDataToClassName(todo) {
        return todo.completed ? "completed-li" : "todo-li";
    }
    handleChange = date => {
        this.setState({
          startDate: date
        });
      };
    render(){
    return (
     <Draggable key={this.props.todo.id} draggableId={this.props.index.toString()} index={this.props.index}>
     {(provided, snapshot) => (
    <div
    ref={provided.innerRef}
    {...provided.draggableProps}
    {...provided.dragHandleProps}
    style={snapshot.isDragging,
        provided.draggableProps.style }
    >
    {
     <li key={this.props.todo.id} data-index={this.props.index} className={this.convertDataToClassName(this.props.todo)}>{this.props.todo.text} 
      <DatePicker className="dateSelect" selected={this.state.startDate}  onChange={this.handleChange.bind(this)}
   /><FunctionButtons />
    </li>
    }
  </div>
)}
</Draggable>);
}
}

export default CommonTodoList;