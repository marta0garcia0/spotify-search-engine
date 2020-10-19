import { actionTypes } from '../actions/search';

export const search = (state = {}, action) => {
	switch (action.type) {
		case actionTypes.FETCH_SEARCH_SUCCESS:
			return {
				...state,
				search: action.search,
				fetchSearchError: false
			};
		case actionTypes.FETCH_SEARCH_ERROR:
			return {
				...state,
				fetchSearchError: true
			};
		case actionTypes.DELETE_SEARCH:
			return {
				...state,
				search: null
			}
		default:
			return state;
		}
};

export default search;
