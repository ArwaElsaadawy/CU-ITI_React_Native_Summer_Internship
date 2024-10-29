import { StatusBar } from "expo-status-bar";
import { Fragment, useState } from "react";
import {
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  Platform,
  
  Alert,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
  Pressable,
  View,
  ScrollView,
  FlatList,
} from "react-native";
import styles from "./style";
import { Button } from "react-native-paper";
import Box from "./components/Box";
export default function App() {
  const COLORS=[
    {colorName:'Base03',hexCode:'#002b36'},
    {colorName:'Base02',hexCode:'#073642'},
    {colorName:'Base01',hexCode:'#586e75'},
    {colorName:'Base00',hexCode:'#657b83'},
    {colorName:'Base0',hexCode:'#839496'},
    {colorName:'Base1',hexCode:'#93a1a1'},
    {colorName:'Base2',hexCode:'#eee8d5'},
    {colorName:'Base3',hexCode:'#fdf6e3'},
    {colorName:'Yellow',hexCode:'#b58900'},
    {colorName:'Orange',hexCode:'#cb4b16'},
    {colorName:'Red',hexCode:'#dc322f'},
    {colorName:'Magenta',hexCode:'#d33682'},
    {colorName:'Cyan',hexCode:'#2aa198'},
    {colorName:'Green',hexCode:'#859900'},
    ]
  return (
    <ScrollView horizontal>   //error
       {/* <Text style={styles.txt}>Here are some boxes of different colors</Text> */}
    <FlatList horizontal data={COLORS}
    renderItem={({item:{colorName,hexCode}})=><Box colorName={colorName} hexCode={hexCode}></Box>}
    keyExtractor={({hexCode})=>hexCode}
    ListHeaderComponent={<Text style={styles.txt}>Here are some boxes of different colors</Text>}
    ListEmptyComponent={<Text>No Data</Text>}
    ItemSeparatorComponent={<View style={{backgroundColor:"red" ,width:20}}></View>}
    //  extraData={x,y}
     ></FlatList>
</ScrollView>

    
    // <ScrollView style={styles.container}>
    //    <Text style={styles.txt}>Here are some boxes of different colors</Text>
    //   {COLORS.map(clr=><Box key={clr.hexCode} colorName={clr.colorName} hexCode={clr.hexCode}></Box>)}
      
      //  {/* <Box colorName="Cyan" hexCode="#2aa198"></Box>
      //  <Box colorName="Blue" hexCode="#268bd2"></Box>
      //  <Box colorName="Magenta" hexCode="#d33682"></Box>
      //  <Box colorName="Orange" hexCode="#cb4b16"></Box> */}

      
      
      //  {/* <View style={styles.box}>
      //   <Text style={styles.text}> Cyan #2aa198</Text>
      //  </View>
      //  <View style={styles.box1}>
      //   <Text style={styles.text1}> Blue #268bd2</Text>
      //  </View>
      //   <View style={styles.box2}>
      //   <Text style={styles.text2}> Magenta #d33682</Text>
      //  </View>
      //  <View style={styles.box3}>
      //   <Text style={styles.text3}> Orange #cb4b16</Text>
      //  </View> */}
    // </ScrollView>
  );
}


