import React, {useContext} from "react";
import {GlobalContext} from "../../context/GlobalState";
import "./RemoveFavorite.css"

export const RemoveFavorite = ({beer, type}) => {
        const { removeBeerFromFavorites} = useContext(GlobalContext)

    return (
        <div>
        {type === "favorites" && (
        <button onClick={()=>removeBeerFromFavorites(beer.id)}> Remove from favorites</button>
        )}
        </div>
    )
}
