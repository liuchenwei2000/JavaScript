
// 定义函数的方式有两种：一种是函数声明，另一种是函数表达式。

// 函数声明
function sayHi() {
	console.log("Hi");
}

// 关于函数声明，最重要的特征就是函数声明提升（hoisting），也就是在执行代码之前会先读取函数声明。
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

/**
 * 立即调用的函数表达式（IIFE：Immediately Invoked Function Expression）
 */

// IIFE 的一般形式如下
(function () {
	/* code */
}());

// 和普通函数执行的时候传参数一样，自执行的函数表达式也可以这么传参数
(function (j) {
	/* code */
}(jQuery));

// 因为闭包直接可以引用传入的参数，利用这些被锁住的传入参数，自执行函数表达式可以有效地保存状态。

// 这是一个反例，这种实现方式并不能保存状态
var fns = [];

for (var i = 0; i < 5; i++) {
	fns.push(function () {
		console.log(i);
	});
}

fns[0]();// 5
fns[1]();// 5

// 闭包实现
var fns2 = [];

for (var i = 0; i < 5; i++) {
	fns2.push((function (i) {
		return function () {
			console.log(i);
		};
	}(i)));
}

fns2[0]();// 0
fns2[1]();// 1