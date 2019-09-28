import React from 'react';
import FunctionButtons from '../functionButtons';
import { Draggable  } from "react-beautiful-dnd";
import MyDueTime from '../MyDueTime'

class View extends React.Component {
    constructor(props){
        super(props);
       
        this.convertDataToClassName = this.convertDataToClassName.bind(this);
       // this.saveDate = this.saveDate.bind(this);
    }
     convertDataToClassName(todo) {
       console.log(todo._id)
        return todo.completed ? "completed-li" : "todo-li";

    }
   
    
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
     <MyDueTime id={this.props.todo.id}/> <FunctionButtons />
    </li>
    }
  </div>
)}
</Draggable>);
}
}

export default View;