# babel
## babel presets
### 一个规范的综合 
1. 从es2015~es2017
2. env包含了es2015到es2017以及最近的2个版本
3. 自定义的 列如babel-presets-react
### 指定特殊的运行环境
* 例如：
```javascript
{
  "presets": ["env", options]
}
```
* 浏览器
```javascript
{
  "presets": [
    ["env", {
      "targets": {
        "browsers": ["last 2 versions", "safari >= 7"]
      }
    }]
  ]
}
```
* nodejs
```javascript
{
  "presets": [
    ["env", {
      "targets": {
        "node": "6.10"
      }
    }]
  ]
}
```
## babel polyfill
* 它会仿效一个完整的 ES2015+ 环境，并意图运行于一个应用中而不是一个库/工具，有自身的内置方法，静态方法比如 Array.from 或者 Object.assign, 实例方法比如 Array.prototype.includes 和生成器函数（提供给你使用 regenerator 插件），和原生的方法差不多，挂载到全局上，如：String.protype.xxx。
* 放在dependency，而非放在devdependency 上 是因为你首先得运行这个polyfill
* commonjs：require("babel-polyfill");es6：import "babel-polyfill";webpack中：module.exports = {entry: ["babel-polyfill", "./app/js"]};

## babel-runtime
* 在第三方库和框架 中使用babel-runtime 而不是使用 babel polyfill
### 开发依赖
* npm install --save-dev babel-plugin-transform-runtime
### 生产依赖
* npm install --save babel-runtime