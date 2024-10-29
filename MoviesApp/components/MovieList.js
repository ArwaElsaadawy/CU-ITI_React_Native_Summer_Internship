import React from 'react';
import { FlatList} from 'react-native';
import MovieCard from './MovieCard';
import { movieCardStyles } from '../styles/movieCardStyles';

const MovieList = ({ movies }) => {
  const renderItem = ({ item }) => (
    <MovieCard
      id={item.id}
      title={item.title}
      
      originalLanguage={item.originalLanguage}
      releaseDate={item.releaseDate}
      poster_path={item.poster_path}
      overview={item.overview}
    />
  );

  return (
    <FlatList
      data={movies}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      numColumns={3} 
      contentContainerStyle={movieCardStyles.grid}
    />
  );
};

export default MovieList;
