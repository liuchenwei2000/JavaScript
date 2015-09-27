
/**
 * JavaScript 没有块级作用域的概念，这意味着在块语句中定义的变量，实际上是在包含函数中而非语句中创建的。
 */

function count() {
	for (var i = 0; i < 10; i++) {
		// do something
	}
	console.log("i=" + i);
}

count();// i=10

/**
 * JavaScript 对于多次声明同一变量不会有任何警告，它只会对后续的声明视而不见（但它会执行后续声明中的变脸初始化）。
 * 匿名函数可以用来模仿块级作用域（通常称为私有作用域）并避免这个问题。 
 */

/*
 * 下面的代码定义并立即调用了一个匿名函数，将函数声明包含在一对圆括号中，
 * 表示它实际上是一个函数表达式，而紧随其后的另一对圆括号会立即调用这个函数。
 * 这就叫做“立即调用的函数表达式”（Immediately-Invoked Function Expression），简称IIFE。
 * 通常情况下，只对匿名函数使用这种“立即执行的函数表达式”。
 * 它的目的有两个：
 * 一是不必为函数命名，避免了污染全局变量；二是IIFE内部形成了一个单独的作用域，可以封装一些外部无法读取的私有变量。
 */
(function() {
	// 这里是块级作用域
})();

// 上面的代码与下面是等价的：
var temp = function() {
	// 这里是块级作用域
};
temp();

// 无论在什么地方，只要临时需要一些变量，就可以使用私有作用域。
(function() {
	for (var i = 0; i < 10; i++) {
		// do something
	}
})();
console.log("i=" + i);// error
