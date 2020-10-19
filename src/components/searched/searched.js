import React from 'react';
import './searched.css';
import { config } from '../../config';
import { Button } from '../../components';

const Searched = ({type, onDelete, search}) => {
  const item = search[type].items[0];
  const image = item && item.images ? item.images[0].url : item.album.images[0].url;

  return (
    <div className='searched-container'>
      <span>Type: {type}</span>
      {search[type].items ?
        <img src={image} /> : ''}
      <Button
          onClick={onDelete}
          type={'plain'} text={'Delete'}>
        </Button>
    </div>
  );
}

export default Searched;
