import React, { useState } from 'react';
import { Button } from '../../components';
import './artistList.css';

const ArtistList = ({
  artists,
  hasNext,
  next
}) => {
  const renderArtists = (scroll) => {
    return artists.map((artistAr, j) => {
      setTimeout( () => {
        document.getElementsByClassName('newsearch-search_container')[0].scroll(0, scroll)
      }, 0);
      return artistAr.map((artist, i) => {
        if (newScroll > 0) {
          document.getElementsByClassName('newsearch-search_container')[0].scroll(0, newScroll)
        }
        return (
          <li key={`${i}${j}`}>
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
  const newScroll = () => document.getElementsByClassName('newsearch-search_container')[0].scrollTop;
  const [scroll, setScroll] = useState(0);
  return (
    <div>
      <ul className='artist-list-container'>{artists && renderArtists(scroll)}</ul>
      <div className='track-list__more'>
      {hasNext ?
        <div className='track-list__more'>
        <Button
          onClick={() => {setScroll(newScroll()); next()}}
          type={'dark'} text={'More...'}>
        </Button>
      </div>:''}
    </div>
  </div>
  );
};

export default ArtistList;
