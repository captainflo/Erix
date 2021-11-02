import { FETCH_STRAINS } from '../actions/types';

const INITIAL_STATE = {
  strains: '',
};

const strains = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_STRAINS:
      return { ...state, strains: action.payload || false };
    default:
      return state;
  }
};

export default strains;
