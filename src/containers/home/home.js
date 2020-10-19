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

  handleChange(value, type) {
    clearTimeout(this.changeTimeout);
    // to avoid send several requests
    this.changeTimeout = setTimeout(() => {
      if (value.length > 3) {
        this.props.fetchSearch(this.props.token, value, type)
      }
    }, 400)
  }

  render() {
    return (
      this.props.token ? 
      <div className='home-container'>
        {
          this.props.searchs && this.props.searchs.map((search, i) =>
            <Browser
              key={i}
              onDelete={() => this.props.deleteSearchs(this.props.searchs, i)}
              search={search}
              onSearch={(value) => this.handleChange(value, search)}
              onDiscard={() => this.props.deleteSearchs(this.props.searchs, i)}
              onSave={() => {
                this.props.deleteSearch();
              }}
              next={(nextUrl, search) => this.props.fetchNext(this.props.token, nextUrl, search)}
            />
          )
        }
        <Browser
          key={'init'}
          search={this.props.search}
          onSearch={(value, type) => this.handleChange(value, type)}
          onDiscard={this.props.deleteSearch}
          onClose={() => this.props.deleteSearch()}
          onSave={(search) => {
            this.props.updateSearchs(this.props.searchs, search);
            this.props.deleteSearch();
          }}
          next={(nextUrl, search) => this.props.fetchNext(this.props.token, nextUrl, search)}
        />
      </div>
      :
      <Redirect to={{ pathname: '/login' }} />
    );
  }
}
export default Home;
