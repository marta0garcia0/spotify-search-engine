import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Track from './track';
import { playTrack } from '../../state/actions/player';

const mapStateToProps = state => ({
  token: state.token ? state.token.token : '',
  searchs: state.searchs ? state.searchs.searchs : '',
  search: state.search ? state.search.search : '',
	player: state.player ? state.player.player : '',
});

const mapDispatchToProps = dispatch => {
	return bindActionCreators({
    playTrack,
	}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Track);