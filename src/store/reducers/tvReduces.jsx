import { AIRING_TODAY, ON_AIR, POPULAR, TOP_RATED_TV } from "../actions/tvAction";

const INITIAL_STATE = {
  onAir: [],
  popular: [],
  upComing: [],
  trending: [],
};

export function TvReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ON_AIR:
      return {
        ...state,
        onAir: [...action.payload],
      };
    case POPULAR:
      return {
        ...state,
        popular: [...action.payload],
      };
    case AIRING_TODAY:
      return {
        ...state,
        airingToday: [...action.payload],
      };
    case TOP_RATED_TV:
      return {
        ...state,
        topRatedTv: [...action.payload],
      };

    default:
        return state
  }
}
