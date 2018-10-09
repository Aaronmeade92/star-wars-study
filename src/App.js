import React, { Component, Fragment } from 'react';
import { connect, Provider } from 'react-redux';
import store from './store/store.js';
import './App.css';
import Dashboard from './components/Dashboard';
import Content from './components/Content';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Fragment>
      <div className="App">
        <Dashboard />
      </div>
      <Content />
      </Fragment>
      </Provider>
    );
  }
}

export default App;
