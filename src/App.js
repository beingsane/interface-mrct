import 'dotenv/config';

import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import GlobalStyle from './styles/global';
import Header from './components/Header';
import Routes from './routes';

import history from './services/history';
import { store, persistor } from './store';

function App() {
  return (
    <Provider store={store} persistor={persistor}>
      <Router history={history}>
        <Header />
        <Routes />
        <GlobalStyle />
      </Router>
    </Provider>
  );
}

export default App;
