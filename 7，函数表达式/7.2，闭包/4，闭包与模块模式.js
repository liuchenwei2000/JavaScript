
/**
 * Module 模式的基本特征：
 * 1，模块化，可重用；
 * 2，封装了变量和函数，不污染全局空间，松耦合；
 * 3，只暴露 public 方法，其它私有方法全部隐藏。
 */

var Calculator = function () {

	// 声明私有成员
	var start = new Date();

	return {
		// 暴露公开的成员
		add: function (x, y) {
			console.log(start);
			return x + y;
		}
	};
};

// 使用模块
var c = new Calculator();
console.log(c.add(1, 2));

/**
 * 上述实现方式在每次使用的时候都要 new 一个新对象，浪费内存。使用匿名闭包来实现可以解决这个问题。
 * 函数内部的代码一直存在于闭包内，在整个运行周期内，该闭包都保证了内部的代码处于私有状态。
 */

var calculator = (function () {

	// 所有的变量和函数都在这里声明，并且作用域也只能在这个匿名闭包里，但是这里的代码仍然可以访问外部的全局对象

	// 声明私有成员
	var start = new Date();

	return {
		// 暴露公开的成员
		add: function (x, y) {
			console.log(start);
			return x + y;
		}
	};
}());

console.log(calculator.add(1, 2));

/**
 * 可以将全局变量当成一个参数传入到匿名函数然后使用
 */

// 模拟全局变量 jQuery
var jQuery = {
	now: function () {
		return new Date();
	}
};

var calculator2 = (function (j) {

	var start = j.now();

	return {
		add: function (x, y) {
			console.log(start);
			return x + y;
		}
	};
}(jQuery));

console.log(calculator2.add(1, 2));