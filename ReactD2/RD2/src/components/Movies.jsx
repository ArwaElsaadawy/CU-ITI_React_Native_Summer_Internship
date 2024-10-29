import React, { useState } from 'react';
import Movie from './Movie'; 

const Movies = () => { 
    const [moviesArr] = useState([]); 

    console.log(moviesArr); 

    return (
        <div>
            {moviesArr.map((u) => <Movie {...u} key={u.title} />)}
        </div>
    );
}

export default Movies;
