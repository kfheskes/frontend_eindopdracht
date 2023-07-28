import React, {useContext} from 'react';
import './Navbar.css';
import hartje from '../../assets/hartje.png'
import inloggen from '../../assets/inloggen logo.png'
import {NavLink} from 'react-router-dom';
import {AuthContext} from "../../context/AuthContext";

function Navbar() {
    const {isAuth, login, logout} = useContext(AuthContext);


    const navObject = {
        isActive: true,
        isPending: false,
    }


    return (
        <header>
            <div className="outer-container">
                <div className="inner-container">
                    <nav>
                        <ul>
                            <li>
                                <NavLink
                                    className={(navObject) => navObject.isActive ? 'active-button-beer' : 'default-button-beer'}
                                    to="/">
                                    <button type="button">Biero</button>
                                </NavLink>
                            </li>

                            <li>
                                {isAuth &&
                                    <NavLink
                                        className={(navObject) => navObject.isActive ? 'active-button' : 'default-button'}
                                        to="/favorite">
                                        <button type="button">Favorieten</button>
                                    </NavLink>} {isAuth && <img src={hartje} alt='favorite'/>}
                                    </li>
                            <li>
                                {isAuth && <button type="button" onClick={logout}>Logout</button>}
                            </li>
                            <li>
                                {!isAuth &&
                                    <NavLink
                                        className={(navObject) => navObject.isActive ? 'active-button' : 'default-button'}
                                        to="/signIn">
                                        <button type="button">Sign in</button>
                                    </NavLink>} {!isAuth && <img src={inloggen} alt='inloggen'/>}
                            </li>
                            <li>
                                {!isAuth &&
                                    <NavLink
                                        className={(navObject) => navObject.isActive ? 'active-button' : 'default-button'}
                                        to="/signUp">
                                        <button type="button">Registeren</button>
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
