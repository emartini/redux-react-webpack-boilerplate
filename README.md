# redux-react-webpack-boilerplate



- ES2015 and JSX support, using babel loaders
- React 15.3
- Redux 3.6
- Webpack 2 beta (with [Tree shaking](https://blog.engineyard.com/2016/tree-shaking) support)
- [Webpack-dev-server 2](https://github.com/webpack/webpack-dev-server) supporting [React Hot Loader](https://github.com/gaearon/react-hot-loader)
- Modified ESLint rules, extending the [airbnb Javascript and React style guide](https://github.com/airbnb/javascript)

## Code conventions
Following the convention proposed by the [React Boilerplate](https://github.com/mxstbr/react-boilerplate), where
the directory structure is divided as [ presentational and containers components](http://redux.js.org/docs/basics/UsageWithReact.html#presentational-and-container-components),. There is a `components` directory which stores the presentational ones, whereas the `containers` the containers. If a container includes Redux actions or reducers, they should be stored into the `actions.js` and `reducers.js` respectively, `constants.js` could be added too, usually to export the action names.

Tests should be kept in each component directory.

```
app
├── components
│    └── HelloWorld
│       ├── tests
│       │   └── index.js
│       ├── index.js
│       └── styles.scss
└── containers
    └── Greetings
        ├── tests
        │   └── index.js
        ├── index.js
        ├── actions.js
        ├── reducers.js
        └── constants.js
```


## NPM commands

### Start Webpack development server

```
npm start
```

It will start a development server accesible from `localhost:9010`.
