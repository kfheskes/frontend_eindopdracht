import React, {useContext} from 'react';
import './Navbar.css';
import hartje from '../../assets/hartje.png'
import inloggen from '../../assets/inloggen logo.png'
import {NavLink} from 'react-router-dom';
import {AuthContext} from "../../context/AuthContext";

function Navbar() {
    const {isAuth, login, logout} = useContext(AuthContext);

    return (
        <header>
            <div className="outer-container">
                <div className="inner-container">
                    <nav>
                        <ul>
                            <div className="biero-logo-nav">
                            <li>
                                <NavLink
                                    to="/"
                                     className="biero-home-button"
                                >
                                    Biero
                                </NavLink>
                            </li>
                            </div>

                            <li className="pages-website">
                                {isAuth &&
                                    <NavLink
                                        to="/favorite"
                                        className="pages-website-button"
                                        >
                                        Favorieten
                                        <img src={hartje} alt='favorite'/>
                                    </NavLink>}
                                    </li>

                            <li className="pages-website">
                                {isAuth &&
                                    <NavLink
                                        to="/"
                                        className="pages-website-button-logout"
                                        onClick={logout}
                                    >
                                        Logout
                                    </NavLink>}
                            </li>

                            <li className="pages-website">
                                {!isAuth &&
                                    <NavLink
                                        to="/signIn"
                                        className="pages-website-button"
                                    >
                                    Sign in <img src={inloggen} alt='inloggen'/>
                                    </NavLink>}
                            </li>
                            <li className="pages-website">
                                {!isAuth &&
                                    <NavLink
                                        to="/signUp"
                                        className="pages-website-button"
                                    >
                                        Sign up
                                    </NavLink>}
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
