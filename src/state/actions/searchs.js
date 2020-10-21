import searchs from '../reducers/searchs';
import { config } from '../../config';

export const actionTypes = {
	UPDATE_SEARCHS: 'UPDATE_SEARCHS',
	DELETE_SEARCHS: 'DELETE_SEARCHS',
	UPDATE_SEARCH: 'UPDATE_SEARCH',
}

export const updateSearchs = (searchs = [], search) => {
	return {
		type: actionTypes.UPDATE_SEARCHS,
		searchs: search[0].concat(searchs).slice(0, config.searchsMaxLength),
	};
};

export const deleteSearchs = (searchs = [], searchIndex) => {
	return {
		type: actionTypes.DELETE_SEARCHS,
		searchs: searchs.filter((search, i) => i !== searchIndex),
	};
};

export const updateSearch = (searchs = [], search, searchIndex) => {
	return {
		type: actionTypes.UPDATE_SEARCH,
		searchs: searchs.map((currentSearch, i) => i !== searchIndex ? currentSearch : search),
	};
};
