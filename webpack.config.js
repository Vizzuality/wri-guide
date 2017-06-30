'use strict';
//  webpack.config.js
module.exports = {
    entry: './app/main.js',

    output: {
        filename: 'wri-guide-assets.js',
        path: __dirname
    },

    module: {
      loaders: [
        {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
        {test: /\.tpl$/, loader: 'ejs-loader'},
        {test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader'},
        {test: /\.(eot|ttf|woff2|woff)$/, loader: 'url-loader?prefix=fonts/&context=./app/styles/fonts'},
      ]
    }
};
