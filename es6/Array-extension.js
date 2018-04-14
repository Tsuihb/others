// 数组扩展
// 定义：...xxx,为rest参数的逆运算，方便
//参数的处理 
try {
    // 常规用法
    console.log('...[1,3]为：',...[1,3])
    // 用于表达式
    console.log(...[...(1>0?[1]:[2])])

    //代替 apply 方法
/*     // ES5 的写法
function f(x, y, z) {
    // ...
  }
  var args = [0, 1, 2];
  f.apply(null, args);
  
  // ES6的写法
  function f(x, y, z) {
    // ...
  }
  let args = [0, 1, 2];
  f(...args); */

 /*  // ES5
    new (Date.bind.apply(Date, [null, 2015, 1, 1]))
    // ES6
    new Date(...[2015, 1, 1]);
 */

 //2、 Array.from() 转化成数组（类数组与Iterator接口）
  console.log(Array.from('hello'))
} catch (error) {
    console.log(error.message)
}