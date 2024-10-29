
// import './App.css'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle"
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom"
import Home from "./screens/Home"
import Users from "./components/Users"
import AddUserPage from "./screens/AddUserPage"
import About from "./screens/About"
import NotFound from "./screens/NotFound"
import NavBar from "./components/NavBar"
import { useEffect, useState } from "react"

import {v4 as uuid} from "uuid";
import axios from "axios"
import UserDetails from "./screens/UserDetails"
function App() {
   // [
    //     {id:uuid(),name:"Ahmed" ,age:20},
    //     {id:uuid(),name:"Farida" ,age:22},
    //     {id:uuid(),name:"Ali" ,age:27},
    //     {id:uuid(),name:"Sama" ,age:21},
    //     {id:uuid(),name:"Gana" ,age:12},
    // ]
    const [usersArr, setUsersArr]=useState(null)
    const [counter , setCounter]=useState(0)
    const [disabled , setDisabled]=useState(false)
    // console.log(x);
    const incAgeFun=(userId)=>{
         setUsersArr(usersArr.map((u)=>u.id===userId?{...u,age:u.age+1}:u))
    }
    const addUserFun=(userData)=>{
setCounter(oldCounter=>oldCounter+1)
if (counter>=2)
    setDisabled(true)
setUsersArr([...usersArr,{...userData,id:uuid() ,age:+(userData.age)}])
console.log(usersArr);
    }
    useEffect(()=>{
        axios.get ("https://jsonplaceholder.typicode.com/users").then(res=>setUsersArr(res.data))
    },[])


const router=createBrowserRouter([
  {
    path:"/" ,
    element:<Home></Home> ,
    children:[
      {
        path:"/users" ,
        element:<Users usersArr={usersArr} incAgeFun={incAgeFun} counter={counter}></Users>
      }
    ]
  } ,
  
])

  return (
    <>
   
    <RouterProvider router={router}></RouterProvider>
  {/* <BrowserRouter>
  <NavBar></NavBar>
  <Routes>
    <Route  path="/" element={<Home></Home>}></Route>
    <Route  path="/users" element={<Users usersArr={usersArr} counter={counter} incAgeFun={incAgeFun}></Users>}></Route>
    <Route  path="/users/add" element={<AddUserPage disabled={disabled} addUserFun={addUserFun}></AddUserPage>}></Route>
    <Route  path="/about" element={<About/>}></Route>
    <Route  path="/users/:userId" element={<UserDetails usersArr ={usersArr}/>}></Route>
    <Route  path="*" element={<NotFound></NotFound>}></Route>

  </Routes>
  </BrowserRouter> */}
  </>
  )
}

export default App
