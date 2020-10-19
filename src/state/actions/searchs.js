import searchs from '../reducers/searchs';

export const actionTypes = {
	UPDATE_SEARCHS: 'UPDATE_SEARCHS',
	DELETE_SEARCHS: 'DELETE_SEARCHS',
}

export const updateSearchs = (searchs = [], search) => {
	return {
		type: actionTypes.UPDATE_SEARCHS,
		searchs: searchs.concat(search),
	};
};

export const deleteSearchs = (searchs = [], searchIndex) => {
	return {
		type: actionTypes.DELETE_SEARCHS,
		searchs: searchs.filter((search, i) => i !== searchIndex),
	};
};
