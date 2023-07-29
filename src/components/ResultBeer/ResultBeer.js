import React, {useContext} from "react";
import './ResultBeer.css';
import {GlobalContext} from "../../context/GlobalState";
import image from '../../assets/image.svg'
function ResultBeer({beer}) {
    const {addFavorites, favorites} = useContext(GlobalContext);

    let storedFavorites = favorites.find(favo => favo.id === beer.id);

    const favoriteDisabled = !!storedFavorites;

    return (
        <div>
            <div className="title-description-container">
                <div className="title-beer">
            <h2>{beer.name}</h2>
                    <button
                        disabled={favoriteDisabled}
                        onClick={() => addFavorites(beer)}> add to favourites
                    </button>
                </div>
                <div className="description-beer">
                    <h3>Description beer</h3>
            <p>{beer.description}</p>
                </div>
            </div>
            <div className="beer-details-container">
                <div className="beer-details-img">
            {beer.image_url ? (
                <img src={beer.image_url} alt={beer.name}/>
            ) : (
                <div>
                <img src={image} alt="img-default"/>
                    <h2> No img available</h2>
                </div>)}
                </div>
                <div className="food-pairing">
            <h3>Food Pairing</h3>
            <ul className="food-pairing-list">
                {beer.food_pairing.map((pairing) => (
                    <li key={pairing}>{pairing}</li>
                ))}
            </ul>
                </div>
            </div>
        </div>
    )
}

export default ResultBeer