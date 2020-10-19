import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Login from './login';

const mapStateToProps = state => ({
  token: state.token ? state.token.token : '',
});

const mapDispatchToProps = dispatch => {
	return bindActionCreators({
	}, dispatch);
};
  
export default connect(mapStateToProps, mapDispatchToProps)(Login);