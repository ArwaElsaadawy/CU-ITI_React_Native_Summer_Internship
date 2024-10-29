import React, { useState } from 'react';
import Movie from './Movie'; 

const Movies = () => { 
    const [moviesArr] = useState([
        { name: "Encanto", releaseDate: 2021 },
        { name: "Monsters, Inc.", releaseDate: 2001 },
        { name: "Toy Story", releaseDate: 1995 },
        { name: "Frozen", releaseDate: 2013 },
        { name: "The Lion King", releaseDate: 1994 },
        { name: "Finding Nemo", releaseDate: 2003 },
        { name: "Shrek", releaseDate: 2001 },
        { name: "The Incredibles", releaseDate: 2004 },
        { name: "Coco", releaseDate: 2017 },
        { name: "Ratatouille", releaseDate: 2007 },
    ]);

    console.log(moviesArr);

    return (
        <div>
            {moviesArr.map((u) => <Movie {...u} key={u.name} />)} 
        </div>
    );
}

export default Movies;
