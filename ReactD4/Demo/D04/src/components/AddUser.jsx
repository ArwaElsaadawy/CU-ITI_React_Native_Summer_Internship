import React, { useState } from 'react';
import classes from "../Styles/AddUser.module.css"
import { useNavigate } from 'react-router-dom';
const AddUser = ({addUserFun , disabled}) => {
   const [user,setUser]= useState({name:"" ,age:""})
    const navigate=useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault()
        addUserFun(user)
        setUser({name:"",age:""})
        navigate("/users")
    }
//     const handleChangeName=(e)=>{
// // console.log(e.target.value);
// setUser({...user,name:e.target.value})
//     }
//     const handleChangeAge=(e)=>{
//         setUser({...user,age:e.target.value})
        
//     }
const handleChange=(e)=>{
    // console.log(e.target.name);
    setUser({...user,[e.target.name]:e.target.value})    //computedProperty
}
    return (
        <form onSubmit={handleSubmit}>
            <label> Name : </label>
            <input name='name' value={user.name} onChange={handleChange}></input>
            <br></br>
            <label> Age : </label>
            <input name="age" value={user.age} onChange={handleChange}></input>
            <br></br>
            <button disabled={disabled} className={classes.btn} type="submit">Add New</button>
        </form>
    );
}

export default AddUser;
