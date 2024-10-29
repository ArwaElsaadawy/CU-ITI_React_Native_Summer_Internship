import React from 'react';

const Movie = (props) => {
    const { name, releaseDate } = props;

    return (
        <div style={{
            backgroundColor: "#f0f4c3", 
            margin: "15px",
            padding: "20px",
            borderRadius: "15px", 
            color: "#2e7d32", 
            fontFamily: "Arial, sans-serif"
        }}>
            <div style={{ fontSize: "20px", fontWeight: "bold" }}>
                Name: {name}
            </div>
            <div style={{ fontSize: "16px" }}>
                Release Date: {releaseDate}
            </div>
        </div>
    );
}

export default Movie;
