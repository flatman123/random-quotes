//Here is where you declare your variable
const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

module.exports = {
    module: {
        rules: [
          {
            test: /\.s[ac]ss$/i,
            use: [
              // Creates `style` nodes from JS strings
              'style-loader',
              // Translates CSS into CommonJS
              'css-loader',
              // Compiles Sass to CSS
              'sass-loader',
            ],
          },
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader'
            }
            },
            
        ]
      },
  entry: './src/js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
//This is where you setup the plugins property
plugins: [
    new HtmlWebpackPlugin({
        filename: 'index.html', //<--- 
        template: './src/js/index.html' //<---
    })
],
devServer: {
    contentBase: path.join(__dirname, './build'),
    compress: true,
    port: 9000
  },
};