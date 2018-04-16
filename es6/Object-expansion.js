//对象扩展
// 1、属性简写 k和v保持一致
try {
    // 参数变量和属性名值保持一致
    function f(x, y) {
        // return {x: x, y: y};
        return console.log({x,y});
      }
      f(1, 2) 

      // 函数中的方法简写 
      const o = {
        method() {
          return console.log('函数中的方法简写');
        }
      };
      o.method()

} catch (error) {
  console.log(error.message)  
}

// 2、属性名的表达式
try {
    // es5
    var obj = {}
    obj.name = 'haha';
    obj['a'+'ge'] = 12
    console.log(obj.name)
    console.log(obj.age)

    // es6 
    var obj = {
        a:1,
        ['b'+'b']:'2b'
    }
    console.log(obj.a)
    console.log(obj.bb)
    
} catch (error) {
  console.log(error.message)  
}


//3、Object.is

try {
    // 解决es5如下问题
    Object.is(+0, -0) // false
    Object.is(NaN, NaN) // true
    
} catch(error) {
    error.message
}

//4、Object.assign 
// 定义：可枚举的对象的对象合并
try{
    // 常规用法
    var t = {a:1}
    var s1 = {b:2}
    var s2 = {c:3}
    Object.assign(t,s1,s2);
    console.log(t)

    // 等价于
    var com = {...{a:1},...{b:2},...{c:3}}
    console.log(com)

    //需要注意点 Object.assign方法为浅拷贝
    //同名属性的替换 可以用于插件中的自定属性
    //使用场景 增、改属性 克隆、合并多个对象
}catch(error){
    error.message
}
// 5、属性的可枚举性和遍历
// 5.1 使用Object.getOwnPropertyDescriptor()查看对象属性的描叙行为
// 4个属性值：value,writable,enumerable,configurable
// 对于对象来说 自身属性是可以被枚举的，即enumerable为true
// 但是 for-in 遍历是遍历自身和它的继承属性，但是js中又不想把它继承中的属性遍历出来，
// 所以 Object.getOwnPropertyDescriptor(Object.prototype,'valueOf')
// 的enumerable的值为false
// 5.2使用Object.getOwnPropertyDescriptors() 查看描叙对象的行为的四个属性和get、set属性
// const clone = Object.create(Object.getPrototypeOf(obj),
// Object.getOwnPropertyDescriptors(obj)); 浅拷贝
// 6、用Object.setPrototypeOf(Object,prototype)和getPrototypeOf(obj)代替__proto__
// 7、对象的super关键词只适用于对象的原型中
/*  const proto = {
    foo: 'hello'
};

const obj = {
  foo: 'world',
  find() {
    return super.foo;
  }
}; */

/* Object.setPrototypeOf(obj, proto);
obj.find() // "hello"; */

// 8、Object.keys() Object.values() Object.entries();

// 对象的解构赋值
/* let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
x // 1
y // 2
z // { a: 3, b: 4 }
 */
// 对象的扩展运算符（...）用于取出参数对象的所有可遍历属性，拷贝到当前对象之中。
// var obj = {...{a:1,b:2}}