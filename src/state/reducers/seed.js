import { FETCH_SEED } from 'state/actions';

const INITIAL_STATE = null;

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
  case FETCH_SEED:
    return action.payload;
  default:
    return state;
  }
}
