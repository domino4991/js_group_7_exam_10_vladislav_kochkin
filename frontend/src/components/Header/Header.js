import React from 'react';
import {NavLink} from "react-router-dom";
import './Header.css';

const Header = () => {
    return (
        <header className="Header">
            <div className="container Header__inner">
                <NavLink to="/" className="Header__logo">News</NavLink>
                <nav className="Header__nav">
                    <ul className="Header__nav-list">
                        <li className="Header__nav-item">
                            <NavLink
                                to="/"
                                exact
                                className="Header__nav-link"
                            >Home</NavLink>
                        </li>
                        <li className="Header__nav-item">
                            <NavLink
                                to="/add-news"
                                className="Header__nav-link"
                            >Add new news</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;