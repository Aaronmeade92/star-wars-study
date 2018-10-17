import React, { Component, Fragment } from 'react';
import { connect, Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import store from './store/store.js';
import './App.css';

import Dashboard from './components/Dashboard';
import CharacterContent from './components/Character-Content.js';
import FilmContent from './components/Film-Content.js';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
        <Fragment>
          <Route exact path='/home' component={Dashboard}/>
          <Route exact path='/characters' component={CharacterContent}/>
          <Route exact path='/films' component={FilmContent}/>
        </Fragment>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
