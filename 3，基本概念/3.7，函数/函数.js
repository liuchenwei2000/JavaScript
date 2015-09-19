
/**
 * 函数
 * 
 * 函数可以封装任意多条语句，而且可以在任何地方、任何时候调用执行。
 * ECMAScript 中的函数使用 function 关键字来声明，后跟一组参数以及函数体。
 * 
 * 语法：
 * function functionName(arg0,arg1,...,argN){
 * 	statements;
 * }
 */

function sayHello(name, message) {
	console.log("Hello " + name + "," + message);
}

// 可以通过函数名来调用函数，后面要加上一对圆括号和参数（圆括号中的参数如果有多个，可以用逗号隔开）。
sayHello("Tim", "nice to meet you.");

/**
 * 函数在定义时不必指定是否返回值，实际上，任何函数在任何时候都可以通过 retrun 语句后跟要返回的值来实现返回值。
 */
function sum(num1, num2) {
	return num1 + num2;
	// 位于 return 语句之后的任何代码都永远不会执行。
	console.log("something after return statement.");
}

// 调用带有返回值的函数
var result = sum(1, 2);

/**
 * return 语句也可以不带任何返回值，这种情况下，函数在停止执行后将返回 undefined 值。
 * 这种用法一般用在需要提前停止函数执行而又不需要返回值的情况下。
 */
function doSomething(something) {
	if(true){
		return;
	}
	console.log(" do " + something);
}

doSomething("work");