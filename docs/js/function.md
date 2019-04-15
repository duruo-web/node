## 函数

> 参考JavaScript语言精粹

### 函数对象

* JavaScript中的函数就是对象。对象是"名/值"对的集合并拥有一个连到原型对象的隐藏连接。对象字面量产生的对象连接到Object.prototype。函数对象连接到Function.prototype（该原型对象本身连接到Object.prototype）。每个函数在创建时会附加两个隐藏属性：函数到上下文和实现函数行为的代码（**JavaScript创建一个函数对象时，会给该对象设置一个"调用属性"。当JavaScript调用一个函数时，可理解为调用此函数的"调用"属性**）。

* 每个函数对象在创建时也随配有一个prototype属性。它的值是一个拥有contructor属性且值为该函数的对象。这和隐藏连接到Function.prototype完全不同

    1. 因为函数是对象，所以它们可以像其他的值一样`被调用`。
    2. 函数可以保存在变量、对象和数组中
    3. 函数可以被当作参数传递给其他函数
    4. 函数也可以返回函数
    5. 因为函数是对象，所以函数拥有方法

### 函数字面量

函数对象通过函数字面量来创建：

```
// 创建一个名为add的变量，并用来把两个数字相加的函数赋值给它；
var add = function (a, b) {
    return a+b
}
```

函数字面量包括4个部分

1. 保留字function
2. 函数名，它可以被省略。函数可以用它的名字来递归地调用自己。此名字也能被调试器和开发工具用来识别函数。如果没有给函数命名，比如上面的例子，它会被认为是匿名函数
3. 包围在圆括号中的一组参数，其中每个参数用逗号分割。这些名称被定义为函数中的变量。它们不像普通的变量那样将被初始化为undefined，而是在该函数被调用时初始化为实际提供的参数的值
4. 包含花括号中的一组语句。这些语句是函数的主体。它们在函数调用时执行；

函数字面量可以出现在任何允许表达式出现的地方。函数也可以被定义在其他函数中。一个内部函数自然可以访问自己的参数和变量，同时它也能方便地访问它被嵌套在其中的那个函数的参数与变量。**通过函数字面量创建的函数对象包含一个连到外部的上下文的连接。这被成为闭包**。它是JavaScript强大表现力的根基。

### 调用

调用一个函数将暂停当前函数的执行，传递给控制权和参数给新函数。除了声明时定义的形式参数，每个函数接收两个附加的参数：this和arguments。参数this在面向对象中非常重要，它的值取决于调用的模式。

JavaScript中一共有四种调用模式：方法调用模式、函数调用模式、构造器调用模式和 apply 调用模式。这些模式在如何初始化关键参数this上存在差异。

#### 方法调用模式

当一个函数被保存为对象的一个属性时，我们称它为一个方法。当一个方法被调用时，this被绑定到该对象。如果一个调用表达式包含一个属性存取表达式（即一个.点表达式或者[subscript]下标表达式），那么它被当作一个方法来调用。

```
// 创建一个 myObject 。它有一个value 属性和一个 increment 方法。
// increment 方法接收一个可选的参数。如果参数不是数字，那么默认使用数字1。

var myObject = {
    value: 0,
    increment: function (inc) {
        this.value += typeof inc === 'number' ? inc : 1;
    }
}

myObject.increment();
document.writeIn(myObject.value);

myObject.increment(2);
document.writeIn(myObject.value);
```

方法可以使用 this 去访问对象，所以它能从对象中取值或修改该对象。this 到对象的绑定发生在调用的时候。这个"超级"迟绑定（very late bingding）使得函数对 this 高度复用。通过 this 可取得它们所属对象对上下文对方法称为公共方法

#### 函数调用模式

当一个函数并非一个对象的属性时，那么它被当作一个函数来调用；
```
var sum = add(3, 4);   // sum 的值为7
```

当函数以此模式调用时，this 被绑定到全局对象。这是语言设计上的一个错误。倘若语言设计正确，当内部函数被调用时， this应该仍然绑定到外部函数的 this 变量。这个错误的后果是方法不能利用内部函数来帮助它工资，因为内部函数的 this 被绑定来错误的值，所以不能共享该方法对对象的访问权







