const config = require('./base');

const prodConfig = {
  entry: {
    main: ['./app/main.js']
  }
};

module.exports = Object.assign(config, prodConfig);
