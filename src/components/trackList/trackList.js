import React from "react";
import { Button } from "../../components";
import "./trackList.css";

const trackList = ({
  tracks,
  next
}) => {
  const renderTracks = () => {
    return tracks.map((trackAr, j) => {
      const newScroll = document.getElementsByClassName('track-list-container')[0] ?
        document.getElementsByClassName('track-list-container')[0].offsetHeight -
        document.getElementsByClassName('newsearch-search_container')[0].offsetHeight
        : 0;
      return trackAr.map((track, i) => {
        if (newScroll > 0) {
          document.getElementsByClassName('newsearch-search_container')[0].scroll(0, newScroll)
        }
        return (
          <li key={`track${i}${j}`}>
            <img src={track.album.images && track.album.images.length > 2 ? track.album.images[1].url : ''} />
            <div>{track.name}</div>
            <div>Album: {track.album.name}</div>
            <div>Artists: {track.artists.map((artist, i) => <span key={i}>{artist.name}</span>)}</div>
          </li>
        );
      });
    });
  };

  return (
    <div>
      <ul className="track-list-container">{tracks && renderTracks()}</ul>
      <div className='track-list__more'>
        <Button
          onClick={next}
          type={'dark'} text={'More...'}>
        </Button>
      </div>
    </div>
  );
};

export default trackList;
