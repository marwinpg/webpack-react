const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const rulesForJavaScript = {
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  use: [
    {
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-env", "@babel/preset-react"],
      },
    },
  ],
};

const rulesForStyles = {
  test: /\.s[ac]ss$/,
  use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
};

const rulesForHtml = {
  test: /\.html$/,
  use: [
    {
      loader: "html-loader",
    },
  ],
};

const rules = [rulesForJavaScript, rulesForStyles];

/** @type {import('webpack').Configuration} */
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean: true,
    publicPath: "/",
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "@components": path.resolve(__dirname, "src/components/"),
      "@styles": path.resolve(__dirname, "src/styles/"),
    },
  },
  mode: "production",
  optimization: {
    minimize: true,
  },
  module: { rules },
  plugins: [
    new HtmlWebpackPlugin({
      title: "React App",
      template: "./public/index.html",
      filename: "index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
};
