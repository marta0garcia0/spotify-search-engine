import React from 'react';
import './home.css';
import { Redirect } from 'react-router-dom';
import { Browser } from '../../components';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.changeTimeout = 0;
  }

  handleChange(ev, type) {
    clearTimeout(this.changeTimeout);
    const value = ev.target.value;
    // to avoid send several requests
    this.changeTimeout = setTimeout(() => {
      if (value.length > 4) {
        console.log(value);
        this.props.fetchSearch(this.props.token, value, type)
      }
    }, 400)
    // search
  }

  render() {
    return (
      this.props.token ? 
      <div className='home-container'>
        {
          this.props.searchs && this.props.searchs.map((search, i) =>
            <Browser
              key={i}
              search={search}
              onSearch={(ev) => this.handleChange(ev, search)}
            />
          )
        }
        <Browser
          key={'init'}
          search={this.props.search}
          onSearch={(ev, type) => this.handleChange(ev, type)}
          onSave={(search) => {
            this.props.updateSearchs(this.props.searchs, search);
            this.props.deleteSearch()
          }}
        />
      </div>
      :
      <Redirect to={{ pathname: '/login' }} />
    );
  }
}
export default Home;
