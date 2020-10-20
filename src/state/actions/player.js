import { config } from '../../config';
import { setToken } from '../actions/token';

export const actionTypes = {
    FETCH_PLAYER_SUCCESS: 'FETCH_PLAYER_SUCCESS',
		FETCH_PLAYER_ERROR: 'FETCH_PLAYER_ERROR',
}

export const fetchPlayerSuccess = (player) => {
	return {
		type: actionTypes.FETCH_PLAYER_SUCCESS,
		player
	};
};
  
export const fetchPlayerError = () => {
	return {
		type: actionTypes.FETCH_PLAYER_ERROR
	};
};

export const playTrack = ( trackId, token ) => {
	return dispatch => {
		const request = new Request(
			`${config.spotifyAPI}tracks/${trackId}`, {
				headers: new Headers({
					'Authorization': 'Bearer ' + token
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
			dispatch(fetchPlayerSuccess(res));
		}).catch(err => {
			dispatch(setToken(''));
			dispatch(fetchPlayerError(err));
		});
  };
}
