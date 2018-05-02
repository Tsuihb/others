var Koa = require('koa');
var sha1 = require('sha-1');
var config = {
    weChat:{
        appID:'wxedf713ba56b197b7',
        appSecret:'b637b0021c887486918a2aeb2724518d',
        token:'testOne'
    }
}

var app = new Koa();

app.use(async function(ctx, next) {
    console.log(ctx.query);
    var token = config.weChat.token;
    var signature = ctx.signature;
    var nonce = ctx.query.nonce;
    var timestamp = ctx.query.timestamp;
    var echostr = ctx.query.echostr;
    var str = [token, timestamp, nonce].sort().join('');
    var sha = sha1(str);
    
    if (sha == signature) {
        ctx.body = echostr
    } else {
        ctx.body = 'wrong';
    }
    console.log('本地加密消息：'+sha)
    
});

app.listen(80);
console.log('the sever start at port 80')