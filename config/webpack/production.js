const config = require('./base');
const path = require('path');

const imageWebpackLoader = JSON.stringify({
  mozjpeg: {
    quality: 65,
    progressive: true
  },
  pngquant: {
    quality: '65-90',
    speed: 4
  },
  svgo: {
    plugins: [
      { removeViewBox: false }
    ]
  }
});


const prodConfig = {
  entry: {
    main: ['./app/main.js']
  },
  module: {
    rules: [
      {
        test: /.*\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file?name=[path][name]-[hash].[ext]',
          `image-webpack?${imageWebpackLoader}`
        ],
        include: path.join(__dirname, '..', '..', 'app', 'images')
      }
    ]
  }
};

module.exports = Object.assign(config, prodConfig);
