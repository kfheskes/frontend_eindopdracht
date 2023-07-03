import React from "react";

function ButtonAddToFavorite({ beer, beerHandler }) {
    const handleClick = () => {
        beerHandler(beer);
    };

    return (
        <button onClick={handleClick}>
            {beer.beerHandler ? "Remove from Favorites" : "Add to Favorites"}
        </button>
    );
}

export default ButtonAddToFavorite;