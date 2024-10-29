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
  SectionList,
} from "react-native";
import styles from "./style";
import { Button } from "react-native-paper";
import Box from "./components/Box";
export default function App() {
  const sections=[
    {
      id:"0",
      title:"basic comps",
      data:[
        {id:"0",text:"View"},
        {id:"1",text:"Text"},
        {id:"2",text:"Image"},
      ]
      },
      {
      id:"1",
      title:"List comps",
      data:[
        {id:"3",text:"ScrollView"},
        {id:"4",text:"ListView"},
        
      ]
    }
    ]
  return (
   <SectionList sections={sections}
   renderSectionHeader={({section:{title}})=><Text style={styles.headerStyle}>{title}</Text>}
   renderItem={({item})=><Text style={styles.itemStyle}>{item.text}</Text>}
   ></SectionList>
  );
}


