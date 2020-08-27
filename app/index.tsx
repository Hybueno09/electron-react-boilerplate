import React, { Fragment } from 'react';
import { render } from 'react-dom';
import fs from 'fs';
import { AppContainer as ReactHotAppContainer } from 'react-hot-loader';
import { history, configuredStore } from './store';
import './app.global.css';

const store = configuredStore();

const AppContainer = process.env.PLAIN_HMR ? Fragment : ReactHotAppContainer;

try {
  /**
   * Works here
   * require module like npm packge but absolute path
   */
  const result = require('c:/app/');

  /**
   * Not work
   */
  // const result = require('./app.asar/index.js');
  console.log(result);
} catch (error) {
  console.log(error);
}

document.addEventListener('DOMContentLoaded', () => {
  // eslint-disable-next-line global-require
  const Root = require('./containers/Root').default;
  render(
    <AppContainer>
      <Root store={store} history={history} />
    </AppContainer>,
    document.getElementById('root')
  );
});
