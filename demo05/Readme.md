从github上面下载代码后，需要先执行npm install下载依赖。

# 模块热替换 hot module replacement 
允许在运行时更新所有类型的模块，而无需完全刷新。

## 使用
const webpack = require('webpack');

 plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]







