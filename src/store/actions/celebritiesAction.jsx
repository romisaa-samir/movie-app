import axios from "axios";
import { apiKey } from "../../variables";

export const PERSON = "PERSON";


export const person = (payload) => {
  return {
    type: PERSON,
    payload: payload,
  };
};

export const getPerson = () => {
  return (dispatch) => {
    axios.get(`https://api.themoviedb.org/3/person/popular?${apiKey}`)
      .then((res) => dispatch(person(res.data.results)));
  };
};