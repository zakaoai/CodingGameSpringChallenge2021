const path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
  watch: true,
  devtool: "inline-source-map",
  externals: {
    perf_hooks: "commonjs perf_hooks"
  }
};
