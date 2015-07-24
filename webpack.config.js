var path = require('path');

module.exports = {
  name: 'web',
  target: 'web',
  devtool: 'sourcemap',
  console: true,
  buffer: false,
  entry: {
    'character-creator': ['./src/pages/character-creator.js']
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: "[name].js"
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel?optional=es7.objectRestSpread' }
    ]
  }
};
