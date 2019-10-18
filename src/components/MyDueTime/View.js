
import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class View extends React.Component {
constructor(props){
    super(props);

}
render(){    

   return (
       
       <div  className="dateSelect" >
       <input type="text" value={this.props.todo.dueTime?this.props.todo.dueTime:new Date()}/>
       </div>
      )
   }}
export default View;

