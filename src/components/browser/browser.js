import React, { useState, useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './browser.css';
import { config } from '../../config';
import { Button } from '../../components';

const useHover = () => {
  const [hovered, setHovered] = useState();

  const eventHandlers = useMemo(() => ({
    onMouseOver() { setHovered(true); },
    onMouseOut() { setHovered(false); },
  }), []);

  return [hovered, eventHandlers];
}

const Browser = ({onSearch, onSave, search}) => {
  const [hovered, eventHandlers] = useHover();
  const [edit, setEdit] = useState(false);
  const [typeSelected, setTypeSelected] = useState(config.spotifyTypes[0]);
  const type = search ? Object.keys(search)[0] : '';
  return (
    !edit ? (
      search ?
      <div>
        <span>Type: {type}</span>
        <img src={search[type].items[0].images[0].url} />
      </div>
      :
      <div className={`browser-container browser-container__${hovered ? 'hover': ''}`}
        {...eventHandlers}>
        Add browser
        <div className='browser-add' onClick={() => setEdit(true)}>+
        </div>
      </div> 
    )
    :
      <div>
        <div className='home-text'>
          New search
          <div>
            <Button
              onClick={() => {onSave(search); setEdit(false)}}
              type={'dark'} text={'Save'}>
            </Button>
            <Button
              onClick={() => setEdit(false)}
              type={'light'} text={'Discard'}>
            </Button>
          </div>
        </div>
        <form>
          <select value={typeSelected} onChange={(ev) => setTypeSelected(ev.target.value)}>
            {config.spotifyTypes.map((type, i) =>
              <option key={i} value={type} >{type}</option>)}
          </select>
        </form>
        <div className='home-search_container'>
          <div className='home-search-button'>
            <input
              placeholder={'Search for an artist, song, track, ...'}
              onChange={(ev) => onSearch(ev, typeSelected)}>
            </input>
            <div>
              <FontAwesomeIcon icon={faSearch} />
            </div>
          </div>
        </div>
      </div>
  );
}

export default Browser;
