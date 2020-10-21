import React, { useState } from 'react';
import './newSearch.css';
import { config } from '../../config';
import { Button, ArtistList, AlbumList, TrackList } from '../../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';

const NewSearch = ({editSearch, playTrack, typeSelected, onClose, onSave, next, onDiscard, setTypeSelected, onSearch, search}) => {
  const arSearch = search && search.length > 0 ? search : [search];
  const type = search && arSearch ? Object.keys(arSearch[0])[0] : '';
  const list = () => {
    switch(type) {
      case 'artists': return <ArtistList artists={arSearch.map(s => s[type].items)}
        hasNext={!!arSearch[arSearch.length - 1][type].next}
        next={() => next(arSearch[arSearch.length -1].artists.next, arSearch)}/>;
      case 'albums': return <AlbumList albums={arSearch.map(s => s[type].items)}
        hasNext={!!arSearch[arSearch.length - 1][type].next}
        next={() => next(arSearch[arSearch.length -1].albums.next, arSearch)}/>;
      case 'tracks': return <TrackList playTrack={playTrack} tracks={arSearch.map(s => s[type].items)}
        hasNext={!!arSearch[arSearch.length - 1][type].next}
        next={() => next(arSearch[arSearch.length -1].tracks.next, arSearch)}/>;
      default: return <h1>No project match</h1>
    }
  };
  const [searchText, setSearchText] = useState('');
  return (
    <div className='newsearch-container'>
      <div className='newsearch-container_header'>
        <FontAwesomeIcon icon={faTimes} onClick={() => {onClose();}}/>
      </div>
      <div className='home-text'>
        {editSearch ? 'Search' : 'New search'}
      </div>
      <div className='newsearch-search_container'>
        {editSearch ? '' :
        <div className='newsearch-filter_container'>
          <div className='newsearch-filter-container__item'>
            <div className='newsearch-search-button'>
              <input
                placeholder={'Search for an artist, song, track, ...'}
                onKeyDown={(ev) => {if (ev.key === 'Enter') {
                  onSearch(ev.target.value, typeSelected);setSearchText(ev.target.value)
                }}}
                onChange={(ev) => {onSearch(ev.target.value, typeSelected); setSearchText(ev.target.value)}}>
              </input>
              <div>
                <FontAwesomeIcon icon={faSearch} onClick={(ev) => {
                  onSearch(ev.target.closest('div').previousElementSibling.value, typeSelected);
                  setSearchText(ev.target.closest('div').previousElementSibling.value)
                }
                }/>
              </div>
            </div>
          </div>
          <div className='newsearch-filter-container__item'>
            <form>
              <select className='newsearch-type__selector' value={typeSelected} onChange={(ev) => {
                setTypeSelected(ev.target.value); onSearch(searchText, ev.target.value);}}>
                {config.spotifyTypes.map((type, i) =>
                  <option key={i} value={type} >{type}</option>)}
              </select>
            </form>
          </div>
        </div>
        }
        {search ? list() : ''}
      </div>
    {editSearch ? '' :
      <div className='newsearch-footer'>
          {search ?
          <Button
            onClick={() => {onSave(search)}}
            type={'dark'} text={'Save'}>
          </Button> : '' }
          <Button
            onClick={() => {onDiscard()}}
            type={'light'} text={'Discard'}>
          </Button>
        </div>
      }
  </div>
  );
}

export default NewSearch;
