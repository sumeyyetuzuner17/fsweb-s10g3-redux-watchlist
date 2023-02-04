
import { movies } from "../movies";

// actions
const REMOVE_FAV = "Favorilerden Kaldır";
const ADD_FAVORITES = "Favorilere Ekle";

const initialState = {
    movies: movies,
    favorites: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {


        case ADD_FAVORITES:
            let newMovie = action.payload;

            console.log("reducer", newMovie);

        default:
            return state;
    }
};

export default reducer