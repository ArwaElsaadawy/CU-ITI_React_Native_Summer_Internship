import React, { Component } from 'react';
import axios from 'axios';
import Movie from './Movie'; // Assuming Movie component is in the same directory

class Task extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: []
        };
    }

    componentDidMount() {
        axios.get("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7")
            .then(res => {
                const movies = res.data.results.map(movie => ({
                    originalLanguage: movie.original_language,
                    originalTitle: movie.original_title,
                    overview: movie.overview,
                    releaseDate: movie.release_date,
                    title: movie.title,
                    poster_path : movie.poster_path
                }));
                this.setState({ movies });
            })
            .catch(err => console.error("Error fetching data:", err));
    }

    render() {
        if (this.state.movies.length === 0) return <div>Loading ......</div>;

        return (
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                {this.state.movies.map((movie, index) => (
                    <Movie 
                        key={index}
                        originalLanguage={movie.originalLanguage}
                        originalTitle={movie.originalTitle}
                        overview={movie.overview}
                        releaseDate={movie.releaseDate}
                        title={movie.title}
                        poster_path={movie.poster_path}
                    />
                ))}
            </div>
        );
    }
}

export default Task;
