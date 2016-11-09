const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const context = path.join(__dirname, '..', '..');

const entry = {
  main: ['./app/main.js']
};

module.exports = {
  entry,
  options: {
    images: {
      rule: /.*\.(gif|png|jpe?g|svg)$/i,
      path: path.join(__dirname, '..', '..', 'app', 'images')
    }
  },
  loader: {
    css: {
      loader: 'css',
      options: {
        module: true,
        importLoaders: 1,
        localIdentName: '[name]__[local]___[hash:base64:5]'
      }
    },
    file: {
      loader: 'file',
      options: {
        name: '[path][name]-[hash].[ext]'
      }
    },
    babel: {
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/,
      query: { cacheDirectory: true }
    }
  },
  webpack: {
    context,
    output: {
      path: './dist',
      filename: 'bundle.[name].[chunkhash].js'
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './app/index.html'
      })
    ],
    resolve: {
      extensions: ['.js', '.css'],
      modules: [
        path.resolve('./app/stylesheets'),
        path.resolve('./node_modules')
      ]
    }
  }
};
