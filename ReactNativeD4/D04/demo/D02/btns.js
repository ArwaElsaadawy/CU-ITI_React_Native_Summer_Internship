import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {Text, TextInput ,StyleSheet, SafeAreaView, Platform, Button, Alert, TouchableOpacity, Image, TouchableWithoutFeedback, Pressable } from 'react-native';

export default function App() {
  
  const handlePress=()=>{
    Alert.alert("pressed" ,"this btn is pressed" ,
      [
        {text:"OK" ,onPress:()=>{}},
        {text:"Cancel" ,onPress:()=>{}}
      ]
    )
  }
  return (
    <SafeAreaView style={{paddingTop:Platform.OS==="android"?30:0}}>
     <Pressable onPress={handlePress} style={({pressed})=>[{backgroundColor:"#6c71c4" ,margin:10,borderRadius:20 ,padding:10 , opacity:pressed?0.5:1 , transform:[{scale:pressed?0.5:1}]} ]} >
     <Text style={{fontSize:20 ,color:"red" ,fontWeight:"bold" ,textAlign:"center"}}>Done</Text>  
     </Pressable>


      {/* <TouchableWithoutFeedback onPress={handlePress} style={{backgroundColor:"#6c71c4" ,margin:10,borderRadius:20 ,padding:10}} > */}
{/* <Image  source={require("./assets/1.jpg")}></Image> */}
{/* <Text style={{fontSize:20 ,color:"red" ,fontWeight:"bold" ,textAlign:"center"}}>Done</Text>

      </TouchableWithoutFeedback> */}
   {/* <TouchableOpacity activeOpacity={0.5} style={{backgroundColor:"#6c71c4" ,margin:10,borderRadius:20 ,padding:10}} onPress={handlePress} >
    <Text style={{fontSize:20 ,color:"white" ,fontWeight:"bold" ,textAlign:"center"}}>Done</Text> */}
{/* <Image  source={require("./assets/1.jpg")}></Image> */}
   {/* </TouchableOpacity> */}
   {/* <Button color={"red"} title="Cancel" onPress={handlePress}></Button> */}
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
