import React, {useContext} from "react";
import {GlobalContext} from "../../context/GlobalState";
import "./RemoveFavorite.css"
import styles from '../../components/Button/Button.module.css'

export const RemoveFavorite = ({beer, type}) => {
    const {removeBeerFromFavorites} = useContext(GlobalContext)

    return (
        <div>
            {type === "favorites" && (
                <button
                    className={styles['button']}
                    onClick={() => removeBeerFromFavorites(beer.id)}
                > Remove from favorites
                </button>
            )}
        </div>
    )
}
