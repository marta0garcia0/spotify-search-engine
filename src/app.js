import React from 'react';
import { hot } from 'react-hot-loader';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Home, Login, CallBack } from './containers';
import './app.css';
import { Layout } from './components';

const baseUrl = (document.getElementsByTagName('base')[0] || {}).href;

const App = () => (
  <BrowserRouter basename={baseUrl}>
    <Layout>
      <Route exact={true} path='/' component={ Home } />
      <Route path='/login' render={ props => (<Login {...props} />) } />
      <Route path='/callback' component={ CallBack } />
      <Route path='/artists' component={Home} />
      <Route path='/artists/:id' component={Home} />
    </Layout>
  </BrowserRouter>
);

export default hot(module)(App);
