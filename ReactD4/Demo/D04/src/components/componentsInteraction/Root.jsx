import React, { useState } from 'react';
import Search from './Search';
import Students from './Students';

const Root = () => {
    const [stds]=useState([
        {id:1,name:"Ahmed"},
        {id:2,name:"Omar"},
        {id:3,name:"Yossef"},
        {id:4,name:"Amira"},
        {id:5,name:"Hesham"},
       

    ])
    const [filteredArr,setFilteredArr]=useState(stds)
    const recWord=(data)=>{
        console.log(data);
        setFilteredArr(stds.filter(std=>std.name.toLocaleLowerCase().includes(data.toLocaleLowerCase())))
    }

    return (
        <div>
            <Search recWord={recWord}></Search>
            <Students stds={filteredArr}></Students>
        </div>
    );
}

export default Root;
