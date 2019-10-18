
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
   this.doneButtonOnClick = this.doneButtonOnClick.bind(this);
}

doneButtonOnClick(){
    this.props.hideSideBar();
}
onHandleChange(date){
        let id = this.props.id;
         let upDateTodo= this.props.todos.filter((todo)=>{
            if(todo._id===id){
                return todo;
            }});
         console.log(this.props.todos,"this.props.todos")
          upDateTodo.dueTime =   new Date(date);
          console.log(upDateTodo,"upDateTodo111")
        this.setState({
            startDate: new Date(date)
          });
            
            const putOptions = {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(upDateTodo
                    
                )
            }
            this.changeDueDate(id,putOptions,this.state.startDate)
            console.log(upDateTodo,"upDateTodo")
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
       
       <div  className="rightSideBar" >
          
       <DatePicker selected={this.state.startDate}  onChange={this.onHandleChange}/>
       <button className="doneButton" onClick={this.doneButtonOnClick}>DONE</button>
       </div>
      )
   }}
export default View;

