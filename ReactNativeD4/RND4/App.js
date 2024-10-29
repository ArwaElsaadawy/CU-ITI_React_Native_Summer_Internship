import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Card } from 'react-native-paper';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data);
        setFilteredUsers(response.data);
      })
      .catch(error => console.error(error));
  }, []);

  const handleSearch = (text) => {
    setSearchQuery(text);
    if (text) {
      const filtered = users.filter(user => 
        user.name.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredUsers(filtered);
    } else {
      setFilteredUsers(users);
    }
  };

  const renderUserItem = ({ item }) => (
    <TouchableOpacity
      style={styles.userItem}
      onPress={() => navigation.navigate('Profile', { user: item })}
    >
      <Text style={styles.userName}>{item.name}</Text>
      <Text style={styles.arrow}>&#8594;</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search users..."
        value={searchQuery}
        onChangeText={handleSearch}
      />
      <FlatList
        data={filteredUsers}
        renderItem={renderUserItem}
        keyExtractor={item => item.id.toString()}
        ListHeaderComponent={<Text style={styles.header}>Users List</Text>}
      />
    </View>
  );
};

const ProfileScreen = ({ route }) => {
  const { user } = route.params;

  return (
    <View style={styles.container}>
      <Card style={styles.profileCard}>
        <Card.Title
          title={user.name}
          subtitle={user.email}
          titleStyle={styles.profileTitle}
          subtitleStyle={styles.profileSubtitle}
        />
        <Card.Content>
          <Text style={styles.profileText}>Phone: {user.phone}</Text>
          <Text style={styles.profileText}>Website: {user.website}</Text>
          <Text style={styles.profileText}>Company: {user.company.name}</Text>
        </Card.Content>
      </Card>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Users List' }} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'User Profile' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9e9e9',
    padding: 20,
  },
  searchInput: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 8,
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 2 },
    color: '#333',
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#4A148C',
  },
  userItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    marginVertical: 8,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: { width: 2, height: 2 },
    borderLeftWidth: 5,
    borderLeftColor: '#6A1B9A',
  },
  userName: {
    fontSize: 18,
    color: '#333333',
  },
  arrow: {
    fontSize: 18,
    color: '#6A1B9A',
  },
  profileCard: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 2 },
    marginTop: 20,
    borderLeftWidth: 7,
    borderLeftColor: '#D81B60',
  },
  profileTitle: {
    fontSize: 22,
    color: '#D81B60',
  },
  profileSubtitle: {
    fontSize: 16,
    color: '#333',
  },
  profileText: {
    fontSize: 16,
    color: '#6A1B9A',
    marginVertical: 5,
  },
});

export default App;
