import axios from 'axios';

const API_KEY = '9813ce01a72ca1bd2ae25f091898b1c7';
const BASE_URL = 'https://api.themoviedb.org/3';

// Fetch movies from the API
export const fetchMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/discover/movie`, {
      params: {
        sort_by: 'popularity.desc',
        api_key: API_KEY
      }
    });
    return response.data.results.map(movie => ({
      id: movie.id,
      originalLanguage: movie.original_language,
      title: movie.title,
      overview: movie.overview,
      releaseDate: movie.release_date,
      poster_path: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
      isFavorited: false
    }));
  } catch (error) {
    console.error("Error fetching movies:", error);
    return []; 
  }
};


export const getMovieDetails = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${id}`, { 
      params: {
        api_key: API_KEY
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw error; 
  }
};
