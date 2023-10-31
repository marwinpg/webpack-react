const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

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

const rulesForHtml = {
  test: /\.html$/,
  use: [
    {
      loader: "html-loader",
    },
  ],
};

const rules = [rulesForJavaScript, rulesForHtml];

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: { rules },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    client: {
      overlay: false,
    },
    compress: true,
    port: 3006,
    open: true,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "React App",
      template: "./public/index.html",
      filename: "./index.html",
    }),
  ],
};
