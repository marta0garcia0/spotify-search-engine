import React from 'react';
import './searched.css';
import { Button } from '../../components';

const Searched = ({type, onDelete, onEdit, search}) => {
  const item = search[type] && search[type].items ? search[type].items[0] : null;
  const image = item ? (item.images ? item.images[0].url : item.album.images[0].url) : null;

  return (
    <div className='searched-container'>
      <span>Type: {type}</span>
      {search[type] && search[type].items ?
        <img 
          onClick={() => onEdit()}
          src={image} /> : ''}
        <Button
          onClick={onDelete}
          type={'plain'} text={'Delete'}>
        </Button>
    </div>
  );
}

export default Searched;
