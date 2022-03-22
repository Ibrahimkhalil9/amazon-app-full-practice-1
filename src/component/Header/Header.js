import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className="link-container">
                <a href="/Home">Home</a>
                <a href="/About">About</a>
                <a href="/Inventory">Inventory</a>
                <a href="/Info">Info</a>
            </div>
        </nav>
    );
};

export default Header;