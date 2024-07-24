import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [sidebar, setSidebar] = useState(false);

    const toggleSidebar = () => {
        setSidebar(!sidebar);
    };

    return (
        <div>
            <div className="navbar">
                <div className="menu-bar" onClick={toggleSidebar}>
                    &#9776;
                </div>
                <div className="navbar-title">
                    Harrys Car Parts
                </div>
            </div>
            <div className={`sidebar ${sidebar ? 'open' : ''}`}>
                <div className="close-icon" onClick={toggleSidebar}>
                    &times;
                </div>
                <NavLink to="/" onClick={toggleSidebar}>Home</NavLink>
                <NavLink to="/contact" onClick={toggleSidebar}>Contact Us</NavLink>
            </div>
        </div>
    );
}

export default Navbar;
