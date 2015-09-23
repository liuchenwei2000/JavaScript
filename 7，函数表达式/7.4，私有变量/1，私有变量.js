
/**
 * JavaScript 中没有私有成员的概念，所有对象属性都是公有的。
 * 倒是有一个私有变量的概念：
 * 任何在函数中定义的变量，都可以认为是私有变量，因为不能在函数之外访问这些变量。
 * 私有变量包括函数的参数、局部变量和在函数内部定义的其他函数。
 */

function Book() {
	// title 和 author 是对象属性
	this.title = "Thinking in Java";
	this.author = "Bruce Eckel";
}

function add(num1, num2) {// num1、num2 是私有变量（函数参数）
	// sum 是私有变量（局部变量）
	var sum = num1 + num2;
	return sum;
}

/*
 * 在函数内部可以访问这几个变量，但在函数外部则不能访问它们。
 * 如果在这个函数内部创建一个闭包，也可以访问这些变量，
 * 利用这一点，就可以创建用于访问私有变量的公有方法。 
 * 
 * 把有权访问私有变量和私有函数的公有方法称为特权方法（privileged method）。
 */