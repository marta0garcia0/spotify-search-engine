import React, { createRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Redirect } from 'react-router-dom';
import './track.css';

class Track extends React.Component {
  constructor(props){
    super(props);
    this.onClose = this.onClose.bind(this);
    this.player = this.player.bind(this);
    this.audioRef = createRef()

  }

  onClose() {
    this.setState({player: null});
    this.props.history.push('/search');
  }

  player() {
    setTimeout(() => {
      this.audioRef.current.load();
    }, 0);
    return (
      <audio controls ref={this.audioRef} onClick={() => this.player()}>
        <source src={ this.props.player.preview_url } type='audio/mp3'/>
          Your browser does not support the audio element.
      </audio>
    );
  }

  render() {
    return this.props.token ? 
      (this.props.player ?
      <div className='newsearch-container'>
          <div className='newsearch-container_header'>
            <FontAwesomeIcon icon={faTimes} onClick={() => {this.onClose();}}/>
          </div>
          <div className='track-container'>
            <div className='track__image'>
              <img src={this.props.player.album.images && this.props.player.album.images.length > 1 ?
                  this.props.player.album.images[1].url : ''} />
            </div>
            <div className='track__info'>
              <h3>Name: { this.props.player.name }</h3>
              <h5>Album: { this.props.player.album.name }</h5>
              <h5>Release date: { this.props.player.album.release_date }</h5>
            </div>
          </div>
          <div className='track-container__player'>
            <div className='track__player' >
              {this.player()}
            </div>
        </div>
        </div>
        : '')
      :
      <Redirect to={{ pathname: '/login' }} />
  }
}
export default Track;
