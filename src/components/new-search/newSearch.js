import React from 'react';
import './newSearch.css';
import { config } from '../../config';
import { Button, ArtistList, AlbumList, TrackList } from '../../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';

const NewSearch = ({typeSelected, onClose, onSave, next, onDiscard, setEdit, setTypeSelected, onSearch, search}) => {
  const type = search ? Object.keys(search[0])[0] : '';
  const list = () => {
    switch(type) {
      case 'artists': return <ArtistList artists={search.map(s => s[type].items)}
        hasNext={!!search[search.length - 1][type].next}
        next={() => next(search[search.length -1].artists.next, search)}/>;
      case 'albums': return <AlbumList albums={search.map(s => s[type].items)}
        hasNext={!!search[search.length - 1][type].next}
        next={() => next(search[search.length -1].albums.next, search)}/>;
      case 'tracks': return <TrackList tracks={search.map(s => s[type].items)}
        hasNext={!!search[search.length - 1][type].next}
        next={() => next(search[search.length -1].tracks.next, search)}/>;
      default: return <h1>No project match</h1>
    }
  };
  return (
    <div className='newsearch-container'>
      <div className='newsearch-container_header'>
        <FontAwesomeIcon icon={faTimes} onClick={() => {onClose(); setEdit(false)}}/>
      </div>
    <div className='home-text'>
      New search
    </div>
    <div className='newsearch-search_container'>
      <div className='newsearch-filter_container'>
        <div className='newsearch-filter-container__item'>
          <div className='newsearch-search-button'>
            <input
              placeholder={'Search for an artist, song, track, ...'}
              onKeyDown={(ev) => {if (ev.key === 'Enter') onSearch(ev.target.value, typeSelected)}}
              onChange={(ev) => onSearch(ev.target.value, typeSelected)}>
            </input>
            <div>
              <FontAwesomeIcon icon={faSearch} onClick={(ev) => {
                onSearch(ev.target.closest('div').previousElementSibling.value, typeSelected)
              }
              }/>
            </div>
          </div>
        </div>
        <div className='newsearch-filter-container__item'>
          <form>
            <select className='newsearch-type__selector' value={typeSelected} onChange={(ev) => setTypeSelected(ev.target.value)}>
              {config.spotifyTypes.map((type, i) =>
                <option key={i} value={type} >{type}</option>)}
            </select>
          </form>
        </div>
      </div>
              {search ? list() : ''}
    </div>
    <div className='newsearch-footer'>
        <Button
          onClick={() => {onSave(search); setEdit(false)}}
          type={'dark'} text={'Save'}>
        </Button>
        <Button
          onClick={() => {onDiscard(); setEdit(false)}}
          type={'light'} text={'Discard'}>
        </Button>
      </div>
  </div>
  );
}

export default NewSearch;
