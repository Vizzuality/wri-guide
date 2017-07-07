const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {

  devtool: process.env.NODE_ENV === 'production' ? false : 'cheap-eval-source-map',

  context: path.resolve(__dirname, 'app'),

  entry: './main.js',

  output: {
    filename: 'wri-guide-assets.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.tpl$/,
        loader: 'ejs-loader'
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'resolve-url-loader'
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true }
          },
          {
            loader: 'postcss-loader'
          }
        ]
      },
      {
        test: /\.(eot|ttf|woff2|woff)$/,
        loader: 'url-loader?prefix=fonts/&context=./app/styles/fonts'
      },
      {
        test: /\.(jpg|png)$/,
        loader: 'url-loader?prefix=images/&context=./app/images'
      }
    ]
  },

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 9090,
    host: '0.0.0.0',
    hot: true
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: 'body',
      filename: 'index.html'
    })
  ]

};

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    },
    mangle: true,
    sourcemap: false,
    beautify: false,
    dead_code: true
  }));
  config.plugins.push(new webpack.optimize.OccurrenceOrderPlugin());
  config.plugins.push(new webpack.LoaderOptionsPlugin({
    minimize: true,
    debug: false
  }));
} else {
  config.plugins.push(new webpack.HotModuleReplacementPlugin());
}

module.exports = config;
