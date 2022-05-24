// 引入webpack插件
const webpack = require("webpack");

const baseConfig = require("./webpack.base.js");
const merge = require("webpack-merge");

const devConfig = {
  mode: "development", //development production

  devtool: "cheap-module-eval-source-map",
  devServer: {
    // 指定服务器根目录
    contentBase: "./dist",
    // 自动打开浏览器
    open: true,
    // 启用热模块替换
    hot: true,
  },

  // 插件
  plugins: [new webpack.HotModuleReplacementPlugin()],
};

module.exports = merge(baseConfig, devConfig);
