/* eslint-disable */
const path = require("path");
var nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CopyWebpackPlugin = require('copy-webpack-plugin');

const CSSModuleLoader = {
  loader: 'css-loader',
  options: {
    modules: true,
    sourceMap: true,
    url: false,
    localIdentName: '[local]__[hash:base64:5]'
  }
};


module.exports = {
  entry:  './src/index.jsx',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'index.js',
    libraryTarget: 'commonjs-module'
  },
  externals: [nodeExternals()],
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss']
  },
  optimization: {
   // minimizer: [new UglifyJsPlugin()]
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        use: [ {
          loader: MiniCssExtractPlugin.loader
        }]
      },
      {
        test: /\.scss$/,
        exclude: /\.module\.scss$/,
        loaders: [
          {
            loader: MiniCssExtractPlugin.loader
          }, "css-loader", "sass-loader"]
      },
      {
        test: /\.module\.scss$/,
        loaders: [{
          loader: MiniCssExtractPlugin.loader
        }, CSSModuleLoader, "sass-loader"]
      },
      {
        test: /.(ttf|eot|woff|woff2|svg)/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
          publicPath: path.resolve(__dirname, "assets")
        }
      }
    ]
  },
  plugins: [
    // new BundleAnalyzerPlugin({
    //   analyzerMode: 'static',
    //   openAnalyzer: true,
    //   reportFilename: 'webpack-bundle-contents-report.html'
    // }),
    new CopyWebpackPlugin([
      {from:  path.resolve(__dirname, "assets"), to:  path.resolve(__dirname, './build')},
      {from:  path.resolve(__dirname, "styles"), to:  path.resolve(__dirname, './build/styles')}
    ]),
    new MiniCssExtractPlugin({
      filename: "index.css"
    })
  ],
};