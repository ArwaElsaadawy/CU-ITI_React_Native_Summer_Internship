import axios from "axios";
import { Component, PureComponent } from "react";

class Task extends Component{
    componentDidMount(){
        console.log(" componentDidMount");
        axios.get("https://jsonplaceholder.typicode.com/todos/1").then(res=>this.setState({task:res.data}))
        // fetch("https://jsonplaceholder.typicode.com/todos/1")
        // .then(res=>res.json())
        //  .then(res=>this.setState({task:res}))
    }
    constructor (props){
        super(props);
        this.state={ task:null
                
            }
            console.log("constructor");
    }
    componentWillUnmount(){
        console.log("componentWillUnmount");
    }
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate");
        return true;
    }
    componentDidUpdate(){
        console.log("componentDidUpdate");
    }
    // state={
    //     name:"React" ,
    //     description:"React is a JavaScript library for building user interfaces.",
    // }
    render (){
        const handleClick=()=>{
            // console.log(event);
            // this.state.task.completed=true
            // console.log( this.state.task.completed);
            this.setState({task:{...this.state.task,completed:true}})
        }
        console.log("render");
        if (!this.state.task) return <div>Loading ......</div>
        return <div>Task of {this.state.task.title} , {this.state.task.completed?"Done" :"inprogresss"}
        <button onClick={handleClick}>Mark as Done</button>
        </div>;
    }
    
}
export default Task;