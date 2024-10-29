import { StatusBar } from 'expo-status-bar';
import { Platform, SafeAreaView, ScrollView, StyleSheet, Text, View ,Image } from 'react-native';

export default function App() {
  var x= "React Native"
  // console.error(x)
  // alert(x)
  const handlePress=()=>{
    console.warn("hii")
  }
  return (
    // <ScrollView horizontal showsHorizontalScrollIndicator={false}>
     <View>
      <Image style={{width:300,height:300}} source={{uri:"https://plus.unsplash.com/premium_photo-1709311452427-fff3030eabbf?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        // method:"GET",
        // headers:{"authorization":token}
      }}></Image>
      {/* <Image source={require("./assets/1.jpg")} ></Image> */}
     </View>
    //   {/* <View style={{height:350 ,width:300  ,backgroundColor:"yellow"}}></View>
    //   <View style={{height:350 ,width:300 ,backgroundColor:"green"}}></View>
    //   <View style={{height:300 ,width:300 ,backgroundColor:"red"}}></View> */}

    // </ScrollView>
    // <SafeAreaView style={{paddingTop:Platform.OS==="android"?30:0}}>
    //  <Text style={{color:"yellow"}} onPress={handlePress}>hello  <Text>world</Text></Text>

    // </SafeAreaView>
    // <View style={{backgroundColor:"red" ,height:100 ,margin:50}} >
    //   <Text style={{color:"yellow"}} onPress={handlePress}>hello  <Text style={{fontSize:30}}>world</Text></Text>
    // </View>
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
