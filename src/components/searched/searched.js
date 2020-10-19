import React from 'react';
import './searched.css';
import { config } from '../../config';


const Searched = ({type, search}) => {
  return (
    <div className='searched-container'>
      <span>Type: {type}</span>
      {search[type].items ? <img src={search[type].items[0].images[0].url} /> : ''}
    </div>
  );
}

export default Searched;
