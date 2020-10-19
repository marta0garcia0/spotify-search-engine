import { actionTypes } from '../actions/searchs';

export const searchs = (state = {}, action) => {
	switch (action.type) {
		case actionTypes.UPDATE_SEARCHS:
			return {
				...state,
				searchs: action.searchs,
			};
		default:
			return state;
		}
};

export default searchs;
