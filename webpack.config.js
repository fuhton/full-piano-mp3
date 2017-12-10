const path = require('path');

module.exports = {
  entry: [
    './src/index',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        include: path.join(__dirname),
        exclude: path.join(__dirname, 'node_modules'),
      },
      { test: /\.mp3$/, loader: 'ignore-loader' }
    ],
  },
  node: {
    __dirname: true,
  },
  devServer: {
    port: 3333,
  },
};
