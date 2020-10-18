import React from 'react';
import ReactLoading from 'react-loading';
import './loading.css';

const Loading = () => (
	<div className='loading-container'>
		<ReactLoading type={"bars"} color={"white"} />
	</div>
);

export default Loading;
