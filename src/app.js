import React from 'react';
import { hot } from 'react-hot-loader';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Track, Home, Login, CallBack, Search } from './containers';
import './app.css';
import { Layout } from './components';

const baseUrl = (document.getElementsByTagName('base')[0] || {}).href;

const App = () => (
  <BrowserRouter basename={baseUrl}>
    <Layout>
      <Route exact={true} path='/' component={ Home } />
      <Route path='/login' render={ props => (<Login {...props} />) } />
      <Route path='/callback' component={ CallBack } />
      <Route path='/search' component={Search} />
      <Route path='/track/:id' component={Track} />
    </Layout>
  </BrowserRouter>
);

export default hot(module)(App);
