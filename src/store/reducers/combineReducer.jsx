import { combineReducers } from "redux";
import { CelebritiesReducer } from "./celebritiesReducer";
import { MoviesReducer } from "./movieReducer";
import { TvReducer } from "./tvReduces";


export default combineReducers({
    movies:MoviesReducer,
    tv:TvReducer,
    celebrities:CelebritiesReducer
});
