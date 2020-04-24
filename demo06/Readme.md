从github上面下载代码后，需要先执行npm install下载依赖。

# tree shaking
移除 JavaScript 上下文中的未引用代码(dead-code)。

## 使用

### 将文件标记为 side-effect-free(无副作用) 
1.package.json文件配置： "sideEffects": false
{
  "name": "your-project",
  "sideEffects": false
}
如果所有代码都不包含 side effect，我们就可以简单地将该属性标记为 false，来告知 webpack，它可以安全地删除未用到的 export。

side effect(副作用)" 的定义是，在导入时会执行特殊行为的代码，而不是仅仅暴露一个 export 或多个 export。举例说明，例如 polyfill，它影响全局作用域，并且通常不提供 export。

2. 如果你的代码确实有一些副作用，可以改为提供一个数组。
{
  "name": "your-project",
  "sideEffects": [
    "./src/some-side-effectful-file.js",
    "*.css"
  ]
}

3. module.rules 配置选项 中设置 "sideEffects"。

### 将 mode 配置选项设置为 production

## 想要使用 tree shaking 注意事项
1.使用 ES2015 模块语法（即 import 和 export）。
2.确保没有 compiler 将 ES2015 模块语法转换为 CommonJS 模块。
3.在项目 package.json 文件中，添加一个 "sideEffects" 属性。
4.通过将 mode 选项设置为 production，启用 minification(代码压缩) 和 tree shaking。






