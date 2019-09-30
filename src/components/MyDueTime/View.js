
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
    this.SimpleDateFormat =this.SimpleDateFormat.bind(this);
}
 SimpleDateFormat(pattern){
	var fmt = new Object();
	fmt.pattern = pattern;
	
	fmt.parse = function(source){
		try{
			return new Date(source);
		}catch(e){
			console.log("字符串 "+source+" 转时间格式失败！");
			return null;
		}
    }
    fmt.format = function(date){
		if(typeof(date) == "undefined" || date == null || date==""){
			return "";
		}
		
		try{
			date = new Date(date);
		}catch(e){
			console.log("时间 "+date+" 格式化失败！");
			return "";
		}
		
		var strTime = this.pattern;//时间表达式的正则
		
	    var o = {
	            "M+": date.getMonth() + 1, //月份 
	            "d+": date.getDate(), //日 
	            "H+": date.getHours(), //小时 
	            "m+": date.getMinutes(), //分 
	            "s+": date.getSeconds(), //秒 
	            "q+": Math.floor((date.getMonth() + 3) / 3), //季度 
	            "S": date.getMilliseconds() //毫秒 
	        };
	    
	        if (/(y+)/.test(strTime)){
	        	strTime = strTime
	        		.replace(RegExp.$1, (date.getFullYear() + "")
	        		.substr(4 - RegExp.$1.length));
	        } 
	        for (var k in o){
	        	if (new RegExp("(" + k + ")").test(strTime)){
	        		strTime = strTime.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));	
	        	}
	        }
	        
	        return strTime;
	};
	return fmt;
}



     onHandleChange(){
        let id = this.props.id;
        const todo = this.props.todos.find((todo)=>todo._id===id);
        console.log(this.props.todos,"todos  ....")

        var fmt = this.SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        let dueTime = fmt.parse(todo.dueTime);
        console.log(dueTime,"dueTime  ....")

        this.setState({
            startDate: dueTime
          });
            
            const putOptions = {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ...todo,
                    dueTime: dueTime
                })
            }
            this.changeDueDate(id,putOptions,dueTime)
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

