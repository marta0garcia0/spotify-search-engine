import React from 'react';
import { Button } from '../../components';
import './login.css';
import { config 	} from '../../config';

class Login extends React.Component {
  constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
  }

	handleClick() {
		window.location.assign(`
			${config.spotifyUrl}authorize?client_id=
			${config.clientId}&scope=${encodeURI(config.scope)}
			&response_type=${config.responseType}
			&redirect_uri=${config.redirectUri}
		`);
	}
  render() {
    return (
      <div className='login-container'>
				<div>
					<span>Login with spotify to start:</span>
				</div>
				<div>
  	      <Button
						onClick={this.handleClick}
						type={'dark'} text={'Login'}>
					</Button>
				</div>
      </div>
    );
  }
}
export default Login;
