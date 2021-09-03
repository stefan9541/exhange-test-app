const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: `${__dirname}/client/index.js`,
  mode: "development",
  module: {
    rules: [
      {
        text: /\.(jsx|js)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: {
          presets: "@babel/env",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  output: {
    output: {
      path: path.resolve(__dirname, "dist/"),
      filename: "bundle.js",
      publicPath: "/dist/",
      chunkFilename: "[name].js",
      clean: true,
    },
  },
  resolve: {
    extensions: ['*','.js','.jsx'],
    fallback: {
      path: require.resolve("path-browserify"),
    },
  },
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    port: 3000,
    publicPath: "http://localhost:3000/dist/",
    hotOnly: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};
