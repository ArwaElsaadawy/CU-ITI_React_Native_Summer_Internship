import Task from "./components/Task"
import Movies from "./components/Movies"


function App() {
 var x= "ReactNativeG2"
 var objStyle={backgroundColor:"red" , color:"white" , margin:"10px"}

  return (
  <>
  <Movies></Movies>
  <Task test="ArwaElsaadawy"></Task>
  {/* <div style= {{backgroundColor:"red" , color:"white" , margin:"10px"}}>Hello World</div>
  <label htmlFor="in">Name : </label>
  <input id="in"></input>
    <h1 className="c1">Hello ya {x.toLocaleLowerCase()}</h1>
    <h1>Hi ya {x.toLocaleLowerCase()}</h1> */}
    </>
  )
}

export default App
