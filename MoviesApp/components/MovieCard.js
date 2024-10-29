import React, { useState, useEffect } from 'react';
import { Image, Text, TouchableOpacity, View, Alert, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { movieCardStyles } from '../styles/movieCardStyles';
import fallbackImage from '../assets/404.jpg';
import { saveFavoriteMovie, removeFavoriteMovie, isMovieFavorite } from '../logic/userFavorites';
import Icon from 'react-native-vector-icons/MaterialIcons';

const MovieCard = ({ id, title, originalLanguage, releaseDate, poster_path, overview }) => {
  const [hovered, setHovered] = useState(false);
  const [imageUri, setImageUri] = useState(poster_path);
  const [favorite, setFavorite] = useState(false);
  const [loading, setLoading] = useState(true); // Initially loading
  const [updatingFavorite, setUpdatingFavorite] = useState(false); // Loading for favorite toggle
  const navigation = useNavigation();

  useEffect(() => {
    const checkFavoriteStatus = async () => {
      try {
        const favoriteStatus = await isMovieFavorite(id);
        setFavorite(favoriteStatus);
      } catch (error) {
        console.error('Error checking favorite status:', error);
      } finally {
        setLoading(false); // Data is loaded
      }
    };
    checkFavoriteStatus();
  }, [id]);

  const handleFavoriteToggle = async () => {
    setUpdatingFavorite(true); // Start loading for favorite toggle
    try {
      if (favorite) {
        await removeFavoriteMovie(id);
      } else {
        await saveFavoriteMovie({ title, id, poster_path, release_date: releaseDate, overview });
      }
      setFavorite(!favorite); // Update favorite state
    } catch (error) {
      Alert.alert('Error', 'There was an issue updating your favorites.');
    } finally {
      setUpdatingFavorite(false); // End loading for favorite toggle
    }
  };

  const handleClick = () => {
    navigation.navigate('MovieDetails', { id });
  };

  // Display a loading spinner while data is being fetched
  if (loading) {
    return (
      <View style={movieCardStyles.loadingContainer}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }

  return (
    <TouchableOpacity
      style={[movieCardStyles.card, hovered && movieCardStyles.hovered]}
      onPress={handleClick}
      onPressIn={() => setHovered(true)}
      onPressOut={() => setHovered(false)}
    >
      <View>
        <Image
          source={{ uri: imageUri }}
          style={movieCardStyles.image}
          onError={() => setImageUri(fallbackImage)}
        />
        {hovered && (
          <View style={movieCardStyles.overlay}>
            <Text style={movieCardStyles.overview}>Overview: {overview}</Text>
            <Text>Original Language: {originalLanguage}</Text>
          </View>
        )}
      </View>

      <Text style={movieCardStyles.title}>{title}</Text>
      <Text style={movieCardStyles.releaseDate}>Release Date: {releaseDate}</Text>

      <TouchableOpacity onPress={handleFavoriteToggle} disabled={updatingFavorite}>
        {updatingFavorite ? (
          <ActivityIndicator size="small" color="#fff" style={movieCardStyles.favoriteIcon} />
        ) : (
          <Icon
            name={favorite ? 'favorite' : 'favorite-border'}
            size={30}
            color="#fff"
            style={movieCardStyles.favoriteIcon}
          />
        )}
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default MovieCard;
