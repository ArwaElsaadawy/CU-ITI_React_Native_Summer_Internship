import { Component } from "react";

class Task extends Component{
    constructor (props){
        super(props);
        this.state={
                name:"React" ,
                description:"React is a JavaScript library for building user interfaces.",
            }
    }
    // state={
    //     name:"React" ,
    //     description:"React is a JavaScript library for building user interfaces.",
    // }
    render (){
        return <div>Task of {this.state.name} , {this.props.test}</div>;
    }
}
export default Task;