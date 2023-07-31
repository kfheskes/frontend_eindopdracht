import React, {useState} from "react";
import "./SearchDish.css";
import styles from "../Button/Button.module.css";


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

                <button type="submit" className={styles['btn-search']}>
                    Search Dish
                </button>
            </div>
        </form>
    );
}

export default SearchDish;
