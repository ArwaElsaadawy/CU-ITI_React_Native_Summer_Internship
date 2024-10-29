import React, { useEffect, useState } from 'react'; 
import { View, Text, Image, ScrollView, ActivityIndicator, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { getMovieDetails } from '../logic/movieApi'; 
import fallbackImage from '../assets/404.jpg';

const MovieDetailsScreen = () => {
  const route = useRoute();
  const { id } = route.params; 
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const movieData = await getMovieDetails(id); 
        setMovie(movieData);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovieDetails();
  }, [id]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#ffffff" />
      </View>
    );
  }

  if (!movie) {
    return <Text style={styles.errorText}>Movie not found!</Text>;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : fallbackImage }}
          style={styles.poster}
          onError={() => setMovie({ ...movie, poster_path: fallbackImage })}
        />
        <View style={styles.details}>
          <Text style={styles.title}>{movie.title}</Text>
          <Text style={styles.releaseDate}>{movie.release_date}</Text>
          <Text style={styles.language}>
            Original Language: {movie.original_language ? movie.original_language.toUpperCase() : 'N/A'}
          </Text>
        </View>
      </View>
      <View style={styles.overviewContainer}>
        <Text style={styles.overviewTitle}>Overview</Text>
        <Text style={styles.overviewText}>{movie.overview}</Text>
      </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#6c0000',
    padding: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6c0000',
  },
  header: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  poster: {
    width: 150,
    height: 225,
    borderRadius: 10,
    marginRight: 20,
    resizeMode: 'cover',
  },
  details: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  releaseDate: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 5,
  },
  language: {
    fontSize: 16,
    color: '#fff',
  },
  overviewContainer: {
    marginBottom: 20,
  },
  overviewTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  overviewText: {
    fontSize: 16,
    lineHeight: 22,
    color: '#fff',
  },
  errorText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 50,
  },
});

export default MovieDetailsScreen;
