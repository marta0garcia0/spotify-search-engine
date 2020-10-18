import React from 'react';
import './home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Redirect } from 'react-router-dom'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev) {
    // search
  }

  componentDidUpdate() {
    let hashParams = {};
    let e,
      r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    while ((e = r.exec(q))) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }

    if (!hashParams.access_token) {
    } else {
      this.props.setToken(hashParams.access_token);
    }
  }

  render() {
    return (
      this.props.token ? 
      <div className='home-container'>
        <div className='home-text'>
          <span>asdfasdfs</span>
        </div>
        <div className='home-search-button'>
          <input
            placeholder={'Search for an artist, song, track, ...'}
            onChange={this.handleChange}>
          </input>
          <div>
            <FontAwesomeIcon icon={faSearch} />
          </div>
        </div>
      </div>
      :
      <Redirect to={{ pathname: '/login' }} />
    );
  }
}
export default Home;
