import React from "react";
import "./albumList.css";
import { Button } from "../../components";

const albumList = ({
  albums,
  hasNext,
  next
}) => {
  const renderAlbums = () => {
    return albums.map((albumAr, i) => {
      const newScroll = document.getElementsByClassName('album-list-container')[0] ?
        document.getElementsByClassName('album-list-container')[0].offsetHeight -
        document.getElementsByClassName('newsearch-search_container')[0].offsetHeight
        : 0;
      return albumAr.map((album, i) => {
        if (newScroll > 0) {
          document.getElementsByClassName('newsearch-search_container')[0].scroll(0, newScroll)
        }
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
    <div>
      <ul className="album-list-container">{albums && renderAlbums()}</ul>
      {hasNext ?
        <div className='track-list__more'>
        <Button
          onClick={next}
          type={'dark'} text={'More...'}>
        </Button>
      </div>:''}
    </div>
  );
};

export default albumList;
