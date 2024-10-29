import React, { useState, useCallback } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';
import MovieList from '../components/MovieList';
import { fetchMovies } from '../logic/movieApi';
import { useFocusEffect } from '@react-navigation/native';  // Import useFocusEffect

const HomeScreen = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);

  // Function to fetch movies
  const getMovies = async () => {
    try {
      console.log('Fetching movies...');
      const fetchedMovies = await fetchMovies();
      setMovies(fetchedMovies);
      setFilteredMovies(fetchedMovies);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  // Use useFocusEffect to refetch movies when the screen is focused
  useFocusEffect(
    useCallback(() => {
      console.log('HomeScreen is focused');
      getMovies();
    }, [])
  );

  // Function to handle search input change
  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query) {
      const lowercasedQuery = query.toLowerCase();
      const filtered = movies.filter(movie =>
        movie.title.toLowerCase().includes(lowercasedQuery)
      );
      setFilteredMovies(filtered);
    } else {
      setFilteredMovies(movies);
    }
  };

  if (movies.length === 0) {
    return <Text>Loading ......</Text>;
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search for movies..."
        value={searchQuery}
        onChangeText={handleSearch}
      />
      <MovieList movies={filteredMovies} />
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

export default HomeScreen;
