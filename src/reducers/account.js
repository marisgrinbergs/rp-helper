import { CONNECT_USER, DISCONNECT_USER } from "../actions/factions";

const initialState = {
  Account: [],
};

const account = (state = initialState, action = {}) => {
  if ((action.type = CONNECT_USER)) {
    //  Besoin d'un payload dans l'action, avec le nom d'utilisateur et tout.

    return state;
  } else if ((action.type = DISCONNECT_USER)) {
    state = [];
    return state;
  }
  return state;
};
