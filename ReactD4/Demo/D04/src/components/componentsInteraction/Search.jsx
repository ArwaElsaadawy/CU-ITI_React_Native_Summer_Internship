import React, { useState } from 'react';

const Search = ({recWord}) => {
    const [word,setWord]=useState("")
    return (

        <div>
            <input value={word} onChange={(event)=>{
                setWord(event.target.value)
                recWord(event.target.value)
            }} type="text" placeholder="Search..."/>
        </div>
    );
}

export default Search;
