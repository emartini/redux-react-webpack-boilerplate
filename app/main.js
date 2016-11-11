import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './containers/Root';

const rootEl = document.getElementById('app');

ReactDOM.render(
  <AppContainer>
    <Root />
  </AppContainer>,
  rootEl
);

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    ReactDOM.render(
      <AppContainer>
        <Root />
      </AppContainer>,
      rootEl
    );
  });
}
