import { config } from '../../config';
import { setToken } from '../actions/token';

export const actionTypes = {
    FETCH_SEARCH_SUCCESS: 'FETCH_SEARCH_SUCCESS',
		FETCH_SEARCH_ERROR: 'FETCH_SEARCH_ERROR',
		FETCH_NEXT_SUCCESS: 'FETCH_NEXT_SUCCESS',
		FETCH_NEXT_ERROR: 'FETCH_NEXT_ERROR',
		DELETE_SEARCH: 'DELETE_SEARCH',
}

export const fetchSearchSuccess = (search) => {
	return {
		type: actionTypes.FETCH_SEARCH_SUCCESS,
		search: [search]
	};
};
  
export const fetchSearchError = () => {
	return {
		type: actionTypes.FETCH_SEARCH_ERROR
	};
};

export const fetchNextSuccess = (search, prevSearch) => {
	return {
		type: actionTypes.FETCH_NEXT_SUCCESS,
		search: prevSearch.concat(search)
	};
};
  
export const fetchNextError = () => {
	return {
		type: actionTypes.FETCH_NEXT_ERROR
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
			if(response.status !== 200) {
				dispatch(setToken(''));
				return;
			}
			return response.json();
		}).then(res => {
			dispatch(fetchSearchSuccess(res));
		}).catch(err => {
			dispatch(setToken(''));
			dispatch(fetchSearchError(err));
		});
	};
};

export const fetchNext = (accessToken, nextUrl, search) => {
	return dispatch => {
		const request = new Request(nextUrl, {
				headers: new Headers({
					'Authorization': 'Bearer ' + accessToken
				})
			}
		);
		fetch(request).then(response => {
			if(response.status !== 200) {
				dispatch(setToken(''));
				return;
			}
			return response.json();
		}).then(res => {
			dispatch(fetchNextSuccess(res, search));
		}).catch(err => {
			dispatch(setToken(''));
			dispatch(fetchNextError(err));
		});
	};
}