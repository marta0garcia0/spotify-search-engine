import React from "react";
import { Button } from "../../components";
import "./artistList.css";

const ArtistList = ({
  artists,
  hasNext,
  next
}) => {
  const renderArtists = () => {
    return artists.map((artistAr, i) => {
      const newScroll = document.getElementsByClassName('artist-list-container')[0] ?
        document.getElementsByClassName('artist-list-container')[0].offsetHeight -
        document.getElementsByClassName('newsearch-search_container')[0].offsetHeight
        : 0;
      return artistAr.map((artist, i) => {
        if (newScroll > 0) {
          document.getElementsByClassName('newsearch-search_container')[0].scroll(0, newScroll)
        }
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
    <div>
      <ul className="artist-list-container">{artists && renderArtists()}</ul>
      <div className='track-list__more'>
      {hasNext ?
        <div className='track-list__more'>
        <Button
          onClick={next}
          type={'dark'} text={'More...'}>
        </Button>
      </div>:''}
    </div>
  </div>
  );
};

export default ArtistList;
