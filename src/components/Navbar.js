import React from 'react';
import './Navbar.css'
import {NavLink} from 'react-router-dom'


function Navbar() {


    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/" className='button-beer'>
                <button type='button'>Biero</button>
            </NavLink>
                </li>
                <li>
                    <NavLink to="/signIn">Inloggen</NavLink>
                </li>
                <li>
                    <NavLink to="/signUp">Registeren</NavLink>
                </li>
                <li>
                    <NavLink to="/favorite">Favorieten</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar