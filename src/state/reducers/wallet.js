import { FETCH_WALLET } from 'state/actions';

const INITIAL_STATE = null;

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
  case FETCH_WALLET:
    return action.payload;
  default:
    return state;
  }
}
