import axios from "axios";
import { apiKey } from "../../variables";

export const ON_AIR = "ON_AIR";
export const POPULAR = "POPULAR";
export const AIRING_TODAY = "AIRING_TODAY";
export const TOP_RATED_TV = "TOP_RATED_TV";

export const onAir = (payload) => {
  return {
    type: ON_AIR,
    payload: payload,
  };
};
export const popular = (payload) => {
  return {
    type: POPULAR,
    payload: payload,
  };
};
export const airingToday = (payload) => {
  return {
    type: AIRING_TODAY,
    payload: payload,
  };
};
export const topRatedTv = (payload) => {
  return {
    type: TOP_RATED_TV,
    payload: payload,
  };
};

export const getOnAir = () => {
  return (dispatch) => {
    axios
      .get(`https://api.themoviedb.org/3/tv/on_the_air?${apiKey}`)
      .then((res) => dispatch(onAir(res.data.results)));
  };
};
export const getPopular = () => {
  return (dispatch) => {
    axios
      .get(`https://api.themoviedb.org/3/tv/popular?${apiKey}`)
      .then((res) => dispatch(popular(res.data.results)));
  };
};
export const getAiringToday = () => {
  return (dispatch) => {
    axios
      .get(`https://api.themoviedb.org/3/tv/airing_today?${apiKey}`)
      .then((res) => dispatch(airingToday(res.data.results)));
  };
};
export const getTopRatedTV = () => {
  return (dispatch) => {
    axios
      .get(`https://api.themoviedb.org/3/tv/top_rated?${apiKey}`)
      .then((res) => dispatch(topRatedTv(res.data.results)));
  };
};
