从github上面下载代码后，需要先执行npm install下载依赖。

# 生产环境与开发环境区分
为每个环境编写彼此独立的 webpack 配置。

## 使用方式
webpack.dev.js: 开发环境配置
webpack.prod.js: 生产环境配置
webpack.common.js: 通用配置

webpack-merge: 合并配置
安装依赖命令：
npm install --save-dev webpack-merge

## 配置scripts
"start": "webpack-dev-server --open --config webpack.dev.js",
"build": "webpack --config webpack.prod.js"







