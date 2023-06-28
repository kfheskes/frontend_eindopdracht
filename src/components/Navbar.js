import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="left">
                <NavLink to="/" className="button-beer">
                    <button type="button">Biero</button>
                </NavLink>
            </div>
            <div className="right">
                <NavLink to="/signIn"><button type="button">Inloggen</button></NavLink>
                <NavLink to="/signUp"><button type="button">Registeren</button></NavLink>
                <NavLink to="/favorite"><button type="button">Favorieten</button></NavLink>
            </div>
        </nav>
    );
}

export default Navbar;