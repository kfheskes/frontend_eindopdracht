import React, {useState} from "react";
import "./SearchDish.css";


function SearchDish({setDishHandler}) {
    const [dishQuery, setDishQuery] = useState('');

    function onFormSubmit(e) {
        e.preventDefault();
        setDishHandler(dishQuery);
    }

    return (
        <form className="search-dish" onSubmit={onFormSubmit}>
            <div className="search-dish-container">
                <input
                    type="text"
                    name="search-dish"
                    value={dishQuery}
                    onChange={(e) => setDishQuery(e.target.value)}
                />

                <button type="submit">
                    Search Dish
                </button>
            </div>
        </form>
    );
}

export default SearchDish;
