import { FETCH_ANGEL } from 'state/actions';

const INITIAL_STATE = null;

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
  case FETCH_ANGEL:
    return action.payload;
  default:
    return state;
  }
}
