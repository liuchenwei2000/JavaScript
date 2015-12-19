
// ECMAScript 的变量是松散类型的，也就是可以用来保存任何类型的数据。
// 换句话说，每个变量仅仅是一个用于保存值的占位符而已。

// 声明变量时要使用 var 操作符，后面跟变量名（标识符）。
var name;

// 支持直接初始化变量，因此可以在声明变量的同时为其赋值。
var age = 5;

// 像这样初始化变量并不会把它标记为字符串类型，可以在修改变量值的同时修改值的类型（不建议修改变量保存的值类型）。
var obj = "object";
obj = 10;

// 与变量相反，const 用于定义常量
const PI = 3.14;
console.log(PI);

PI = 3.15;// 对常量赋值是无效的
console.log(PI);

// 使用 var 定义的变量将成为定义该变量的作用域中的局部变量。
// 也就是说，如果在函数中用 var 定义了一个变量，在函数退出后该变量就会被销毁。
function sayHi() {
	var greeting = "Hi";// 这是一个局部变量
	global = "global"; // 省略 var 操作符从而创建了一个全局变量
}

console.log(greeting);// 错误
console.log(global);// 正确，但不推荐使用全局变量

// 可以使用一条语句定义多个变量，只要像下面这样把每个变量用都好分开即可。
var a = 1, b = true, c = "vic";

// JavaScript引擎的工作方式是，先解析代码，获取所有被声明的变量，然后再一行一行地运行。
// 如此一来，所有变量的声明语句，都会被提升到代码的头部，这就叫做变量提升（hoisting）。
console.log(x);// undefined
var x = 10;

// 上面的代码实际上会被解析成下面的样子
var x;
console.log(x);
x = 10;

// 变量提升只对 var 声明的变量有效，如果一个变量不是用 var 声明的，就不会发生变量提升。

console.log(y);// Uncaught ReferenceError: y is not defined(…)
y = 10;
