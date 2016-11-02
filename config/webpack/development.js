const HOST = 'localhost';
const PORT = 9010;
const path = require('path');
const webpack = require('webpack');
const defaultConfig = require('./default');

const options = {
  file: {
    name: '[path][name]-[hash].[ext]'
  },
  css: {
    module: true,
    importLoaders: 1,
    localIdentName: '[name]__[local]___[hash:base64:5]'
  }
};

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
  module: {
    rules: [
      {
        test: /.*\.(gif|png|jpe?g|svg)$/i,
        use: [
          { loader: 'file', options: options.file }
        ],
        include: path.join(__dirname, '..', '..', 'app', 'images'),
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style',
          { loader: 'css', options: options.css },
          'postcss'
        ]
      }
    ],
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

const config = Object.assign({}, defaultConfig, devConfig);
config.module.rules = defaultConfig.module.rules.concat(devConfig.module.rules);

module.exports = config;
