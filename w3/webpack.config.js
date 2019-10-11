
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 处理html
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');  //抽离css文件
const CleanWebpackPlugin = require('clean-webpack-plugin') 

const isProd = process.env.NODE_ENV === 'production'; // true or false
var cssDev = ['style-loader', 'css-loader', 'sass-loader'];
var cssProd = ExtractTextWebpackPlugin.extract({
  fallback: 'style-loader',
  //resolve-url-loader may be chained before sass-loader if necessary
  use: ['css-loader', 'sass-loader']
})

var cssConfig = isProd ? cssProd : cssDev;

module.exports = {
  entry: {
    'index': './src/index.js'
    // 'rule': ''
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].[hash].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      chunks: ['index'],
      hash: true,
      minify: {
        collapseWhitespace: false
      }
    }),
    new HtmlWebpackPlugin({
      template: './src/rule.html',
      filename: 'rule.html',
      excludeChunks: ['index'],
      hash: true,
      minify: {
        collapseWhitespace: false
      }
    }),
    new ExtractTextWebpackPlugin({
      filename: '[name].[hash].css',
      disable: !isProd
    }),
    new CleanWebpackPlugin(['dist']),

    // 热替换
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: cssConfig
      }
    ]
  },
  devServer: {
    port: 8080,
    hot: true,
    open: true
  }
}
