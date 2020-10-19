import React from "react";
import "./trackList.css";

const trackList = ({
  tracks,
}) => {
  const renderTracks = () => {
    return tracks.map((track, i) => {
      return (
        <li key={`track${i}`}>
          <img src={track.album.images && track.album.images.length > 2 ? track.album.images[1].url : ''} />
          <div>{track.name}</div>
          <div>Track type: {track.track_type}</div>
          <div>Album: {track.album.name}</div>
          <div>Artists: {track.artists.map(artist => <span>{artist.name}</span>)}</div>
        </li>
      );
    });
  };

  return (
    <ul className="track-list-container">{tracks && renderTracks()}</ul>
  );
};

export default trackList;
