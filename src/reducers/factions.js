import { ADD_FACTION, REMOVE_FACTION } from '../actions/factions';

const initialState = {
  Factions: [
  ],
};

const factions = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_FACTION:
      return {
        ...state,

      };
    case REMOVE_FACTION:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default factions;