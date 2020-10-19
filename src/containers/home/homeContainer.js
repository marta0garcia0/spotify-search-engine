import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Home from './home';
import { setToken } from '../../state/actions/token';
import { fetchSearch, deleteSearch, fetchNext } from '../../state/actions/search';
import { updateSearchs, deleteSearchs } from '../../state/actions/searchs';

const mapStateToProps = state => ({
  token: state.token ? state.token.token : '',
  searchs: state.searchs ? state.searchs.searchs : '',
  search: state.search ? state.search.search : '',
});

const mapDispatchToProps = dispatch => {
	return bindActionCreators({
		setToken,
		fetchSearch,
		updateSearchs,
		deleteSearch,
		deleteSearchs,
		fetchNext,
	}, dispatch);
};
  
export default connect(mapStateToProps, mapDispatchToProps)(Home);