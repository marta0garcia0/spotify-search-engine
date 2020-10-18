import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer, } from 'redux-persist';
import App from './app';
import reducers from './state/reducers';
import storage from 'redux-persist/lib/storage';
import { Loading } from './components';

// create the redux store
const persistConfig = {
  key: 'root',
  storage: storage,
};
const persistentReducer = persistReducer(persistConfig, reducers);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(persistentReducer, /* preloadedState, */ composeEnhancers(
  applyMiddleware(thunk)
));
// to persist the token session
const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<Loading />} persistor={persistor}>
		  <App/>
    </PersistGate>
	</Provider>,
document.querySelector('#app'));
