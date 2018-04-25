
var Koa = require('koa');
var Router = require('koa-router');
var bodyParser = require('koa-bodyparser');
const hostname = '127.0.0.1';
const port = 5000;

var app = new Koa();
var router = new Router();
// 获取请求方法和url的参数
app.use(async (ctx,next)=>{
    console.log(`请求方法：${ctx.method} 请求参数： ${JSON.stringify(ctx.query)}`)
    await next()
})

router.get('/', async(ctx,next)=>{
    ctx.response.body=`
    <form action="/signin" method="get">
        <p>Name: <input name="name" value="koa"></p>
        <p>Password: <input name="password" value="koa"></p>
        <p><input type="submit" value="Submit"></p>
    </form>
    `
})
router.get('/signin', async(ctx,next)=>{
    var getMsg = JSON.stringify(ctx.query) ;
    ctx.body = `<h1>Hi，${JSON.parse(getMsg).name} 你的密码是: ${JSON.parse(getMsg).password} </h1>`
})

app.use(router.routes());
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });