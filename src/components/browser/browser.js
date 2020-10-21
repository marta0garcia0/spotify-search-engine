import React, { useState, useMemo } from 'react';
import './browser.css';
import { Redirect } from 'react-router-dom';
import { Searched } from '../../components';

const Browser = ({setEditSearch, onDelete, search}) => {
  const [edit, setEdit] = useState(false);
  return (
    !edit ? (
        <div className={`browser-container`}>
          <Searched type={Object.keys(search)} onEdit={() => {setEditSearch(); setEdit(true);}} onDelete={onDelete} search={search}/>
        </div>
    )
    :
    <div>
      <Redirect to={{ pathname: '/search' }} />
    </div> 
  );
}

export default Browser;
