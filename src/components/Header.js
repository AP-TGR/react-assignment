import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item"><i className="home icon"></i>Home</Link>
            <div className="right menu">
                <Link to="/user/new" className="ui primary button"><i className="user icon"></i>Add User</Link>
                <Link to="/login" className="ui secondary button">Login</Link>
            </div>
        </div>
    );
};

export default Header;