import React, { useState } from 'react';
import { Button } from "../../components";
import { useHistory } from 'react-router-dom';
import "./trackList.css";

const trackList = ({
  tracks,
  hasNext,
  next
}) => {
  const renderTracks = (scroll) => {
    const history = useHistory();
    setTimeout( () => {
      document.getElementsByClassName('newsearch-search_container')[0].scroll(0, scroll)
    }, 0);
    return tracks.map((trackAr, j) => {
      return trackAr.map((track, i) => {
        return (
          // MARTAAAA
          <li key={`track${i}${j}`} className='track__play'
            onClick={() => 
              history.push(`/track/${track.id}`)
              }
            >
            <img src={track.album.images && track.album.images.length > 2 ? track.album.images[1].url : ''} />
            <div>{track.name}</div>
            <div>Album: {track.album.name}</div>
            <div>Artists: {track.artists.map((artist, i) => <span key={i}>{artist.name}</span>)}</div>
          </li>
        );
      });
    });
  };
  const newScroll = () => document.getElementsByClassName('newsearch-search_container')[0].scrollTop;
  const [scroll, setScroll] = useState(0);
  return (
    <div>
      <ul className="track-list-container">{tracks && renderTracks(scroll)}</ul>
      {hasNext ?
        <div className='track-list__more'>
        <Button
          onClick={() => {setScroll(newScroll()); next()}}
          type={'dark'} text={'More...'}>
        </Button>
      </div>:''}
    </div>
  );
};

export default trackList;
