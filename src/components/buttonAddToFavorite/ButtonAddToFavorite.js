// ButtonAddToFavorite.js
import React from "react";

function ButtonAddToFavorite({ beer, beerHandler }) {
    function handleClick(e) {
        e.preventDefault();
        console.log(beer)
        beerHandler(beer);
    };

    return (
        <button onClick={handleClick}>Add to Favorites</button>
    );
}

export default ButtonAddToFavorite;
