const path = require('path');
const webpack = require('webpack');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');

const defaults = require('./defaults');

const loader = defaults.loader;

loader.image = {
  loader: 'image-webpack',
  query: {
    mozjpeg: { quality: 85, progressive: true },
    pngquant: { quality: '65-90', speed: 0 },
    svgo: { plugins: [{ removeViewBox: false }] },
    gifsicle: { interlaced: true }
  }
};

const prodConfig = {
  entry: {
    main: defaults.entry.main
  },
  output: {
    path: path.join(defaults.webpack.context, './dist'),
    filename: 'bundle.[name].[chunkhash].js'
  },
  module: {
    rules: [
      loader.babel,
      {
        test: defaults.options.images.rule,
        use: [loader.file, loader.image],
        include: defaults.options.images.path
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style', loader.css, 'postcss']
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'commons',
      filename: 'bundle.[name].[chunkhash].js'
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
      quiet: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      output: { comments: false },
      sourceMap: false
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.ProvidePlugin({
      Promise: 'es6-promise'
    }),
    new WebpackCleanupPlugin()
  ]
};

const config = Object.assign({}, defaults.webpack, prodConfig);
config.plugins = defaults.webpack.plugins.concat(prodConfig.plugins);

module.exports = config;
