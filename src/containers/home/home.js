import React from 'react';
import './home.css';
import { Redirect } from 'react-router-dom';
import { Browser } from '../../components';
import { Button } from '../../components';

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
      <div className='page-container'>
        <div className='home-container__header'>
        <div>
          <Button
            onClick={() => this.props.history.push('/search')}
            type={'plain'} text={'New search'}>
          </Button>
          </div>
          {this.props.searchs && this.props.searchs.length > 0 ? 'Recent searchs'
            : 'Nothing here yet... try to do a new search'}
        </div> 
        <div className='home-content'>
          {
            this.props.searchs && this.props.searchs.map((search, i) =>
              <Browser
                key={i}
                setEditSearch={() => this.props.editSearch(search, i)}
                onDelete={() => this.props.deleteSearchs(this.props.searchs, i)}
                search={this.props.search ? this.props.search : search}
                onSearch={(value) => this.handleChange(value, search)}
                onClose={this.props.deleteSearch}
                onDiscard={() => this.props.deleteSearchs(this.props.searchs, i)}
                onSave={() => {
                  this.props.deleteSearch();
                }}
                next={(nextUrl, search) => this.props.fetchNext(this.props.token, nextUrl, search)}
              />
            )
          }
        </div>
      </div>
      :
      <Redirect to={{ pathname: '/login' }} />
    );
  }
}
export default Home;
