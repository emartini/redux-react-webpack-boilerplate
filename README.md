redux-react-webpack-boilerplate
====

Includes:

- [Yarn](https://github.com/yarnpkg/yarn) as package manager
- ES2015 and JSX support throught [Babel](https://babeljs.io/).
- React 15.3
- Redux 3.6
- Webpack 2 beta (with [Tree shaking](https://blog.engineyard.com/2016/tree-shaking) support)
- [Webpack-dev-server 2](https://github.com/webpack/webpack-dev-server) supporting [React Hot Loader](https://github.com/gaearon/react-hot-loader)
- JS linter: ESLint, extending the [airbnb Javascript and React style guide]
(https://github.com/airbnb/javascript)
- PostCSS supporting [CSS Modules](https://github.com/css-modules/css-modules) and [cssnext](http://cssnext.io/)
- CSS linter: [stylelint](https://github.com/stylelint/stylelint)

# Code conventions

## Components

Following the convention proposed by the [React Boilerplate](https://github.com/mxstbr/react-boilerplate), where
the directory structure is divided as [ presentational and containers components](http://redux.js.org/docs/basics/UsageWithReact.html#presentational-and-container-components),. There is a `components` directory which stores the presentational ones, whereas the `containers` the containers. If a container includes Redux actions or reducers, they should be stored into the `actions.js` and `reducers.js` respectively, `constants.js` could be added too, usually to export the action names. All components can define a stylesheet in a file called `styles.css` in order to maximize the isolation between components styles, those styles are CSS Modules.

### Testing

Tests should be kept in each component directory.

```
app
├── components
│    └── HelloWorld
│       ├── tests
│       │   └── index.js
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

### Check for problems

**CSS**:

```
yarn run validate:styles
```

**JS**:

```
yarn run validate:js
```


**Webpack**, some webpack 2 new rules are marked as invalid, like `rules` and `modules`. It should be fixed in future versions.

```
yarn run validate:webpack:[dev|prod]
```

### Production build

```
yarn run build:prod
```

Output files will be placed in `./dist` and old files will be deleted after
complete the process.
