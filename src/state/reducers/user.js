import { actionTypes } from '../actions/user';

export const user = (state = {}, action) => {
	switch (action.type) {
		case actionTypes.FETCH_USER_SUCCESS:
			return {
				...state,
				user: action.user,
				fetchUserError: false
			};
		case actionTypes.FETCH_USER_ERROR:
			return {
				...state,
				fetchUserError: true
			};
		default:
			return state;
		}
};

export default user;
