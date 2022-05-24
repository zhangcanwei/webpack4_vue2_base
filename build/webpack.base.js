// 导入path模块
const path = require("path");

// 引入vue-loader 的插件
const VueLoaderPlugin = require("vue-loader/lib/plugin");

// 引入html-webpack-plugin
const HtmlWebpackPlugin = require("html-webpack-plugin");

// 引入clean-webpack-plugin
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  // 打包入口
  entry: "./src/main.js",
  // 打包出口
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "../dist"), //__dirname指向当前文件所在目录
  },
  //打包规则
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      // {
      //   test: /\.(jpg|jpeg|png|svg)$/,
      //   loader: "file-loader",
      //   options: {
      //     name: "[name].[ext]",
      //   },
      // },
      {
        test: /\.(jpg|jpeg|png|svg)$/,
        loader: "url-loader",
        options: {
          name: "[name].[ext]",
          limit: 2048,
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.styl(us)?$/,
        use: [
          "vue-style-loader",
          "css-loader",
          "postcss-loader",
          "stylus-loader",
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", //将es6语法编译为es5
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  // 插件
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    new CleanWebpackPlugin(),
  ],
  resolve: {
    alias: {
      vue: "vue/dist/vue.js",
      "@": path.resolve(__dirname, "../src"),
      styles: path.resolve(__dirname, "../src/assets/styles"),
      images: path.resolve(__dirname, "../src/assets/images"),
    },
  },
};
