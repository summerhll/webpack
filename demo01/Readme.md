# webpack 起步示例
从github上面下载代码后，需要先执行npm install下载依赖。

## 代码备注
安装lodash依赖：
npm install --save lodash

## 运行webpack命令
方法一：npx webpack
方法二： npx webpack --config webpack.config.js

注：如果 webpack.config.js 存在，则 webpack 命令将默认选择使用它。我们在这里使用 --config 选项只是向你表明，可以传递任何名称的配置文件。这对于需要拆分成多个文件的复杂配置是非常有用。

方法三： 添加script命令：  "build": "webpack"
然后运行：npm run build 即可
