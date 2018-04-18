/* 
遍历器的概念：是一种接口，是为各种不同的数据结构
提供统一的访问机制；

作用：1、提供各种数据访问接口，2使成员按照某种顺序排列
3、为es6中的for...of提供接口

如何工作：创建 一个指针对象对于第一个成员使用next方法
指向第一个数据成员；以此类推、、、直到最后的结束位置。

模拟遍历器中的next方法：

function (array){
    var index = 0;
    return{
        next:function(){
            if(index<array.lenght){
               return {value:array[index++],done:false} 
            }else{
                return{value:undefinde, done:true}
            }
        }
    }
}

为obj = {}  添加 Symbol.iterator

var obj={
    [Symbol.iterator]:function(){
        return{
            next:function(){
                return{
                    value:1,
                    done:turn
                }
            }
        }
    }
}

具有Iterator接口的数据结构如下：
Array、Map、Set、String、TypeArray、arguments、NodeList

使用数组的Symbol.iterator
var arr = [1,2,3]

console.log(arr[Symbol.iterator]();) //Array Iterator {}


总结：for of 不能遍历{} 因为是{} 没有部署iterator接口，展开符（...）

因为配置了iterator接口

*/
