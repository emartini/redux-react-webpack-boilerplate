import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './components/HelloWorld';

const rootEl = document.getElementById('app');

ReactDOM.render(
  <AppContainer>
    <HelloWorld />
  </AppContainer>,
  rootEl
);

if (module.hot) {
  module.hot.accept('./components/HelloWorld', () => {
    ReactDOM.render(
      <AppContainer>
        <HelloWorld />
      </AppContainer>,
      rootEl
    );
  });
}
