import React, {useContext} from "react";
import {GlobalContext} from "../../context/GlobalState";
import "./RemoveFavorite.css"
import styles from '../Buttons/Button.module.css'
import Button from "../Buttons/Button"

export const RemoveFavorite = ({beer, type}) => {
    const {removeBeerFromFavorites} = useContext(GlobalContext)

    return (
        <div>
            {type === "favorites" && (
                <Button
                    className={styles['button']}
                    onClick={() => removeBeerFromFavorites(beer.id)}
                >
                    Remove from favorites
                </Button>
            )}
        </div>
    )
}
