// 函数扩展
//1、默认参数
// 形如 x=1，不可用了let或const再去声明
// 与解构配合 如 var obj = {x:1,y:2}
try {
    console.log('默认参数')
    function add(x=1,y=2){
        console.log(x+y)
    }
    add();// 输出默认参数为3
    add(2,3) //输出传入参数5
    
    //默认参数与解构配合
    var obj = {a:1,b:2}
    var {a,b=0} =obj
    function count () {
        console.log(`默认参数与解构配合的值为： ${a+b}`)
    }
    count({a,b})

} catch (error) {
    console.log(error.message)
}
//2、rest(形如 ...b) 参数  代替arguments对象
// 使用 
try {
    function show(...arr){
        console.log(...arr)
    }
    var [...arr] = [1,2,4]
    show(...arr)
} catch (error) {
    console.log('报错'+error.message)
}
//3、箭头函数 
//3.1针对于匿名函数 
// var f = k=>console.log(k) 相当于 
/* var f = function f(k) {
  return console.log(k);
}; */
//3.2无参数和多个参数使用(a,b)、({a,b}),一个参数可以不使用()
//3.3 返回一条语句是使用{},返回一个对象得使用({})包裹着
//3.4 箭头函数中的this的固化性、箭头函数自身没有自己，而使用
//的this源于父对象，如果箭头函数没父对象（函数或者对象中定义）
//
try {
    console.log('this的固化性');
    function fn() {
        setTimeout(function(){
            console.log(this)
        },100)
    }
    fn() //nodejs中全局为global，浏览器中为window
    fn.call({}) //this的不受控行为  浏览器中输出为：window
    // 如下改写，该方法等价于使用箭头函数
    function fn1() {
        var _this = this
        setTimeout(function(){
            console.log(_this)
        },100)
    }
    fn1(); //nodejs中全局为global，浏览器中为window
    fn1.call({}); //浏览器中输出为：{}
    // 适用dom中事件处理
    /* xxx.onclick = function(){
        setTimeout(()=>{
            console.log(this) // this 指向 xxx的dom元素
        },100)
    } */

    // 箭头函数没有自己的this 举例
    /* function far() {  
        return ()=>{
            return ()=>{
                console.log(this.id)
            }
        }
    }
    far.call({id:1})()();// 输出1
    far.call({id:1}).call({id:2})() // 输出1 */
} catch (error) {
    console.log('错误信息为：'+error.message)
}
