import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to='/home'>Home</Link>
            <Link to='/grandpa'>Grandpa</Link>
            <Link to='/graph'>Graph</Link>
            
        </div>
    );
};

export default Header;