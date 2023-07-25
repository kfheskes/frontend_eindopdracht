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
                    <nav className="navbar">
                        <div>
                            <NavLink
                                className={(navObject) => navObject.isActive ? 'active-button-beer' : 'default-button-beer'}
                                to="/">
                                <button type="button">Biero</button>
                            </NavLink>
                        </div>

                        <div className="menu">
                            {isAuth &&
                            <NavLink className={(navObject) => navObject.isActive ? 'active-button' : 'default-button'}
                                     to="/favorite">
                                 <button type="button">Favorieten</button>
                            </NavLink>} {isAuth && <img src={hartje} alt='favorite'/>}

                            {isAuth && <button type="button" onClick={logout}>Logout</button>}

                            {!isAuth &&
                            <NavLink className={(navObject) => navObject.isActive ? 'active-button' : 'default-button'}
                                     to="/signIn">
                                <button type="button" >Sign in</button>
                            </NavLink>} {!isAuth && <img src={inloggen} alt='inloggen'/>}

                            {!isAuth &&
                            <NavLink className={(navObject) => navObject.isActive ? 'active-button' : 'default-button'}
                                     to="/signUp">
                                <button type="button">Registeren</button>
                            </NavLink> }
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Navbar;

// import React from "react";
// import { Navbar } from "./Navbar";
// import { SearchBeer } from "./SearchBeer";
// import "./style.css";
//
// export const Wireframe = () => {
//     return (
//         <div className="wireframe">
//             <div className="div-2">
//                 <div className="nav-nav-header">
//                     <div className="logo-BIERO">
//                         <div className="tekst-biero">BIERO</div>
//                     </div>
//                     <Navbar />
//                 </div>
//                 <SearchBeer className="search-beer-instance" />
//                 <SearchBeer
//                     bierZoekenClassName="search-dish"
//                     className="search-dish-2"
//                     text="gerecht zoeken"
//                     vector="image.svg"
//                 />
//                 <div className="bier-optie">
//                     <img className="rectangle" alt="Rectangle" src="rectangle-3.png" />
//                     <img className="img" alt="Rectangle" src="rectangle-4.png" />
//                     <img className="th" alt="Th" src="th-1192992088-1.png" />
//                 </div>
//             </div>
//         </div>
//     );
// };