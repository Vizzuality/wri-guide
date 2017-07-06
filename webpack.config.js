const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {

  entry: './app/main.js',

  output: {
    filename: 'wri-guide-assets.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: './'
  },

  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
      {test: /\.tpl$/, loader: 'ejs-loader'},
      {test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader!postcss-loader'},
      {test: /\.(eot|ttf|woff2|woff)$/, loader: 'url-loader?prefix=fonts/&context=./app/styles/fonts'},
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html',
      inject: 'body',
      filename: 'index.html'
    })
  ]

};

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(new webpack.optimize.UglifyJsPlugin());
  config.plugins.push(new webpack.optimize.OccurrenceOrderPlugin());
  config.plugins.push(new webpack.LoaderOptionsPlugin({
    minimize: true,
    debug: false
  }));
}

module.exports = config;
