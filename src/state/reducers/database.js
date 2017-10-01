import { DATABASE } from 'state/actions';

const INITIAL_STATE = null;

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
  case DATABASE:
    return action.payload;
  default:
    return state;
  }
}
