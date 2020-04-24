# webpack 管理输出
从github上面下载代码后，需要先执行npm install下载依赖。

## 使用HtmlWebpackPlugin
1.下载依赖
npm install --save-dev html-webpack-plugin

2.使用
const HtmlWebpackPlugin = require('html-webpack-plugin');

plugins: [
      new HtmlWebpackPlugin({
          title: '管理输出'
        })
]

## 使用CleanWebpackPlugin 在每次构建前清理 /dist 文件夹
1.下载依赖 
npm install --save-dev clean-webpack-plugin

2.使用（3.0版本的新写法）
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

plugins: [
    new CleanWebpackPlugin(),
]





