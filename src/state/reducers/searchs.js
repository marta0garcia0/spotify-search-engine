import { actionTypes } from '../actions/searchs';

export const searchs = (state = {}, action) => {
	switch (action.type) {
		case actionTypes.UPDATE_SEARCH:
			return {
				...state,
				searchs: action.searchs,
			};
		case actionTypes.UPDATE_SEARCHS:
			return {
				...state,
				searchs: action.searchs,
			};
		case actionTypes.DELETE_SEARCHS:
			return {
				...state,
				searchs: action.searchs,
			};
		default:
			return state;
		}
};

export default searchs;
