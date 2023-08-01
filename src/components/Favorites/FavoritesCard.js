import React, {useContext, useState} from "react";
import "./FavoritesCards.css";
import {RemoveFavorite} from "../RemoveFavorite/RemoveFavorite";
import Beer_empty from "../../assets/Beer empty.png";
import Bier_full from "../../assets/Bier full.png";
import {GlobalContext} from "../../context/GlobalState";
import styles from '../Buttons/Button.module.css'
import Button from "../Buttons/Button"

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
        <>
            <div className="title-description-container">
                <div className="title-beer">
                    <h3>{beer.name}</h3>
                    <RemoveFavorite type={type} beer={beer}/>
                </div>
                <div className="description-beer">
                    <h3>Description Beer</h3>
                    <p>{beer.description}</p>
                </div>
            </div>

            <div className="beer-details-container">
                <div className="beer-details-img">
                    {beer.image_url ? (
                        <img src={beer.image_url} alt={beer.name}/>
                    ) : (
                        <div className="no-img">
                            <h3>No img available</h3></div>
                    )}
                </div>

                <div className="food-pairing">
                    <h3>Food Pairing:</h3>
                    <ul className="food-pairing-list">
                        {beer.food_pairing.map((pairing) => (
                            <li key={pairing}>
                                {pairing}
                                <p>
                                    Rate this combination:
                                </p>
                                {[0, 1, 2, 3, 4].map((ratingIconNumber) => (
                                    <Button
                                        className={styles['food-pairing-buttons']}
                                        key={ratingIconNumber}
                                        onClick={() => handleToggleImage(pairing, ratingIconNumber + 1)}
                                    >
                                        <img
                                            src={ratings[pairing] >= ratingIconNumber + 1 ? Bier_full : Beer_empty}
                                            alt="Beer"
                                        />
                                    </Button>
                                ))}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default FavoritesCard;


