import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import FavoritesCard from "../../components/Favorites/FavoritesCard";
function Favorite() {
    const { favorites } = useContext(GlobalContext);

    return (
        <div>
            <h1>Favorites</h1>
            {favorites.length > 0 ? (
                favorites.map((beer) => (
                    <div key={beer.id}>
                    <FavoritesCard beer={beer} type='favorites'/>
                    </div>
                ))
            ) : (
                <h2>No favorites</h2>
            )}
        </div>
    );
}

export default Favorite;
