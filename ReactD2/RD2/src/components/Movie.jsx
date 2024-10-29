import React from 'react';

const Movie = (props) => {
    const { originalLanguage, originalTitle, overview, releaseDate, title, poster_path } = props;

    const imageUrl = `https://image.tmdb.org/t/p/w500/${poster_path}`;
    return (
<div style={{
            backgroundColor: "#f0f4c3", 
            margin: "15px",
            padding: "20px",
            borderRadius: "15px", 
            color: "#2e7d32", 
            fontFamily: "Arial, sans-serif",
            width: "400px", 
            boxSizing: 'border-box'
        }}>
            
            <div style={{ marginTop: "15px" }}>
                <img src={imageUrl} alt={`${title} Poster`} style={{ width: "100%", borderRadius: "10px" }} />
            </div>
            <div style={{ fontSize: "20px", fontWeight: "bold" }}>
                Title: {title}
            </div>
            <div style={{ fontSize: "16px" }}>
                Original Title: {originalTitle}
            </div>
            <div style={{ fontSize: "16px" }}>
                Original Language: {originalLanguage}
            </div>
            <div style={{ fontSize: "16px" }}>
                Overview: {overview}
            </div>
            <div style={{ fontSize: "16px" }}>
                Release Date: {releaseDate}
            </div>
        </div>
    );
}

export default Movie;
