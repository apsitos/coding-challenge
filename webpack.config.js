const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    filename: 'bundle.js', 
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"]
        }
      },
      {
        "test": /\.css$/,
        "use": [
            "style-loader",
            "css-loader"
        ]
      }
    ]
  },
  devServer: {
      contentBase: path.join(__dirname, 'public')
  }
};