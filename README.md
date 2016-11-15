redux-react-webpack-boilerplate
====

Includes:

- [Yarn](https://github.com/yarnpkg/yarn) as package manager
- ES2015 and JSX support throught [Babel](https://babeljs.io/).
- React 15.3
- Redux 3.6
- Routes: [React Router 3.0](https://github.com/ReactTraining/react-router)
- Webpack 2 beta (with [Tree shaking](https://blog.engineyard.com/2016/tree-shaking) support)
- [Webpack-dev-server 2](https://github.com/webpack/webpack-dev-server) supporting [React Hot Loader](https://github.com/gaearon/react-hot-loader)
- JS linter: ESLint, extending the [airbnb Javascript and React style guide]
(https://github.com/airbnb/javascript)
- PostCSS supporting [CSS Modules](https://github.com/css-modules/css-modules) and [cssnext](http://cssnext.io/)
- CSS linter: [stylelint](https://github.com/stylelint/stylelint)
- Testing environment:
  - Mocha as test framework and [Chai](http://chaijs.com/) as TDD assertion library
  - [Enzyme](https://github.com/airbnb/enzyme) extended by [Chai Enzyme](https://github.com/producthunt/chai-enzyme) to test React Components
  - [Karma](https://github.com/karma-runner/karma) as Test Runner, using Chrome by default

# Code conventions

## Components

Following the convention proposed by the [React Boilerplate](https://github.com/mxstbr/react-boilerplate), where
the directory structure is divided as [ presentational and containers components](http://redux.js.org/docs/basics/UsageWithReact.html#presentational-and-container-components),. There is a `components` directory which stores the presentational ones, whereas the `containers` the containers. If a container includes Redux actions or reducers, they should be stored into the `actions.js` and `reducers.js` respectively, `constants.js` could be added too, usually to export the action names. All components can define a stylesheet in a file called `styles.css` in order to maximize the isolation between components styles, those styles are CSS Modules.

### Testing

Tests should be kept in each component directory and are suffixed by `.test.js`.

```
app
├── components
│    └── HelloWorld
│       ├── tests
│       │   └── index.test.js
│       ├── index.js
│       └── styles.css
└── containers
    └── App
        ├── tests
        │   └── index.js
        ├── index.js
        ├── actions.js
        ├── reducers.js
        └── constants.js
```

#### Example

```jsx
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import HelloWorld from '../index';

describe('<HelloWorld />', () => {
  it('renders a <div> tag', () => {
    const renderedComponent = shallow(<HelloWorld />);
    expect(renderedComponent.type()).to.equal('div');
  });
});
```





## Routes

Following the convention introduced by the [react-boilerplate](https://github.com/mxstbr/react-boilerplate/blob/master/app/routes.js), routes should be declared in the `app/routes.js` file.


### Async routes load

Using Webpack code splitting feature is possible to load each route modules asynchronously. Using the `getComponent` React Route property together with ES6/Webpack `System.import` will enable the async load of each route as a webpack chunk.

For convenience routes are declared as objects and then passed as arguments to the `Router`.

```jsx
// Child routes:
const routes = [
  {
    path: '/',
    getComponent(nextState, cb) {
      System.import('./containers/Home')
        .then(loadModule(cb));
    },
    onChange: scrollTop
  }
];

const rootRoute = {
  component: App,
  childRoutes: routes
};

const Root = () => (
  <Router
    ...
    routes={rootRoute}
  />
);
```

## Commands

### Install dependencies

In order to use Yarn, you should follow the [official installation guide](https://yarnpkg.com/en/docs/install), then you can easily install all the dependencies.


```
yarn install
```


### Start Webpack development server

```
yarn start
```

It will start a development server accessible from `localhost:9010`.

### Check for syntax problems

**CSS and JS**:

```
yarn validate[:styles|:js]
```


**Webpack**, some webpack 2 new rules are marked as invalid, like `rules` and `modules`. It should be fixed in future versions.

```
yarn run validate:webpack:[dev|prod]
```

### Run Tests

```
yarn test[:watch]
```

### Production build

```
yarn build:prod
```

Output files will be placed in `./dist` and old files will be deleted after
complete the process.
