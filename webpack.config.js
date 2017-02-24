const path = require('path');
const webpack = require('webpack');

const webpack_config = {
  context: path.resolve(__dirname, './client'),
  entry : {
    app: './app.js'
  },
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, './client'),
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: true
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: '/node_modules',
        use: {
          loader: 'babel-loader'
        },
      }
    ]
  }
}

module.exports= webpack_config;
