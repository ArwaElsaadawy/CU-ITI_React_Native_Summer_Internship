import React from 'react';
import { StyleSheet, View ,Text, Button, Linking} from 'react-native';
import routes from '../utils/routes';

const Home = ({navigation}) => {
    // routes.about="users"
    return (
        <View>
            <Text>Home Screen</Text>
            <Button onPress={()=>{ navigation.navigate(routes.about)}} title='go to about'></Button>
            <Button onPress={()=>{ navigation.navigate("camera")}} title='go to camera'></Button>
        <Button title='go to facebook' onPress={()=>Linking.openURL("http://www.facebook.com")}></Button>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Home;
