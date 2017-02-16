const path = require('path');
const webpack = require('webpack');

const webpack_config = {
  context: path.resolve(__dirname, './client'),
  entry : {
    app: '/app.js'},
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, './dist'),
  },
  module: {
    loaders: [{
      exclude: '/node_modules',
      loader: 'babel'
    }]
  }
}

module.exports= webpack_config;
