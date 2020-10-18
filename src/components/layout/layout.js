import React from 'react';
import './layout.css';
import { Header } from '../../containers';

const Layout = (props) => {
	return (
	<div className='layout-container'>
		<Header />
		<div className='layout-body'>
			{props.children ? props.children : ''}
		</div>
	</div>
)};

export default Layout;
