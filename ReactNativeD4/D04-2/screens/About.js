import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View ,Text, Button } from 'react-native';
import routes from '../utils/routes';

const About = () => {
    const {navigate}=useNavigation()
// console.warn(x)
    return (
        <View>
            <Text> About Screen </Text>
            <Button onPress={()=>{navigate(routes.users)}} title='go to users'></Button>
        </View>
    );
}

const styles = StyleSheet.create({})

export default About;
