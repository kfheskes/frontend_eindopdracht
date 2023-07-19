import React, {useContext, useState, useEffect} from "react";
import './FavoritesCards.css';
import {RemoveFavorite} from "../RemoveFavorite/RemoveFavorite"
import Beer_empty from "../../assets/Beer empty.png"
import Bier_full from "../../assets/Bier full.png"
import {GlobalContext} from "../../context/GlobalState";
import {logDOM} from "@testing-library/react";

function FavoritesCard({beer, type, test}) {
    const [review, setReview] = useState( [0]);
    const {addRating, rating} = useContext(GlobalContext);
    const [foodChoice, setFoodChoice] = useState('')
    const [disabled, setDisabled] = useState(false)


    // let storedRating = rating.find((o) => o[0].food === pairing)
    // console.log(storedRating)

    console.log(rating)


    const handleToggleImage = (index, rating2, pairing) => {
        const newReviews = [...review];
        newReviews[index] = rating2;
        setReview(newReviews);
        setFoodChoice(pairing);

        addRating(pairing, rating2);
        console.log(index, rating2, pairing);
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
                {beer.food_pairing.map((pair, index) => (
                    <li key={pair}>
                        <p>{pair} <strong>Would you rate this combination? Click on the buttons</strong></p>
                        {[0, 1, 2, 3, 4].map((ratingIconNumber) => (
                            <button
                                key={ratingIconNumber}
                                disabled={rating.find((rate) => rate[0].food === pair)}
                                onClick={() => handleToggleImage(index, ratingIconNumber + 1, pair)}>
                                {Object.keys(rating).length > 0 ? <img src={rating[0][0].rating >= ratingIconNumber + 1 ? Bier_full : Beer_empty}
                                    alt="Beer"/>
                                :
                                    <img src={review[index] >= ratingIconNumber + 1 ? Bier_full : Beer_empty}
                                         alt="Beer"
                                />
                                }
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