# 常规模块写法

```javascript
// 函数式
function m1() {
    // code
};

function m2() {
    // code
}

// 对象式
var obj = {
    m1: function() {
        // code
    },
    m2: function() {
        // code
    }
}

// iife
!(function() {
// code
})()


```

# CommonJS 
* 初衷是希望js在任何地方引用，其形式为 模块的导入\导出 定义模块

```javascript
// foo 中
function add() {
    console.log('from foo')
}
exports = add;

// bar 中
var add = require('add');
function show() {
    add()
}

```

# AMD(异步模块定义)
* 形式：require(['module1,module2'],function() {
    module1
})

# requireJS 
* 常规浏览器加载js

```javascript
<script src="1.js"></script>
<script src="2.js"></script>
<script src="3.js"></script>
```
* 用requirejs为：
```javascript
// math.js

define(function (){

　var add = function (x,y){

　　return x+y;

　};

　return {
    add: add
　};
});

//bar
// main.js
require(['math'], function (math){

　alert(math.add(1,1));

});
```



































```javascript

```