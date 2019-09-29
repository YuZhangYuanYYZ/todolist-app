
import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class View extends React.Component {
constructor(props){
    super(props);
    this.state = {
        startDate: new Date()
      };
    this.onHandleChange = this.onHandleChange.bind(this);
    this.changeDueDate = this.changeDueDate.bind(this);
}
  
     onHandleChange(date){
        this.setState({
            startDate: date
          });
            let id = this.props.id;
            const todo = this.props.todo;
            const putOptions = {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ...todo,
                    date: date
                })
            }
            this.changeDueDate(id,putOptions,date)
        }
            changeDueDate(id, putOptions,date) {
                window.fetch('http://localhost:3004/todos/' + id, putOptions)
                    .then(res => res.json())
                    .then(json => {
                        this.props.saveDate({id,date});
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

