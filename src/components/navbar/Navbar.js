import React, {useContext} from 'react';
import './Navbar.css';
import hartje from '../../assets/icons/hartje.png'
import inloggen from '../../assets/icons/inloggen logo.png'
import {NavLink} from 'react-router-dom';
import {AuthContext} from "../../context/AuthContext";

function Navbar() {
    const {isAuth, logout} = useContext(AuthContext);

    return (
        <header>
            <div className="outer-container">
                <div className="inner-container">
                    <nav>
                        <ul className='nav-container'>
                            <div className="biero-logo-nav">
                                <li>
                                    <NavLink
                                        to="/"
                                        className="biero-logo-nav-home"
                                    >
                                        Biero
                                    </NavLink>
                                </li>
                            </div>

                            {isAuth ? (
                                <div className="pages-website">
                                    <li>

                                        <NavLink
                                            to="/favorite"
                                            className="pages-website-button"
                                        >
                                            Favourites
                                            <img src={hartje} alt='favorite'/>
                                        </NavLink>
                                    </li>

                                    <li className="pages-website">

                                        <NavLink
                                            to="/"
                                            className="pages-website-button-logout"
                                            onClick={logout}
                                        >
                                            Logout
                                        </NavLink>
                                    </li>
                                </div>
                            ) : (
                                <div className="pages-website">
                                    <li>

                                        <NavLink
                                            to="/signIn"
                                            className="pages-website-button"
                                        >
                                            Sign in <img src={inloggen} alt='inloggen'/>
                                        </NavLink>
                                    </li>
                                    <li className="pages-website">
                                        <NavLink
                                            to="/signUp"
                                            className="pages-website-button"
                                        >
                                            Sign up
                                        </NavLink>
                                    </li>
                                </div>
                            )}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
