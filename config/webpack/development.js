const HOST = 'localhost';
const PORT = 9010;
const webpack = require('webpack');
const defaults = require('./defaults');

const loader = defaults.loader;

const devConfig = {
  devtool: 'cheap-eval-source-map',
  entry: {
    main: [
      `webpack-dev-server/client?http://${HOST}:${PORT}`,
      'webpack/hot/only-dev-server',
      'react-hot-loader/patch',
      defaults.entry.main
    ]
  },
  output: {
    filename: 'bundle.[name].js'
  },
  module: {
    rules: [
      loader.babel,
      {
        test: defaults.options.images.rule,
        use: [loader.file],
        include: defaults.options.images.path,
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style', loader.css, 'postcss']
      }
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    port: PORT,
    hot: true,
    inline: true,
    contentBase: './app',
    historyApiFallback: true
  }
};

const webpackConfig = defaults.webpack;
const config = Object.assign({}, webpackConfig, devConfig);
config.plugins = webpackConfig.plugins.concat(devConfig.plugins);

module.exports = config;
