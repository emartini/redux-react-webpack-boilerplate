import React from 'react';
import { Router, browserHistory } from 'react-router';

import '!style!css!normalize.css';
import App from '../App';

import routes from '../../routes';

const rootRoute = {
  component: App,
  childRoutes: routes
};

const Root = () => (
  <Router
    history={browserHistory}
    routes={rootRoute}
  />
);

export default Root;
