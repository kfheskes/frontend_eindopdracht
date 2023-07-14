import React, { useState } from "react";
import "./SearchDish.css";
import vector from "../../assets/Vector.svg";
import {useNavigate} from "react-router-dom";

function SearchDish() {
    // const [beerQuery, setBeerQuery] = useState('');
    // const navigate = useNavigate();
    // function onFormSubmit(e) {
    //     e.preventDefault();
    //     setBeerHandler(beerQuery);
    //     navigate("/searchResult")
    // }

    return (
        <form className="search-dish">
            <div className="search-bar">
                <input className="input-search-dish"
                       type="text"
                       name="search-dish"
                />
                <img className="vector" alt="Vector" src={vector} />
            </div>
            <div className="overlap-group">
                <button type="submit" className="button-dish-search">
                    Search dish
                </button>
            </div>
        </form>
    );
}

export default SearchDish;
