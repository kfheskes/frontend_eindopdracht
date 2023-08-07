function AppReducer(state, action) {
    switch (action.type) {
        case "ADD_COMBINATION":
            return {
                ...state,
                favorites: [action.payload, ...state.favorites],
            };
        case "REMOVE_FROM_FAVORITES":
            return {
                ...state,
                favorites: state.favorites.filter((beer) => beer.id !== action.payload),
            };
        case "ADD_RATING":
            const {pairing, rating} = action.payload;
            return {
                ...state,
                ratings: {
                    ...state.ratings,
                    [pairing]: rating,
                },
            };
        default:
            return state;
    }
}

export default AppReducer;
