import React from 'react';
import { Redirect } from 'react-router-dom'

class CallBack extends React.Component {
  constructor(props) {
    super(props);
    let hashParams = {};
    let e,
      r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    while ((e = r.exec(q))) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }

    if (hashParams.access_token) {
      props.setToken(hashParams.access_token);
      props.fetchUser(hashParams.access_token);
    }

	}

  render() {
    return (
      this.props.token ? 
				<Redirect to={{ pathname: '/' }} /> :	''
    );
  }
}
export default CallBack;
