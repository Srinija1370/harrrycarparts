import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from './logo2.png'; // Import your logo image

const Navbar = () => {
    const [sidebar, setSidebar] = useState(false);

    const toggleSidebar = () => {
        setSidebar(!sidebar);
    };

    return (
        <div>
            <div className="navbar">
                <div className="navbar-left">
                    <div className="menu-bar" onClick={toggleSidebar}>
                        &#9776;
                    </div>
                    <img src={logo} alt="Logo" className="navbar-logo" />
                </div>
                <div className="navbar-title">
                    Harry's Car Parts
                </div>
            </div>
            <div className={`sidebar ${sidebar ? 'open' : ''}`}>
                <div className="close-icon" onClick={toggleSidebar}>
                    &times;
                </div>
                <NavLink to="/" onClick={toggleSidebar}>Home</NavLink>
                <NavLink to="/billing" onClick={toggleSidebar}>Billing Page</NavLink>
                <NavLink to="/contact" onClick={toggleSidebar}>Contact Us</NavLink>
            </div>
        </div>
    );
}

export default Navbar;
