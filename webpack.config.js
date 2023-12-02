const path = require("path");

module.exports = {
  entry: "./src/app.jsx",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    alias: {
      Components: path.resolve(__dirname, "src/Components"),
    },
    extensions: ["", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /(node_modules|dist|bower_components)/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  devtool: "eval-source-map",
};
