import { useRoute } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, View ,Text } from 'react-native';
import { usersContext } from '../contexts/usersContextProvider';

const Details = () => {
    const {params}=useRoute()
    const {users}= useContext(usersContext)
    const [user,setUser]=useState({})
    // console.warn(params)
    useEffect(()=>{
        setUser(users.find(u=>u.id===params))
        
    },[])
    return (
        <View>
            <Text>Details Screen of {user.name} & {user.username}</Text>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Details;
