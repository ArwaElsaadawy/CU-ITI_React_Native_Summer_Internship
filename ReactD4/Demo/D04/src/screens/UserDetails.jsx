import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SimpleBackdrop from '../components/Spinner';

const UserDetails = ({usersArr}) => {
    const {userId}=useParams()
    const [user,setUser]=useState(null)
    // console.log(x); 
    useEffect (()=>{
        // 1-fetchApi
        // 2- find 
        setUser(usersArr.find((u)=>u.id.toString()===userId))
     
    } , [])

    if (!user) return <SimpleBackdrop></SimpleBackdrop>
    return (
        <div>
            <h1>User Details of {userId} , 
            his name is {user.name} , his email is {user.email}
            </h1>
        </div>
    );
}

export default UserDetails;
