export default (state, action) => {
    switch (action.type) {
        case "ADD_COMBINATION":
            return {
            ...state,
                favorites: [action.payload, ...state.favorites],
            }
        default:
            return state;
}
}