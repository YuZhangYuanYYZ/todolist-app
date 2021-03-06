import React from 'react';
import './style.scss'
import CompleteItem from '../completeItem';
import { DragDropContext } from "react-beautiful-dnd";
import RightSideBar from '../RightSideBar';
class View extends React.Component {
    constructor(props){
        super(props);
        this.onDragEnd = this.onDragEnd.bind(this);
        this.reorder = this.reorder.bind(this);

    }
  
    reorder (list, startIndex, endIndex) {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        return result;
      };
    onDragEnd(result) {
      // dropped outside the list
      if (!result.destination) {
        return;
      }
      const todos = this.reorder(
        this.props.todos,
        result.source.index,
        result.destination.index
      );
  
      this.props.setTodos(todos);
    }
  
    render() {
        if(this.props.isFetchingTodos) {
          return <div className="loading-indicator">Loading......</div>;
        } 
        return (
            <div className={this.props.showSideBar?"list-container short":"list-container long"}>
                <DragDropContext onDragEnd={this.onDragEnd}>
                  <CompleteItem  />
                </DragDropContext>    
                <RightSideBar/>     
            </div>
        );
    }
}


export default View;



