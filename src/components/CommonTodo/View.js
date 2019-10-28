import React from 'react';
import FunctionButtons from '../functionButtons';
import { Draggable  } from "react-beautiful-dnd";
import MyDueTime from '../MyDueTime';

class View extends React.Component {
    constructor(props){
        super(props);
        this.convertDataToClassName = this.convertDataToClassName.bind(this);
        this.sidbarTogle = this.sidbarTogle.bind(this);
        }
     convertDataToClassName(todo) {
        return todo.completed ? "completed-li" : "todo-li";

    }
    sidbarTogle(id){
        this.props.showSideBarTogle(id);
    }
    
    render(){
    return (
     <Draggable key={this.props.todo.id} draggableId={this.props.index.toString()} index={this.props.index}>
     {(provided, snapshot) => (
    <div
    ref={provided.innerRef}
    {...provided.draggableProps}
    {...provided.dragHandleProps}
   // style={snapshot.isDragging,
      //  provided.draggableProps.style }
    >
    {
     <li style={{"width":this.props.showSideBar?"80%":"100%"}} key={this.props.todo.id} data-index={this.props.index} onDoubleClick={()=>this.sidbarTogle(this.props.todo.id)} className={this.convertDataToClassName(this.props.todo)}>{this.props.todo.text} 
     <MyDueTime  todo={this.props.todo} /> <FunctionButtons />
    </li>
    }
  </div>
)}
</Draggable>);
}
}

export default View;