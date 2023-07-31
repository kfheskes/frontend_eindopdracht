import React, {useContext} from "react";
import './ResultBeer.css';
import {GlobalContext} from "../../context/GlobalState";
import image from '../../assets/image.svg';
import styles from '../../components/Button/Button.module.css'
function ResultBeer({beer}) {
    const {addFavorites, favorites} = useContext(GlobalContext);

    let storedFavorites = favorites.find(favo => favo.id === beer.id);

    const favoriteDisabled = !!storedFavorites;

    return (
        <div>
            <div className="title-description-container">
                <div className="title-beer">
            <h3>{beer.name}</h3>
                    <button
                        className={styles['button']}
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
                    <h3> No img available</h3>
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