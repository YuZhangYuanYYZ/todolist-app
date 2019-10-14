import React from 'react';
import FunctionButtons from '../functionButtons';
import { Draggable  } from "react-beautiful-dnd";
import MyDueTime from '../MyDueTime';
import store from '../../redux/store'

class View extends React.Component {
    constructor(props){
        super(props);
       
        this.convertDataToClassName = this.convertDataToClassName.bind(this);
        this.doubleClick = this.doubleClick.bind(this);
    }
     convertDataToClassName(todo) {
        return todo.completed ? "completed-li" : "todo-li";

    }
    doubleClick(){
        this.props.judgeDoubleClick();
       // console.log(store.getState(),'todos')
    }
   
    
    render(){
    return (
     <Draggable key={this.props.todo._id} draggableId={this.props.index.toString()} index={this.props.index}>
     {(provided, snapshot) => (
    <div
    ref={provided.innerRef}
    {...provided.draggableProps}
    {...provided.dragHandleProps}
    style={snapshot.isDragging,
        provided.draggableProps.style }
    >
    {
     <li key={this.props.todo._id} data-index={this.props.index} onDoubleClick={this.doubleClick} className={this.convertDataToClassName(this.props.todo)}>{this.props.todo.text} 
     <MyDueTime id={this.props.todo._id} todo={this.props.todo} /> <FunctionButtons />
    </li>
    }
  </div>
)}
</Draggable>);
}
}

export default View;