import React from 'react';
import './search.css';
import { Redirect } from 'react-router-dom';
import { NewSearch } from '../../components';
import { config } from '../../config';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.onSave = this.onSave.bind(this);
    this.onClose = this.onClose.bind(this);
    this.setTypeSelected = this.setTypeSelected.bind(this);
    this.playTrack = this.playTrack.bind(this);
    this.changeTimeout = 0;
    this.state = {
      typeSelected: config.spotifyTypes[0]
    };
  }

  handleChange(value, type) {
    clearTimeout(this.changeTimeout);
    // to avoid send several requests
    this.changeTimeout = setTimeout(() => {
      if (value.length > 3) {
        this.props.fetchSearch(this.props.token, value, type)
      }
    }, 400)
  }

  setTypeSelected(value) {
    this.setState({typeSelected: value});
  }

  onSave(search) {
    if (!this.props.editSearch) {
      this.props.updateSearchs(this.props.searchs, [search]);
    }
    this.props.deleteSearch();
    this.onClose();
  }

  onClose() {
    this.props.history.push('/');
  }

  playTrack(trackId) {
    this.props.playTrack(trackId, this.props.token);
  }
  render() {
    return (
      this.props.token ? 
        <NewSearch
          playTrack={this.playTrack}
          editSearch={this.props.editSearch}
          typeSelected={this.state.typeSelected}
          onSave={this.onSave}
          onDiscard={this.onClose}
          onClose={this.onClose}
          setTypeSelected={this.setTypeSelected}
          onSearch={(value, type) => this.handleChange(value, type)}
          search={this.props.search}
          next={(nextUrl, search) => this.props.fetchNext(this.props.token, nextUrl, search)}
        /> :
        <Redirect to={{ pathname: '/login' }} />
    );
  }
}
export default Search;
