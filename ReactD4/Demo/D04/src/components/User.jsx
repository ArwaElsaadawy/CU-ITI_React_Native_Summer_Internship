import Types from "prop-types"
import { memo } from "react";
import classes from "../Styles/user.module.css"
const User=(props)=>{
    console.log(props);
    const {id,name,age ,children ,incAgeFun} =props
    const handleClick=()=>{
        // age++;
        incAgeFun(id);
    }
    // {backgroundColor:"violet" ,margin :"15px" ,padding:"10px"}
    return <div className={classes.user}>
         <div>Id : {id}</div>
        <div>Name : {name}</div>
        {/* <div>Age : {age?age:16}</div> */}
        {/* <div>Age : {age||18}</div> */}
        {age>0 &&<div>Age : {age}</div>}

       <div>{children}</div>
       <button className={classes.btn} onClick={handleClick}>increment Age</button>
   <button className="btn btn-danger"> delete</button>
    </div>
}
User.propTypes={
    id:Types.string.isRequired,
    name:Types.string.isRequired,
    age:Types.number
}
// User.defaultProps={
//     age:20
// }
export default memo(User);