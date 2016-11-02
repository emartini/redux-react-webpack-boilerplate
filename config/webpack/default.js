const path = require('path');

module.exports = {
  entry: {
    main: ['./app/main.js']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]_bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.css'],
    modules: [
      path.resolve('./app/stylesheets'),
      path.resolve('./node_modules')
    ]
  }
};
