/* 
generator

概念：generator函数是一个状态管理容器，里面封装了多个状态

本质：执行 Generator 函数会返回一个遍历器对象

使用形式：function*xxx{
    yield xxx;
    yield yyy;
    return;
}
xxx().__proto__.__proto__ 上如下方法：next()、return()、throw()、;
此三个方法添加参数返回的是将这个写入的参数当做上一个yield的输出值；
它们的作用都是让 Generator 函数恢复执行，并且使用不同的语句替换yield表达式。

调用：返回一个遍历器，所以可以使用 ...展开符遍历出对应的值，也可以用for...of
yield: 相当于一个开关，而 next是触发这个开关
return: 可以中断操作一个操作


*yield  
形如：function*xxx{
    yield xxx;
    yield* fn();
    yield yyy;
    yield zzz;
    return;
}

是将代码的控制权交给了，yield* fn();等着函数执行完之后，再会给xxx();

*/




