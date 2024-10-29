import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import routes from '../utils/routes';
import Home from '../screens/Home';
import About from '../screens/About';
import Users from '../screens/Users';
import TobTabNavigation from './TobTabNavigation';
import DrawerNavigation from './drawerNavigation';
import Details from '../screens/Details';
import Cameraaa from "../screens/camera"
const stack=createStackNavigator()
const StackNavigation = () => {
    return (
        <stack.Navigator>
            <stack.Screen name='drawer' component={DrawerNavigation} options={{header:()=>null}}></stack.Screen>
        
        <stack.Screen name={routes.home} component={Home} options={{
          headerTitle:"Home Screen",
          // header:()=>null
          headerStyle:{
             backgroundColor:"yellow" ,
             
          },
          headerTintColor:"green",
          headerTitleAlign:"center",
          headerTitleStyle:{
            fontSize:35
          }
        }}></stack.Screen>
        <stack.Screen name={routes.about} component={About}></stack.Screen>
        <stack.Screen name={routes.users} component={Users}></stack.Screen>
        <stack.Screen name={routes.details} component={Details}></stack.Screen>
        <stack.Screen name='camera' component={Cameraaa}></stack.Screen>
      </stack.Navigator>
    );
}

const styles = StyleSheet.create({})

export default StackNavigation;
