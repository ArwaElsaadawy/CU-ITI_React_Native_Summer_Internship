const User=(props)=>{
    console.log(props);
    const {id,name,age} =props
    return <div style={{backgroundColor:"violet" ,margin :"15px"}}>
         <div>Id : {id}</div>
        <div>Name : {name}</div>
        <div>Age : {age}</div>
       
    </div>
}
export default User;