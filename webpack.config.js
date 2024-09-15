// Generated using webpack-cli https://github.com/webpack/webpack-cli
const webpack = require("webpack");
const path = require("path");
const fs = require("fs");
var nodeModules = {};
const isProduction = process.env.NODE_ENV == "production";

fs.readdirSync(path.resolve(__dirname, "node_modules"))
  .filter((x) => [".bin"].indexOf(x) === -1)
  .forEach((mod) => {
    nodeModules[mod] = `commonjs ${mod}`;
  });

module.exports = {
  name: "server",
  target: "node",
  entry: "./src/index.js",
  output: { path: path.resolve(__dirname, "bin"), filename: "index.js" },
  externals: nodeModules,
  module: {
    rules: [
      { test: /\.(js|jsx)$/i, loader: "babel-loader" },
      { test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i, type: "asset" },
    ],
  },
  plugins: [],
};
