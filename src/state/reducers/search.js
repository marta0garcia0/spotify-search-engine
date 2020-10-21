import { actionTypes } from '../actions/search';

export const search = (state = {}, action) => {
	switch (action.type) {
		case actionTypes.FETCH_SEARCH_SUCCESS:
			return {
				...state,
				search: action.search,
				editSearch: false,
				fetchSearchError: false
			};
		case actionTypes.EDIT_SEARCH:
			return {
				...state,
				search: action.search,
				editSearch: true,
			};
		case actionTypes.FETCH_SEARCH_ERROR:
			return {
				...state,
				fetchSearchError: true
			};
		case actionTypes.FETCH_NEXT_SUCCESS:
			return {
				...state,
				search: action.search,
				fetchNextError: false
			};
		case actionTypes.FETCH_NEXT_ERROR:
			return {
				...state,
				fetchNextError: true
			};
		case actionTypes.DELETE_SEARCH:
			return {
				...state,
				editSearch: false,
				search: null
			}
		default:
			return state;
		}
};

export default search;
