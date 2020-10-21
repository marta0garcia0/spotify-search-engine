import React, { useState } from 'react';
import { Button } from '../../components';
import './albumList.css';

const albumList = ({
  albums,
  hasNext,
  next
}) => {
  const renderAlbums = (scroll) => {
    setTimeout( () => {
      document.getElementsByClassName('newsearch-search_container')[0].scroll(0, scroll)
    }, 0);
    return albums.map((albumAr, j) => {
      return albumAr.map((album, i) => {
        if (newScroll > 0) {
          document.getElementsByClassName('newsearch-search_container')[0].scroll(0, newScroll)
        }
        return (
          <li key={`${i}${j}`}>
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
  const newScroll = () => document.getElementsByClassName('newsearch-search_container')[0].scrollTop;
  const [scroll, setScroll] = useState(0);
  return (
    <div>
      <ul className='album-list-container'>{albums && renderAlbums(scroll)}</ul>
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

export default albumList;
