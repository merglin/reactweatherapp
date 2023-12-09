const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: [
    "script-loader!jquery/dist/jquery.min.js",
    "script-loader!foundation-sites/dist/js/foundation.min.js",
    "./src/app.jsx",
  ],
  externals: {
    jquery: "jQuery",
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
    }),
  ],
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
