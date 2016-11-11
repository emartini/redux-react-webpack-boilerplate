const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

// Force scroll top page top after route change.
const scrollTop = () => {
  window.scrollTo(0, 0);
};

// Using the `getComponent` together with `Sytem.import` will enable the async
// load of each route as webpack chunks.

const routes = [
  {
    path: '/',
    getComponent(nextState, cb) {
      System.import('./containers/Home')
        .then(loadModule(cb));
    },
    onChange: scrollTop
  },
  {
    path: '/images(/:type)',
    getComponent(nextState, cb) {
      System.import('./containers/Images')
        .then(loadModule(cb));
    },
    onChange: scrollTop
  },
  {
    path: '*',
    getComponent(nextState, cb) {
      System.import('./containers/NotFound')
        .then(loadModule(cb));
    },
    onChange: scrollTop
  }
];

export default routes;
