import { combineReducers } from 'redux';
import token from './token';
import user from './user';
import search from './search';
import searchs from './searchs';
import player from './player';

export default combineReducers({
  token,
  user,
  search,
  searchs,
  player,
});