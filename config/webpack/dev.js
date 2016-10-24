const HOST = 'localhost';
const PORT = 9010;

const webpack = require('webpack');
const config = require('./base');

const devConfig = {
  devtool: 'cheap-eval-source-map',
  entry: {
    main: [
      `webpack-dev-server/client?http://${HOST}:${PORT}`,
      'webpack/hot/only-dev-server',
      'react-hot-loader/patch',
      './app/main.js'
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

module.exports = Object.assign(config, devConfig);
