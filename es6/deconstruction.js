// 解构
// 1、数组解构
// 启用‘匹配模式’
try {
  console.log('数组解构')
  var [a,b,c] = [1,2]
  console.log(`a为：${a}，b为：${b}, c为：${c}`) //如果未匹配到 undefined
} catch (error) {
  error.message
}
// 2. 对象解构
// 根据‘名名相同（变量名和属性名）’
try {
  console.log('对象解构')
  // 常规写法
  var {a,b,c}={a:1,b:2}
  console.log(`a为：${a}，b为：${b}, c为：${c}`) //如果未匹配到 undefined
  
  // 如果变量名与属性名不一致 如下写法
  // 结论：先找同名属性 再对应的赋值
  var {f:z} = {f:1} // 赋值z变量但是为有这个同名属性，所以根据后者属性名找
  console.log(`z为：${z}`)

  // 嵌套写法
  var {n,n:[m,{l}]} = {n:[2,{l:3}]}
  console.log(`m为：${m}，l为：${l}, n为${n}`)

  // 启用默认值
  var {w,v=5} = {w:1}
  console.log(`w为：${w}，v是默认值为：${v}`)

} catch (error) {
  error.message
}
// 函数参数解构
try {
  console.log('函数参数解构')
  var {a,b}= {a:1,b:2}
  function add(){
    console.log(`a+b为：${a+b}`)
  }
  //add({a,b})
  add(a=10,b=10) //传默认值
   //如果未匹配到 undefined
} catch (error) {
  error.message
}