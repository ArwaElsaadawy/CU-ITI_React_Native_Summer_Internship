import React from 'react';
import { StyleSheet, View ,Text, Button} from 'react-native';
import routes from '../utils/routes';

const Home = ({navigation}) => {
    // routes.about="users"
    return (
        <View>
            <Text>Home Screen</Text>
            <Button onPress={()=>{ navigation.navigate(routes.about)}} title='go to about'></Button>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Home;
