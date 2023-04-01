import React from 'react';
import './Header.css'
import logo from '../../image/logo.png'
const Header = () => {
    return (
        <nav className='header'>
            <h2>Knowledge Cafee</h2>
            <div className='logo'>
                <a href="">Subscribe</a>
                <a href="">Blog</a>
                <a href="">Support</a>
                <img src={logo} alt="" />
            </div>
        </nav>
    );
};

export default Header;