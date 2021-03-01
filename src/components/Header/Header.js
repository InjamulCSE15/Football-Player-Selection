import React from 'react';
import logo from '../../images/Screenshot_8.jpg'
import './Header.css';


const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="" />
            <nav>
                <a href="/players">Players</a>
                <a href="/shortlist">Shortlist</a>
                <a href="transfer-list">Transfer-Hub</a>
            </nav>
        </div>
    );
};

export default Header;