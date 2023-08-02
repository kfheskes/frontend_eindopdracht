import React, {useState} from "react";
import "./SearchBeer.css";
import styles from '../Buttons/Button.module.css'
import Button from "../Buttons/Button";

function SearchBeer({setBeerHandler}) {
    const [beerQuery, setBeerQuery] = useState('');

    function onFormSubmit(e) {
        e.preventDefault();
            setBeerHandler(beerQuery);
    }

    return (
        <form className="search-beer" onSubmit={onFormSubmit}>
            <div className="search-beer-container">
                <div className="search-bar">
                <input
                    type="text"
                    name="search-beer"
                    value={beerQuery}
                    onChange={(e) => setBeerQuery(e.target.value)}
                />
                </div>
                <Button type="submit" className={styles['btn-search']}>
                    Search Beer
                </Button>

            </div>
        </form>
    );
}

export default SearchBeer