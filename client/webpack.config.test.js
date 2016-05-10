'use strict'

var glob = require('glob')
var path = require('path')

var TapWebpackPlugin = require('tap-webpack-plugin')

module.exports = {
  resolve: {
    root: [ path.resolve('src'), path.resolve('node_modules') ],
    extensions: [ '', '.js', '.jsx' ],
  },
  module: {
    loaders: [
      { test: /\.sass$/, loader: 'null-loader' },
    ],
  },
  plugins: [
    new TapWebpackPlugin()
  ],
  entry: glob.sync('./src/**/*.test.*'),
}
