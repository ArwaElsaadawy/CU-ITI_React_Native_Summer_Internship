import React, { useState, useCallback } from 'react';
import { View, Text, Button, TextInput, Alert, StyleSheet } from 'react-native';
import { db } from '../logic/firebase';  // Use the modular import
import { deleteAll } from '../logic/userFavorites';
import MovieList from '../components/MovieList';
import { collection, getDocs } from 'firebase/firestore';  // New modular imports for Firestore
import { useFocusEffect } from '@react-navigation/native';  // Import useFocusEffect

const FavoritesScreen = () => {
  const [favorites, setFavorites] = useState([]);
  const [filteredFavorites, setFilteredFavorites] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [error, setError] = useState(null);

  // Fetch favorites from Firebase
  const fetchFavorites = async () => {
    try {
      const favoritesCollection = collection(db, 'favorites');  // Access the collection
      const favoritesSnapshot = await getDocs(favoritesCollection);  // Get the documents
      const favoriteMovies = favoritesSnapshot.docs.map(doc => doc.data());  // Map the data
      setFavorites(favoriteMovies);
      setFilteredFavorites(favoriteMovies);  // Initialize filtered favorites
    } catch (err) {
      console.error('Error fetching favorites: ', err);
      setError(err);
    }
  };

  // Use useFocusEffect to refetch favorites every time the screen comes into focus
  useFocusEffect(
    useCallback(() => {
      fetchFavorites();  // Fetch the latest favorites when the screen is focused
    }, [])
  );

  // Function to handle deleting all favorites
  const handleDeleteAll = async () => {
    try {
      await deleteAll();  // Delete all favorites
      await fetchFavorites();  // Re-fetch favorites after deletion
      Alert.alert('Success', 'All favorites have been deleted.');
    } catch (error) {
      console.error('Error deleting all favorites: ', error);
      Alert.alert('Error', 'There was an issue deleting your favorites.');
    }
  };

  // Function to handle search input change
  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query) {
      const lowercasedQuery = query.toLowerCase();
      const filtered = favorites.filter(movie =>
        movie.title.toLowerCase().includes(lowercasedQuery)
      );
      setFilteredFavorites(filtered);
    } else {
      setFilteredFavorites(favorites);
    }
  };

  if (favorites.length === 0 && !error) {
    return (
      <View style={styles.container}>
        <Text>No favorites found.</Text>
      </View>
    );
  }
  
  if (error) {
    return (
      <View style={styles.container}>
        <Text>Error fetching favorites: {error.message}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search favorites..."
        value={searchQuery}
        onChangeText={handleSearch}
      />
      <MovieList movies={filteredFavorites} />
      <Button
        title="Delete all favorites"
        onPress={handleDeleteAll}  // Call the delete all handler
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  searchBar: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});

export default FavoritesScreen;
