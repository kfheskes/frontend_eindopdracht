import React, {useState} from "react";
import "./SearchBeer.css";
import vector from "../assets/Vector.svg"

function SearchBeer() {
    const [beerQuery, setBeerQuery] = useState('')

    function onFormSubmit (e) {
        e.preventDefault();

    }

    return (
        <form className="search-beer" >
            <div className="search-img">
                <img className="vector" alt="Vector" src={vector}/>
            <input
            type="text"
            name="search-beer"
            value={beerQuery}
            />
                {/*// onChange={(e => setBeerQuery(e.target.value)}*/}
            </div>
            <div className="overlap-group">
                <button className="button-beer-search">bier zoeken</button>
            </div>
        </form>
    );
};

export default SearchBeer