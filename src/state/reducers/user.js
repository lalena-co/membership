import {
  AUTHORIZE_USER,
  DELETE_USER,
  REGISTER_USER,
  SIGN_OUT_USER,
  UPDATE_USER,
} from 'state/actions';

const INITIAL_STATE = null;

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
  case AUTHORIZE_USER:
  case REGISTER_USER:
  case UPDATE_USER:
    return action.payload;
  case DELETE_USER:
  case SIGN_OUT_USER:
    return INITIAL_STATE;
  default:
    return state;
  }
}
