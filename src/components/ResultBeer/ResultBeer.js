import React, {useContext} from "react";
import './ResultBeer.css';
import {GlobalContext} from "../../context/GlobalState";

function ResultBeer  ({beer}) {
    const {addFavorites, favorites} = useContext(GlobalContext);

    let storedFavorites = favorites.find(favo => favo.id === beer.id);

    const favoriteDisabled = !!storedFavorites;

    return (
            <div>
                <h2>{beer.name}</h2>
                <p>{beer.description}</p>
                {beer.image_url ? (
                <img src={beer.image_url} alt={beer.name} />
                    ) : (
                    <div className="no-img"> No img available</div> )}
                <h3>Food Pairing:</h3>
                <ul>
                    {beer.food_pairing.map((pairing) => (
                        <li key={pairing}>{pairing}</li>
                    ))}
                </ul>
                <button
                    disabled={favoriteDisabled}
                    onClick={() => addFavorites(beer)}> add to Favorite</button>
            </div>
    )
}

export default ResultBeer