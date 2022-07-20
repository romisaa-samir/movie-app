import { PERSON } from "../actions/celebritiesAction";

  const INITIAL_STATE = {
    celebrity: [],
  };
  
  export function CelebritiesReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case PERSON:
        return {...state, celebrity: [ ...action.payload ]};
      default:
        return state;
    }
  }
  