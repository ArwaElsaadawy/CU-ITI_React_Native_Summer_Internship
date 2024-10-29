import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import routes from '../utils/routes';
import Home from '../screens/Home';
import About from '../screens/About';
import Users from '../screens/Users';

const drawer=createDrawerNavigator()
const DrawerNavigation = () => {
    return (
       <drawer.Navigator>
        <drawer.Screen name={routes.home} component={Home}></drawer.Screen>
        <drawer.Screen name={routes.about} component={About}></drawer.Screen>
       
       
       </drawer.Navigator>
    );
}

const styles = StyleSheet.create({})

export default DrawerNavigation;
