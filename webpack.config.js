var webpack = require('webpack');
var PROD = JSON.parse(process.env.PROD_ENV || '0');


module.exports = {
  entry: './test.js',
  output: {
    filename: 'build.js',
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015'],
        },
      },
    ],
  },
  plugins: PROD ? [
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    })
  ] : [],
};
