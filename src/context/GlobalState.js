import React, {createContext, useReducer, useEffect} from "react";
import AppReducer from "./AppReducer";
// import AppReducer2 from "./AppReducer2";

// initial state
const initialState = {
    favorites: localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : [],
    rating: localStorage.getItem('rating') ? JSON.parse(localStorage.getItem('rating')) : [],
}

// create context

export const GlobalContext = createContext(initialState);

// provider components
export const GlobalState = props => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(()=> {
        localStorage.setItem('favorites', JSON.stringify(state.favorites))
    }, [state])

    useEffect (()=> {
        localStorage.setItem('rating', JSON.stringify(state.rating))
    }, [state])

    // actions
    const addFavorites = (beer) => {
        dispatch({type: "ADD_COMBINATION", payload: beer})
    }

    const removeBeerFromFavorites = (id) => {
        dispatch({type: "REMOVE_FROM_FAVORITES", payload: id})
    }

    const addRating = (food, rating) => {
        dispatch({type: "ADD_RATING", payload: [{food: food, rating: rating}]})
    }

    return (
        <GlobalContext.Provider
            value={{
                favorites: state.favorites,
                addFavorites: addFavorites,
                removeBeerFromFavorites: removeBeerFromFavorites,
                rating: state.rating,
                addRating: addRating,
            }}>
            {props.children}
        </GlobalContext.Provider>
    )

}
