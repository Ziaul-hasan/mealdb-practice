import React from 'react';
import logo from '../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <nav className='header-container'>
            <img src={logo} alt="" />
            <div>
                <a href="/home">Home</a>
                <a href="/menu">Menu</a>
                <a href="/order">Order</a>
                <a href="/contact">Contact</a>
            </div>
        </nav>
    );
};

export default Header;