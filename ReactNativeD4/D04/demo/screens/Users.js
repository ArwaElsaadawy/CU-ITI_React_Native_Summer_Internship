import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View ,Text} from 'react-native';

const Users = () => {
    const [users,setUsers]=useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users").then(res=>setUsers(res.data))
    },[])
    return (
        <View>
          {users.map(u=><Text key={u.id}>{u.name}</Text>)}

        </View>
    );
}

const styles = StyleSheet.create({})

export default Users;
