var path = require('path')
var webpack = require('webpack')
var autoprefixer = require('autoprefixer')

var devConfig = {
  host: '0.0.0.0',
  port: '3333'
}

module.exports = {
  devConfig: devConfig,
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client',
    'babel-polyfill',
    './src/entry'
  ],
  output: {
    path: path.join(__dirname),
    filename: 'bundle.js',
    publicPath: 'http://' + devConfig.host  + ':' + devConfig.port + '/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }, {
        test: /\.css$/,
        loader: 'style!css?sourceMap!postcss'
      }, {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: ['file?name=[path][name].[hash].[ext]']
      }, {
        test: /\.woff2?$/,
        loader: 'url?limit=6500000&mimetype=application/font-woff&name=[path]/fonts/[name].[ext]'
      }
    ]
  },
  postcss: [
    autoprefixer()
  ]
}
