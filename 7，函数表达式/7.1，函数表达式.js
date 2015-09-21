
// 定义函数的方式有两种：一种是函数声明，另一种是函数表达式。

// 函数声明
function sayHi() {
	console.log("Hi");
}

// 关于函数声明，最重要的特征就是函数声明提升，也就是在执行代码之前会先读取函数声明。
doSomething();

function doSomething() {
	console.log("do something");
}

// 函数表达式
// 很像变量赋值语句，即创建一个函数并将它赋值给变量 sayHello，
// 这种情况下创建的函数叫匿名函数（也叫拉姆达函数），因为 function 关键字后面没有标识符。
var sayHello = function() {
	console.log("Hello");
};

// 函数表达式与其他表达式一样，在使用前必须先赋值，这点与函数声明的提升是不同的。
sayHello();

// 也可以把函数作为其他函数的返回值

function createFunction(){
	return function(){
		console.log("anonymous function");
	};
}

// 返回的函数可能会被赋值给一个变量，或者以其他方式被调用。
var f = createFunction();
f();
// 也可以这样调用
createFunction()();
