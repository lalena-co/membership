import Immutable from 'seamless-immutable';
import { FETCH_FACTORY } from 'state/actions';

const INITIAL_STATE = Immutable({});

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
  case `${FETCH_FACTORY}_FULFILLED`:
    return Immutable.set(state, action.payload.key, action.payload);
  default:
    return state;
  }
}
