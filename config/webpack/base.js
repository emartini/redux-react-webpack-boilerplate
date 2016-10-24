const path = require('path');

module.exports = {
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]_bundle.js',
    chunkFilename: '[name].chunk.js'
  },
  module: {
    loaders: [{
      test: /\.(js|jsx)?$/,
      loader: 'babel',
      exclude: /node_modules/,
      query: {
        cacheDirectory: true
      }
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
