import React, { useState, useMemo } from 'react';
import './browser.css';
import { config } from '../../config';
import { NewSearch, Searched } from '../../components';

const useHover = () => {
  const [hovered, setHovered] = useState();

  const eventHandlers = useMemo(() => ({
    onMouseOver() { setHovered(true); },
    onMouseOut() { setHovered(false); },
  }), []);

  return [hovered, eventHandlers];
}

const Browser = ({onSearch, onSave, onDiscard, search}) => {
  const [hovered, eventHandlers] = useHover();
  const [edit, setEdit] = useState(false);
  const [typeSelected, setTypeSelected] = useState(config.spotifyTypes[0]);
  return (
    !edit ? (
      search ?
        <div className={`browser-container`} >
          <Searched type={Object.keys(search)[0]} search={search}/>
        </div>
      :
      <div className={`browser-container browser-container__${hovered ? 'hover': ''}`}
        {...eventHandlers}>
        New search:
        <div className='browser-add' onClick={() => setEdit(true)}>+
        </div>
      </div> 
    )
    :
    <div className={``} >
      <NewSearch
        typeSelected={typeSelected}
        onSave={onSave}
        onDiscard={onDiscard}
        setEdit={setEdit}
        setTypeSelected={setTypeSelected}
        onSearch={onSearch}
        search={search}
      />
    </div> 
  );
}

export default Browser;
