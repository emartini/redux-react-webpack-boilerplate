const path = require('path');

module.exports = {
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]_bundle.js',
    chunkFilename: '[name].chunk.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css',
            options: {
              module: true,
              importLoaders: 1,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          },
          {
            loader: 'postcss'
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
    modules: [
      path.resolve('./app/stylesheets'),
      'node_modules'
    ]
  }
};
