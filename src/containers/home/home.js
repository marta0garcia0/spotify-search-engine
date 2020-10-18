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
