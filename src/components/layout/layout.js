import React from 'react';
import './layout.css';

const Layout = (props) => {
	return (
	<div className='layout-container'>
		<h1>header</h1>
		<div className='layout-body'>
			{props.children ? props.children : ''}
		</div>
	</div>
)};

export default Layout;
