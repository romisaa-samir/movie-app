import axios from "axios";
import { apiKey } from "../../variables";

export const SET_MOVIES = "SET_MOVIES";
export const UP_COMING = "UP_COMING";
export const TRENDING = "TRENDING";
export const NOW_PLAYING = "NOW_PLAYING";
export const TOP_RATED = "TOP_RATED";

export const MoviesAction = (payload) => {
  return {
    type: SET_MOVIES,
    payload: payload,
  };
};
export const upComing = (payload) => {
  return {
    type: UP_COMING,
    payload: payload,
  };
};
export const trending = (payload) => {
  return {
    type: TRENDING,
    payload: payload,
  };
};
export const topRated = (payload) => {
  return {
    type: TOP_RATED,
    payload: payload,
  };
};
export const nowPlaying = (payload) => {
  return {
    type: NOW_PLAYING,
    payload: payload,
  };
};

export const getTopRated = () => {
  return (dispatch, getState) => {
    // you can use api here
    axios
      .get(`https://api.themoviedb.org/3/movie/top_rated?${apiKey}`)
      .then((res) => dispatch(topRated(res.data.results)));
  };
};

export const getUpComing = () => {
  return (dispatch) => {
    axios
      .get(`https://api.themoviedb.org/3/movie/upcoming?${apiKey}`)
      .then((res) => dispatch(upComing(res.data.results)));
  };
};
export const getTrending = () => {
  return (dispatch) => {
    axios
      .get(`https://api.themoviedb.org/3/trending/all/day?${apiKey}`)
      .then((res) => dispatch(trending(res.data.results)));
  };
};
export const getNowPlaying = () => {
  return(dispatch)=>{
  axios
    .get(`https://api.themoviedb.org/3/movie/now_playing?${apiKey}`)
    .then((res) => dispatch(nowPlaying(res.data.results)));
  }
};
