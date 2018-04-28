# npm 
* 管理工具，解决代码部署
## 常见命令

```javascript
npm install <package> -g 全局安装、--dev-save 安装在devdependencies
npm uninstall <package> 
npm update <package>
npm install -g cnpm --registry=https://registry.npm.taobao.org 淘宝镜像
```

## 基本用法
* context对象：封装了request与response

```javascript
function mid(ctx){
    ctx.body = ctx;
    console.log(ctx)
}
app.use(mid)
```
* ctx中的代理：例 ctx.request.body = ctx.body

## 路由
*  根据ctx.url来判断:

```javascript
function mid(ctx){
    if(ctx.url=='/'){
        ctx.body = 'hello index'
    }else if(ctx.url=='/baidu'){
        ctx.body = 'hello baidu'
    }else{
        ctx.body = '404'
    }
}
```
*  使用node-router:

```javascript
const route = require('koa-route');
const index = ctx => {
  ctx.response.type = 'html';
  ctx.response.body = '<a href="/">Index Page</a>';
};
const notFind = ctx => {
  ctx.response.body = '404';
};
app.use(route.get('/', index));
app.use(route.get('/404', notFind));
```
## 重定向
*  场景：登入后在跳转会登入前的页面。

```javascript
const redirect = ctx => {
  ctx.response.redirect('/');
  ctx.response.body = '<a href="/">Index Page</a>';
};
app.use(route.get('/redirect', redirect));
```
## 中间件
*  概念：一个函数为中间件，一个引入的模块为中间件，其实都是一回事。有2个参分别为ctx、next

```javascript
const main = (context,next) => {
  console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`);
  ctx.response.body = 'Hello World';
  next()
};
```
*  常规中间件：多个中间件会形成一个栈结构（middle stack），以"先进后出"（first-in-last-out）的顺序执行。

```javascript
app.use((ctx,next)=>{
    console.log('进 1');
    next();
    console.log('出 1');
})
app.use((ctx,next)=>{
    console.log('进 2');
    next();
    console.log('出 2');
})
app.use((ctx,next)=>{
    console.log('进 3');
    next();
    console.log('出 3');
})
// 进1
// 进2
// 进3
// 出3
// 出2
// 出1
```
*  异步中间件（koa1.0:Generator+co; koa2.0:async+await）：

```javascript
const fs = require('fs.promised');
const Koa = require('koa');
const app = new Koa();

const main = async function (ctx, next) {
  ctx.response.type = 'html';
  ctx.response.body = await fs.readFile('./demos/template.html', 'utf8');
};
```
*  中间件的合成

```javascript
const compose = require('koa-compose');

const logger = (ctx, next) => {
  console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`);
  next();
}

const main = ctx => {
  ctx.response.body = 'Hello World';
};

const middlewares = compose([logger, main]);
app.use(middlewares);
```
## 错误处理
* 通过ctx.throw方法

```javascript
const main = ctx => {
  ctx.throw(500);
};
```
* 404错误

```javascript
//如果将ctx.response.status设置成404，就相当于ctx.throw(404)，返回404错误。
const main = ctx => {
  ctx.response.status = 404;
  ctx.response.body = 'Page Not Found';
};
```
* 处理错误的中间件

```javascript
// 为了方便处理错误，最好使用try...catch将其捕获。但是，为每个中间件都写try...catch太麻烦
// 我们可以让最外层的中间件，负责所有中间件的错误处理。
const handler = async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.response.status = err.statusCode || err.status || 500;
    ctx.response.body = {
      message: err.message
    };
  }
};
const main = ctx => {
  ctx.throw(500);
};
app.use(handler);
app.use(main);
```
* error 事件的监听

```javascript
// 运行过程中一旦出错，Koa 会触发一个error事件。监听这个事件，也可以处理错误。
const main = ctx => {
  ctx.throw(500);
};
app.on('error', (err, ctx) =>
  console.error('server error', err);
);
```
#### 未完待续。。。
