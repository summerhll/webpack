# webpack 开发环境
从github上面下载代码后，需要先执行npm install下载依赖。

## mode
 mode: 'development' // 开发环境


## source map
devtool：控制是否生成，以及如何生成 source map。

## 自动编译
1. watch mode
概念： 监听依赖图中所有文件的更改。如果其中一个文件被更新，代码将被重新编译。
缺点：为了看到修改后的实际效果，你需要刷新浏览器。

使用：
配置script:  "watch": "webpack --watch"

2.webpack-dev-server 
webpack-dev-server 为你提供了一个简单的 web server，并且具有 live reloading(实时重新加载) 功能。

下载依赖：
npm install --save-dev webpack-dev-server

修改配置文件：
 devServer: {
    port: '8080',
    contentBase: './dist' //将 dist 目录下的文件 serve 到 localhost:8080 
}

3.使用 webpack-dev-middleware

添加一个可以直接运行 dev server 的 script: "start": "webpack-dev-server --open"





