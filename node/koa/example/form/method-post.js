
var Koa = require('koa');
var Router = require('koa-router');
var bodyParser = require('koa-bodyparser');
const hostname = '127.0.0.1';
const port = 5000;

var app = new Koa();
var router = new Router();

app.use(bodyParser());



// 获取请求方法和url的参数
app.use(async (ctx,next)=>{
    console.log(`请求方法：${ctx.method} 请求参数： ${JSON.stringify(ctx.query)}`)
    await next()
})

router.get('/', async(ctx,next)=>{
    // 如果此刻前端使用get请求 报404错误
    ctx.response.body=`
    <form action="/signin" method="post">
        <p>Name: <input name="name" value="koa"></p>
        <p>Password: <input name="password" value="koa"></p>
        <p><input type="submit" value="Submit"></p>
    </form>
    `
})
router.post('/signin', async(ctx,next)=>{
    // 服务器代码错误报500错误
    name = ctx.request.body.name || '',
    password = ctx.request.body.password || ''; 
    ctx.body =  `<h1>Hi，${name} 你的密码是: ${password} </h1>` 
})

app.use(router.routes());


app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });