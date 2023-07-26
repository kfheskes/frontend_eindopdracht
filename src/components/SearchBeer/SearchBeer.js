import React, {useState} from "react";
import "./SearchBeer.css";
import vector from "../../assets/Vector.svg";


function SearchBeer({setBeerHandler}) {
    const [beerQuery, setBeerQuery] = useState('');

    function onFormSubmit(e) {
        e.preventDefault();
        setBeerHandler(beerQuery);
    }

    return (
        <form className="search-beer" onSubmit={onFormSubmit}>
            <div className="search-beer-container">
                <input
                    className="input-search-beer"
                    type="text"
                    name="search-beer"
                    value={beerQuery}
                    onChange={(e) => setBeerQuery(e.target.value)}
                />
                <img className="vector" alt="Vector" src={vector}/>
            </div>
            <div className="overlap-group">
                <button type="submit" className="button-beer-search">
                    Search Beer
                </button>
            </div>
        </form>
    );
}

export default SearchBeer