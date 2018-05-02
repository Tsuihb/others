var Koa = require('koa');
var path = require('path');
var wechat = require('./wechat/g');
var util = require('./libs/util');
var wechat_file = path.join(__dirname, './config/wechat.txt');
var config = {
    wechat:{
        appID:'wxedf713ba56b197b7', //填写你自己的appID
        appSecret:'b637b0021c887486918a2aeb2724518d',  //填写你自己的appSecret
        token:'testOne',  //填写你自己的token
        getAccessToken: function() {
            return util.readFileAsync(wechat_file);
        },
        saveAccessToken: function(data) {
            data = JSON.stringify(data);
            return util.writeFileAsync(wechat_file);
        }
    }
};

var app = new Koa();
app.use(wechat(config.wechat));
app.listen(80);
console.log('the port at 80')