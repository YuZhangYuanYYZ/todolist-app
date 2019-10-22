
import React from 'react';
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";

class View extends React.Component {
constructor(props){
    super(props);

}
render(){    

   return (
       
       <div  className="dateSelect" >
       <input type="text" value={this.props.todo?((this.props.todo.dueTime)?moment(new Date(this.props.todo.dueTime)).format('YYYY-MM-DD'):new Date()):new Date()}/>
       </div>
      )
   }}
export default View;

