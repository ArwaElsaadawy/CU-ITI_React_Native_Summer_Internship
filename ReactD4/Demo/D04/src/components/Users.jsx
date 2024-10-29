import React, { useEffect, useState } from 'react';
import User from './User';
import {v4 as uuid} from "uuid"
import AddUser from './AddUser';
import RecipeReviewCard from './MuiCard';
import axios from 'axios';
import SimpleBackdrop from './Spinner';
const Users = ({counter , incAgeFun ,usersArr}) => {
   
//  useEffect(()=>{} , [])

// case 1 componentDidMount , componentDidUpdate
// useEffect (()=>{
//     console.log("hellooo");
// })
// case 2 componentDidMount
// useEffect (()=>{
//     console.log("hellooo");
// } ,[])

// case 3 componentDidMount , componentDidUpdate (counter)
// useEffect (()=>{
//     console.log("hellooo");
// } ,[counter])

// case 4 componentDidMount , componentDidUpdate (counter ,x,y,z)
// useEffect (()=>{
//     console.log("hellooo");
// } ,[counter ,x,y,z])

// case 5 componentDidMount & componentWillUnmount (cleanUP)
// useEffect(()=>{
//     console.log("hellooo");
//     return ()=>{
//         console.log("bye");
//     }
// } )

// case 6 :componentDidMount & componentWillUnmount
// useEffect(()=>{
//     console.log("hellooo");
//     return ()=>{
//         console.log("bye");
//     }
// } ,[] )

// useEffect(()=>{
//     console.log("hellooo");
//     return ()=>{
//         console.log("bye");
//     }
// } ,[counter ] )

// useEffect(()=>{
//         console.log("hellooo");
//         return ()=>{
//             console.log("bye");
//         }
//     } ,[counter ,x,y ] )



//   console.log(a);

if(!usersArr ) return <SimpleBackdrop></SimpleBackdrop>
    return (
        <div>
            {/* <br/> */}
            Counter :{counter}
            
            {usersArr.map((u)=><RecipeReviewCard key={u.id} id={u.id} name={u.name} age={u.age} incAgeFun={incAgeFun} ></RecipeReviewCard>
            // <User key={u.id} id={u.id} name={u.name} age={u.age} incAgeFun={incAgeFun} ></User>
            )}
            {/* {usersArr.map((u)=><User key={u.id} user={u}></User>)} */}
            {/* {usersArr.map((u)=><User key={uuid()} {...u}>
               <button>Done</button>
               <button>Done</button>
               <button>Done</button>
               <button>Done</button>

            </User>)} */}

        
        </div>
    );
}

export default Users;
