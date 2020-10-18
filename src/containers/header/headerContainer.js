import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from './header';
import { fetchUser } from '../../state/actions/user';

const mapStateToProps = state => ({
  user: state.user ? state.user.user : null,
});

const mapDispatchToProps = dispatch => {
	return bindActionCreators({
	}, dispatch);
};
  
export default connect(mapStateToProps, mapDispatchToProps)(Header);