import React, { useState } from 'react';
import User from './User';
import {v4 as uuid} from "uuid"
const Users = () => {
    const [usersArr]=useState([
        {id:uuid(),name:"Ahmed" ,age:20},
        {id:uuid(),name:"Farida" ,age:22},
        {id:uuid(),name:"Ali" ,age:27},
        {id:uuid(),name:"Sama" ,age:21},
        {id:uuid(),name:"Gana" ,age:12},
    ])
    console.log(usersArr);
    return (
        <div>
            {/* {usersArr.map((u)=><User key={u.id} id={u.id} name={u.name} age={u.age}></User>)} */}
            {/* {usersArr.map((u)=><User key={u.id} user={u}></User>)} */}
            {usersArr.map((u)=><User key={uuid()} {...u}></User>)}

        
        </div>
    );
}

export default Users;
