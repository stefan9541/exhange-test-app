const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(path.join(__dirname, "src", "client", "index.js")),
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
    fallback: {
      path: require.resolve("path-browserify"),
    },
  },
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public/"),
      publicPath: "/public/",
    },
    port: 3000,
    open: true,
    webSocketServer: false,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "template.html"),
      filename: path.resolve(__dirname, "public", "index.html"),
    }),
  ],
};
