import React, {useState} from "react";
import "./SearchBeer.css";
import styles from '../../components/Button/Button.module.css'

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
                <button type="submit" className={styles['btn-search']}>
                    Search Beer
                </button>
            </div>
        </form>
    );
}

export default SearchBeer