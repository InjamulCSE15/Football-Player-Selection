import React from 'react';
import logo from '../../images/Screenshot_8.jpg'
import './Header.css';


const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt=""/>
        </div>
    );
};

export default Header;