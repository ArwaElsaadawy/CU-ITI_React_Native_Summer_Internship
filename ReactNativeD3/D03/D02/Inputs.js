import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {Text, TextInput ,StyleSheet, SafeAreaView, Platform } from 'react-native';

export default function App() {
  const [user,setUser]=useState({name:"" , age:""})
  const [email,setEmail]=useState("")
  const [emailError,setEmailError]=useState("")
 const handleChange=(txt,textInpName)=>setUser({...user,[textInpName]:txt})
 const handleChangeEmail=(txt)=>{
setEmail(txt)
if (!txt)
  setEmailError("Email is Required")
else if (!(/\w+\@\w+\.\w+/).test(txt))
  setEmailError("Invalid Email")
else {
  setEmailError("")
}
 }
  return (
    <SafeAreaView style={{paddingTop:Platform.OS==="android"?30:0}}>
    <TextInput placeholder='enter your name' value={user.name} onChangeText={(txt)=>handleChange(txt,"name")}></TextInput>
    <TextInput placeholder='enter your age' value={user.age}   onChangeText={(txt)=>handleChange(txt,"age")} keyboardType='number-pad'></TextInput>
    <TextInput placeholder='enter your email' value={email}   onChangeText={handleChangeEmail} keyboardType='email-address'></TextInput>
    <Text style={{color:"red"}}>{emailError}</Text>
    
    {/* editable={false}  */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
