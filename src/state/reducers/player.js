import { actionTypes } from '../actions/player';

export const player = (state = {}, action) => {
	switch (action.type) {
		case actionTypes.FETCH_PLAYER_SUCCESS:
			return {
				...state,
				player: action.player,
				fetchPlayerError: false
			};
		case actionTypes.FETCH_PLAYER_ERROR:
			return {
				...state,
				fetchPlayerError: true
			};
		default:
			return state;
		}
};

export default player;
