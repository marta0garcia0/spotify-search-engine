import { config } from '../../config';
import { setToken } from '../actions/token';

export const actionTypes = {
    FETCH_SEARCH_SUCCESS: 'FETCH_SEARCH_SUCCESS',
		FETCH_SEARCH_ERROR: 'FETCH_SEARCH_ERROR',
		DELETE_SEARCH: 'DELETE_SEARCH',
}

export const fetchSearchSuccess = (search) => {
	return {
		type: actionTypes.FETCH_SEARCH_SUCCESS,
		search
	};
};
  
export const fetchSearchError = () => {
	return {
		type: actionTypes.FETCH_SEARCH_ERROR
	};
};

export const deleteSearch = () => {
	return {
		type: actionTypes.DELETE_SEARCH
	};
}

export const fetchSearch = (accessToken, item, type) => {
	return dispatch => {
		const request = new Request(
			`${config.spotifyAPI}search?q=${encodeURI(item)}&type=${type}`, {
				headers: new Headers({
					'Authorization': 'Bearer ' + accessToken
				})
			}
		);
		fetch(request).then(response => {
			return response.json();
		}).then(res => {
			dispatch(fetchSearchSuccess(res));
		}).catch(err => {
			dispatch(setToken(''));
			dispatch(fetchSearchError(err));
		});
	};
};
