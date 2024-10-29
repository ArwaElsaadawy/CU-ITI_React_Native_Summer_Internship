import { StyleSheet,Platform } from "react-native";

export default StyleSheet.create({
    container:{paddingTop:Platform.OS==="android"?30:0,backgroundColor:"violet" ,flex:1},
    view1:{backgroundColor:"rgb(0,0,255)" , height:100,width:100 },
    view2:{backgroundColor:"yellow" ,  height:100,width:100,position:"absolute" ,bottom:0,left:30 },
    view3:{backgroundColor:"red" ,flex:3,width:70}
    })