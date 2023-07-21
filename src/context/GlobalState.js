import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

// initial state
const initialState = {
    favorites: localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : [],
    ratings: localStorage.getItem('ratings') ? JSON.parse(localStorage.getItem('ratings')) : [],
}

// create context
export const GlobalContext = createContext(initialState);

// provider components
export const GlobalState = props => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(state.favorites));
        localStorage.setItem('ratings', JSON.stringify(state.ratings))
    }, [state])


    // actions
    const addFavorites = (beer) => {
        dispatch({ type: "ADD_COMBINATION", payload: beer })
    }

    const removeBeerFromFavorites = (id) => {
        dispatch({ type: "REMOVE_FROM_FAVORITES", payload: id })
    }

    const addRating = (pairing, rating) => {
        dispatch({ type: "ADD_RATING", payload: { pairing, rating } })
    }


    return (
        <GlobalContext.Provider
            value={{
                favorites: state.favorites,
                ratings: state.ratings,
                addFavorites: addFavorites,
                removeBeerFromFavorites: removeBeerFromFavorites,
                addRating: addRating,
            }}>
            {props.children}
        </GlobalContext.Provider>
    )

}
