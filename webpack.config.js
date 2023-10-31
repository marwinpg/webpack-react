const path = require("path");

/** @type {import('webpack').Configuration} */
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
      compress: true,
      port: 3006,
      open: true,
      historyApiFallback: true,
    },
  },
};
