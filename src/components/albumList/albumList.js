import React from "react";
import "./albumList.css";

const albumList = ({
  albums,
}) => {
  const renderAlbums = () => {
    return albums.map((albumAr, i) => {
      return albumAr.map((album, i) => {
        return (
          <li key={i}>
            <img src={album.images && album.images.length > 2 ? album.images[1].url : ''} />
            <div>{album.name}</div>
            <div>Album type: {album.album_type}</div>
            <div>Artists: {album.artists.map(artist => <span>{artist.name}</span>)}</div>
            <div>Total tracks: {album.total_tracks}</div>
          </li>
        );
      });
    });
  };

  return (
    <ul className="album-list-container">{albums && renderAlbums()}</ul>
  );
};

export default albumList;
