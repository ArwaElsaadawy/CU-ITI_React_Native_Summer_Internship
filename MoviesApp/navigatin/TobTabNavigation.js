import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { StyleSheet } from 'react-native';
import routes from '../utils/routes';
import HomeScreen from '../screens/HomeScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

import AboutScreen from '../screens/AboutScreen';

const Tabs = createMaterialTopTabNavigator();

const TobTabNavigation = () => {
    return (
        <Tabs.Navigator>
            <Tabs.Screen name={routes.home} component={HomeScreen} />
            <Tabs.Screen name={routes.favorite} component={FavoritesScreen} />
            <Tabs.Screen name={routes.about} component={AboutScreen} />
        </Tabs.Navigator>
    );
};

const styles = StyleSheet.create({});

export default TobTabNavigation;
