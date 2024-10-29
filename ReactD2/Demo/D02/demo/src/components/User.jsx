import Types from "prop-types"
import { memo } from "react";
const User=(props)=>{
    console.log(props);
    const {id,name,age ,children} =props
    return <div style={{backgroundColor:"violet" ,margin :"15px"}}>
         <div>Id : {id}</div>
        <div>Name : {name}</div>
        {/* <div>Age : {age?age:16}</div> */}
        {/* <div>Age : {age||18}</div> */}
        {age>0 &&<div>Age : {age}</div>}

       <div>{children}</div>
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