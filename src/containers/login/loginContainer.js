import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Login from './login';

const mapStateToProps = state => ({
  token: state.token ? state.token.token : '',
  user: state.user ? state.user.user : null,
});

const mapDispatchToProps = dispatch => {
	return bindActionCreators({
	}, dispatch);
};
  
export default connect(mapStateToProps, mapDispatchToProps)(Login);