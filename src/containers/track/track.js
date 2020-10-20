import React from 'react';

import './track.css';

class Track extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      image: 'https://is4-ssl.mzstatic.com/image/thumb/Music111/v4/23/63/c0/2363c065-8874-55bb-b8f0-9eda248761ca/UMG_cvrart_00602557393187_01_RGB72_1800x1800_17UMGIM01262.jpg/1200x630bb.jpg',
      actualSong: 'Amarrame',
      artist: 'Mon Laferte',
      songId: this.props.match.params.songId
    }
  }
  componentWillMount(){
    this.props.playTrack(this.props.match.params.id, this.props.token);
  }
  render() {
    return this.props.token ? 
      <div className='home-container'>
        <div className="Player">
          <div className="card" style={{ width: '45%'}}>
            <div className="card-content" style={{display: 'flex'}}>
              <div className="Player-card-leftBox">
              <img src={this.props.player.album.images && this.props.player.album.images.length > 2 ?
                this.props.player.album.images[1].url : ''} />
              </div>
              <div className="Player-card-rightBox">
                <audio controls>
                  <source src={ this.props.player.preview_url } type="audio/mp3"/>
                    Your browser does not support the audio element.
                </audio>
                <h4 className="Player-card-rightBox-song">Name: { this.props.player.name }</h4>
                <h6 className="Player-card-rightBox-song">Album: { this.props.player.album.name }</h6>
                <h6 className="Player-card-rightBox-song">Release date: { this.props.player.album.release_date }</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      :
      <Redirect to={{ pathname: '/login' }} />
  }
}
export default Track;
