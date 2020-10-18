import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Home from './home';
import { setToken } from '../../state/actions/token';

const mapStateToProps = state => ({
  token: state.tokenReducer ? state.tokenReducer.token : '',
});

const mapDispatchToProps = dispatch => {
	return bindActionCreators({
		setToken,
	}, dispatch);
};
  
export default connect(mapStateToProps, mapDispatchToProps)(Home);