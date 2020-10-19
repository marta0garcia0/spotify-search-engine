import React from "react";
import "./artistList.css";

const ArtistList = ({
  artists,
}) => {
  const renderArtists = () => {
    return artists.map((artistAr, i) => {
      return artistAr.map((artist, i) => {
        return (
          <li key={i}>
            <img src={artist.images && artist.images.length > 2 ? artist.images[1].url : ''} />
            <div>{artist.name}</div>
            <div>Followers: {artist.followers.total}</div>
            <div>Genres: {artist.genres.map((genre, k) => <span key={`genre${k}`} className='tags'>{genre}</span>)}</div>
            <div>Popularity: {artist.popularity}</div>
          </li>
        );
      });
    });
  };

  return (
    <ul className="artist-list-container">{artists && renderArtists()}</ul>
  );
};

export default ArtistList;
