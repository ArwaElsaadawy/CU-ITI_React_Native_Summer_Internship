import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, View ,Text ,Button} from 'react-native';
import  {Ionicons}  from '@expo/vector-icons';
import routes from '../utils/routes';
import { usersContext } from '../contexts/usersContextProvider';

const Users = () => {
    const {navigate}=useNavigation()
    const {users ,dispatch }=useContext(usersContext)
    return (
        <View>
          {users.map(u=><View key={u.id}>
            <Text >{u.name}
            
            </Text>
            <Ionicons name='heart' size={40}
             color={"red"}
             onPress={()=>navigate(routes.details,u.id)}
            ></Ionicons>
          </View>)}
          <Button title="clear" onPress={()=>dispatch({type: "ClEAR"})}></Button>

        </View>
    );
}

const styles = StyleSheet.create({})

export default Users;
