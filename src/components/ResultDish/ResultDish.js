import React, {useContext} from "react";
import './ResultDish.css';
import {GlobalContext} from "../../context/GlobalState";

function ResultDish({beer}) {
    const {addFavorites, favorites} = useContext(GlobalContext);

    let storedFavorites = favorites.find(o => o.id === beer.id);

    const favoriteDisabled = !!storedFavorites;

    return (
        <div>
            <h2>{beer.name}</h2>
            <p>{beer.description}</p>
            <img src={beer.image_url} alt={beer.name}/>
            <h3>Food Pairing:</h3>
            <ul>
                {beer.food_pairing.map((pairing) => (
                    <li key={pairing}>{pairing}</li>
                ))}
            </ul>
            <button
                disabled={favoriteDisabled}
                onClick={() => addFavorites(beer)}> add to Favorite
            </button>
        </div>
    )
}

export default ResultDish