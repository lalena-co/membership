import { AUTH } from 'state/actions';

const INITIAL_STATE = null;

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
  case AUTH:
    return action.payload;
  default:
    return state;
  }
}
