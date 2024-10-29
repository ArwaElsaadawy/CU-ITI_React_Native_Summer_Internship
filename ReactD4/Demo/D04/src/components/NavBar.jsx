import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div style={{backgroundColor:"yellowgreen" ,display:"flex" , justifyContent:"space-around" ,padding:"15px"}}>
            <Link to='/'>Home</Link>
            <Link to='/users'>Users</Link>
            <Link to='/users/add'>Add User</Link>
            <Link to='/about'>About</Link>



        </div>
    );
}

export default NavBar;
