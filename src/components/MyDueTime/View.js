
import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class View extends React.Component {
constructor(props){
    super(props);
    this.state = {
        startDate: new Date(this.props.todo.dueTime)
      };
    this.onHandleChange = this.onHandleChange.bind(this);
    this.changeDueDate = this.changeDueDate.bind(this);
}

    onHandleChange(date){
        let id = this.props.id;
        const todo = this.props.todos.find((todo)=>todo._id===id);
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
            this.changeDueDate(id,putOptions,new Date(date))
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
       
       <div  className="dateSelect" >
       <DatePicker selected={this.state.startDate}  onChange={this.onHandleChange}/>
       </div>
      )
   }}
export default View;

