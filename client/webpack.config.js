const HtmlPlugin = require('html-webpack-plugin');
const path = require('path');


module.exports = {
  //entry: '.src/index.js',

  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use:
        {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      }
    ]
  },

  plugins: [
    new HtmlPlugin(
      {
        filename: "index.html",
        template: "./src/index.html"
      }
    )
  ],
  devServer: {
    historyApiFallback: true,
    port: 5000
  }
}