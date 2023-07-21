import React, { useState } from "react";
import "./SearchDish.css";
import vector from "../../assets/Vector.svg";


function SearchDish({setDishHandler}) {
    const [dishQuery, setDishQuery] = useState('');
    function onFormSubmit(e) {
        e.preventDefault();
        setDishHandler(dishQuery);
    }

    return (
        <form className="search-dish" onSubmit={onFormSubmit}>
            <div className="search-bar">
                <input className="input-search-dish"
                       type="text"
                       name="search-dish"
                       value={dishQuery}
                       onChange={(e) => setDishQuery(e.target.value)}
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
