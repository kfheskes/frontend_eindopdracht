import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import FavoritesCard from "../../components/Favorites/FavoritesCard";
import "./Favorite.css"
function Favorite() {
    const { favorites } = useContext(GlobalContext);

    return (
        <div className="outer-container">
            <div className="inner-container">
                <div className="pages-padding">
            <h2>Favourites</h2>
            {favorites.length > 0 ? (
                favorites.map((beer) => (
                    <div key={beer.id}>
                    <FavoritesCard beer={beer} type='favorites'/>
                    </div>
                ))
            ) : (
                <h3 className="no-favourites">No favourites selected</h3>
            )}
                </div>
            </div>
        </div>
    );
}

export default Favorite;
