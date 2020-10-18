import { actionTypes } from '../actions/token';

export const tokenReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.SET_TOKEN:
      return {
        ...state,
        token: action.token
      };
    default:
      return state;
  }
};

export default tokenReducer;
