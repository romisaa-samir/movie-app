import {
  NOW_PLAYING,
  SET_MOVIES,
  TOP_RATED,
  TRENDING,
  UP_COMING,
} from "../actions/moviesAction";
const INITIAL_STATE = {
  topRated: [],
  nowPlayin: [],
  upComing: [],
  trending: [],
};

export function MoviesReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case UP_COMING:
      return {...state, upComing: [ ...action.payload ]};
    case NOW_PLAYING:
      return {...state, nowPlayin : [ ...action.payload ]};
    case TRENDING:
      return {...state, trending: [ ...action.payload ]}
    case TOP_RATED:
      return {...state, topRated: [ ...action.payload ]};

    default:
      return state;
  }
}
