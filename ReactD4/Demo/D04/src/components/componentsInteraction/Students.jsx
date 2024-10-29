import React from 'react';

const Students = ({stds}) => {
    // const =props
    return (
        <div>
            <h1>Students</h1>
            {stds.map(std=><h2 key={std.id}>{std.name}</h2>)}
        </div>
    );
}

export default Students;
