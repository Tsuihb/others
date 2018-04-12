// let 和 const
// let 特点：
// 1、块级作用域
// 当使用的var声明时，此刻i为全局变量
try {
  console.log('没有块级，全局的表现')
  for (var i = 0; i < 10; i++) {
    console.log(i) // 执行其中的代码共打印0~9的数
  }
  console.log(i) //10  全局变量10

} catch (err) {
  err.message
}
// 当使用let声明时；
try {
  console.log('let的块级表现')
  for (let j = 0; j < 10; j++) {
    console.log(j) // 执行其中的代码共打印0~9的数
  }
  console.log(j) // j is not defined

} catch (err) {
  console.log(err.message)
}
//2、变量不提升
// 用var
try {
  console.log('用var声明提前')
  //使用var
  console.log(a)
  var a = 10; // undefined 声明提前

} catch (err) {
  console.log(err.message)
}
// 用let
try {
  console.log('用let声明提前')
  //使用var
  console.log(a)
  let a = 10; // a is not defined 当声明提前是会报错

} catch (err) {
  console.log(err.message)
}

// const 特点：
// 不可重复声明
try {
  const PI = 3.14
} catch (err) {
  console.log('错误信息为：' + err.message)
}
// 具有块级作用域
try {
  {
    const d = 4
    console.log(d)
  }
  console.log(d)
} catch (err) {
  console.log('错误信息为：' + err.message)
}