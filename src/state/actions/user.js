import { config } from '../../config';
import { setToken } from '../actions/token';

export const actionTypes = {
    FETCH_USER_SUCCESS: 'FETCH_USER_SUCCESS',
    FETCH_USER_ERROR: 'FETCH_USER_ERROR',
}

export const fetchUserSuccess = (user) => {
	return {
		type: actionTypes.FETCH_USER_SUCCESS,
		user
	};
};
  
export const fetchUserError = () => {
	return {
		type: actionTypes.FETCH_USER_ERROR
	};
};

export const fetchUser = (accessToken) => {
	return dispatch => {
		const request = new Request(`${config.spotifyAPI}me`, {
			headers: new Headers({
				'Authorization': 'Bearer ' + accessToken
			})
		});
		fetch(request).then(res => {
			// send user back to homepage if no token
			if(res.statusText === 'Unauthorized') {
				dispatch(setToken(''));
				return;
			}
			return res.json();
		}).then(res => {
			dispatch(fetchUserSuccess(res));
		}).catch(err => {
			dispatch(fetchUserError(err));
		});
	};
};
