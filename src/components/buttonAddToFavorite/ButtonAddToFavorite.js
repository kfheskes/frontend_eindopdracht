// ButtonAddToFavorite.js
import React from "react";

function ButtonAddToFavorite({ beer, beerHandler }) {
    function handleClick(e) {
        e.preventDefault();
        beerHandler(beer);
    };

    return (
        <button onClick={handleClick}>Add to Favorites</button>
    );
}

export default ButtonAddToFavorite;
