import React from 'react';
import './header.css';
import { useHistory } from 'react-router-dom';

const Header = ({user}) => {
	const history = useHistory();
	return (
		<div className='header-container'>
			<h1 onClick={() => history.push(`/`)}>Spotify Search Engine</h1>
			{user ?
			<div className='header-user'>
				<div>{user.display_name}</div>
				{user.images && user.images.length > 0 ?
				<div className="header-user__image">
					<img alt="user" src={user.images[0].url} />
				</div>
					 : ''}
			</div>
			: ''
			}
		</div>
	)
	};

export default Header;
