import React from 'react';
import './Navbar.css';
import hartje from '../assets/hartje.png'
import inloggen from '../assets/inloggen logo.png'
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
            <div>
                <NavLink to="/" className="button-beer">
                    <button type="button">Biero</button>
                </NavLink>
            </div>
            <div className="right">
                <NavLink to="/favorite"><button type="button">Favorieten <img src={hartje} alt='favorite'/> </button></NavLink>
                <NavLink to="/signIn"><button type="button">Inloggen <img src={inloggen} alt='inloggen'/> </button></NavLink>
                <NavLink to="/signUp"><button type="button">Registeren</button></NavLink>
            </div>
        </nav>
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