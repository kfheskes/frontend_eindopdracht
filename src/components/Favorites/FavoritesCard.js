import React, {useContext, useState} from "react";
import "./FavoritesCards.css";
import {RemoveFavorite} from "../RemoveFavorite/RemoveFavorite";
import Beer_empty from "../../assets/Beer empty.png";
import Bier_full from "../../assets/Bier full.png";
import {GlobalContext} from "../../context/GlobalState";

function FavoritesCard({beer, type}) {
    const {ratings, addRating,} = useContext(GlobalContext);
    const [foodRatings, setFoodRatings] = useState({});

    const handleToggleImage = (pairing, rating) => {
        setFoodRatings((prevRatings) => ({
            ...prevRatings,
            [pairing]: rating,
        }));

        addRating(pairing, rating);
    };


    return (
        <div>
            <h2>{beer.name}</h2>
            <p>{beer.description}</p>
            {beer.image_url ? (
                <img src={beer.image_url} alt={beer.name}/>
            ) : (
                <div className="no-img">No img available</div>
            )}
            <h3>Food Pairing:</h3>
            <ul>
                {beer.food_pairing.map((pairing) => (
                    <li key={pairing}>
                        {pairing} <strong>Would you rate this combination? Click on the buttons</strong>
                        {[0, 1, 2, 3, 4].map((ratingIconNumber) => (
                            <button
                                key={ratingIconNumber}
                                onClick={() => handleToggleImage(pairing, ratingIconNumber + 1)}
                            >
                                <img
                                    src={ratings[pairing] >= ratingIconNumber + 1 ? Bier_full : Beer_empty}
                                    alt="Beer"
                                />
                            </button>
                        ))}
                    </li>
                ))}
            </ul>
            <RemoveFavorite type={type} beer={beer}/>
        </div>
    );
}

export default FavoritesCard;


