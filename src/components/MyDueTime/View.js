
import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class View extends React.Component {
constructor(props){
    super(props);
    this.state = {
        startDate: new Date()
      };
    this.handleChange = this.handleChange.bind(this);
}
    handleChange (date){
        this.setState({
          startDate: date
        });
        console.log(this.props.todo.id,"this.props.todo._id")
        let id = this.props.todo._id

        let dateValue = this.sate.startDate;
        this.props.saveDate({id,dateValue});  
        //id={this.props.todo._id}
          };

    render(){    
   return (
       <div  className="dateSelect" >
       <DatePicker selected={this.state.startDate}  onChange={this.handleChange}/>
       </div>
      )
   }}
export default View;

