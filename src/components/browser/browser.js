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

const Browser = ({onSearch, onSave, onClose, onDelete, onDiscard, next, search}) => {
  const [hovered, eventHandlers] = useHover();
  const [edit, setEdit] = useState(false);
  const [typeSelected, setTypeSelected] = useState(config.spotifyTypes[0]);
  return (
    !edit ? (
      search ?
        <div className={`browser-container`} onClick={() => setEdit(true)}>
          <Searched type={Object.keys(search[0])[0]} onDelete={onDelete} search={search}/>
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
    <div>
      <NewSearch
        typeSelected={typeSelected}
        onSave={onSave}
        onDiscard={onDiscard}
        onClose={() => {setEdit(false); onClose()}}
        setEdit={setEdit}
        setTypeSelected={setTypeSelected}
        onSearch={onSearch}
        search={search}
        next={next}
      />
    </div> 
  );
}

export default Browser;
