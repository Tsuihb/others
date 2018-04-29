# 工厂模式
```javascript
var Person = function(name,age) {
    var obj = new Object();
    obj.name = name;
    obj.age = age;
    obj.sayHello = function() {
        console.log(`my name is ${name} and ${age}   `)
    }
}
obj1 = new Person("jack",11)
obj2 = new Person("alen",12)
console.dir(obj1)
```