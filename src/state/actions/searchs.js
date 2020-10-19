import searchs from '../reducers/searchs';

export const actionTypes = {
	UPDATE_SEARCHS: 'UPDATE_SEARCHS',
}

export const updateSearchs = (searchs = [], search) => {
	return {
		type: actionTypes.UPDATE_SEARCHS,
		searchs: searchs.concat(search),
	};
};
