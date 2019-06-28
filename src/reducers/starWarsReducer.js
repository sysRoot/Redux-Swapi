import { FETCHING, SUCCESS, FAILURE } from '../actions';

const initialState = {
  characters: [],
  isFetching: false,
  error: null
};
export const charsReducer = (state = initialState, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case FETCHING:
      newState = { ...state, isFetching: true };
      return newState;
    case SUCCESS:
      newState = {
        ...state,
        isFetching: false,
        characters: [...state.characters, ...action.payload]
      };
      return newState;
    case FAILURE:
      newState = {
        ...state,
        isFetching: false,
        error: action.payload
      };
      return newState;
    default:
      return state;
  }
};
