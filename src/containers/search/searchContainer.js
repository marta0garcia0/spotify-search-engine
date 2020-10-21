import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Search from './search';
import { setToken } from '../../state/actions/token';
import { fetchSearch, deleteSearch, fetchNext } from '../../state/actions/search';
import { updateSearchs, deleteSearchs, updateSearch } from '../../state/actions/searchs';
import { playTrack } from '../../state/actions/player';

const mapStateToProps = state => ({
  token: state.token ? state.token.token : '',
  searchs: state.searchs ? state.searchs.searchs : '',
  search: state.search ? state.search.search : '',
  editSearch: state.search ? state.search.editSearch : false,
  
});

const mapDispatchToProps = dispatch => {
	return bindActionCreators({
		setToken,
		fetchSearch,
    updateSearchs,
    updateSearch,
		deleteSearch,
		deleteSearchs,
    fetchNext,
    playTrack,
	}, dispatch);
};
  
export default connect(mapStateToProps, mapDispatchToProps)(Search);