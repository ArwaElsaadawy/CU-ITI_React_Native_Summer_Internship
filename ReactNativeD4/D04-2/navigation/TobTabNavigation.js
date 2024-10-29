import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import routes from '../utils/routes';
import Home from '../screens/Home';
import About from '../screens/About';
import Users from '../screens/Users';
const tabs=createMaterialTopTabNavigator()

const TobTabNavigation = () => {
    return (
       <tabs.Navigator>
        <tabs.Screen name={routes.home} component={Home} />
        <tabs.Screen name={routes.about} component={About} />
        <tabs.Screen name={routes.users} component={Users} />

       </tabs.Navigator>
    );
}

const styles = StyleSheet.create({})

export default TobTabNavigation;
