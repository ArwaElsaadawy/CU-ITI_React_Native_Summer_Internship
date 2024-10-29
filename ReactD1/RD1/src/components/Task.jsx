import { Component } from "react";

class Task extends Component{
    constructor (props){
        super(props);
        this.state={
                college:"FCAI-CU" ,
            }
    }
    render (){
        return <div>All Rights Reserved to @{this.props.test} , {this.state.college}</div>;
    }
}
export default Task;