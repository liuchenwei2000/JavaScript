
/**
 * 作用域链的这种配置机制会有一个副作用，即闭包只能取得包含函数中任何变量的最后一个值。
 * 闭包所保存的是整个变量对象，而不是某个特殊的变量。
 */

/*
 * 这个函数会返回一个函数数组，从表面上看，似乎每个函数都应该返回自己的索引值。
 * 但实际上，每个函数都返回5。因为每个函数的作用域链中都保存着 
 * createFunctions() 函数的活动对象，它们引用的都是同一个变量 i。
 * 
 * 当 createFunctions() 函数返回后，变量 i 的值是 5，
 * 此时每个函数都引用着保存变量 i 的同一个变量对象，所以在每个函数内部 i 的值都是 5。 
 */
function createFunctions() {
	var result = new Array();
	for (var i = 0; i < 5; i++) {
		result[i] = function(){
			return i;
		};
	}
	return result;
}

var functions = createFunctions();
for (var i = 0; i < functions.length; i++) {
	console.log("functions[" + i + "]()=" + functions[i]());
}

// 可以通过创建另一个匿名函数强制让闭包的行为符合预期。
function createFunctions2() {
	var result = new Array();
	for (var i = 0; i < 5; i++) {
		/*
		 * 这里没有直接把闭包赋值给数组项，而是定义了一个匿名函数，并将立即执行该匿名函数的结果赋值给数组项。
		 * 这里的匿名函数有一个参数 num，也就是最终的函数要返回的值。在调用每个匿名函数时，传入了变量 i。
		 * 由于函数参数是按值传递的，所以就会将变量 i 的当前值复制给参数 num。
		 * 而在这个匿名函数内部，又创建并返回了一个访问 num 的闭包。
		 * 这样一来，result 数组中的每个函数都有自己 num 变量的一个副本，因此就可以返回各自不同的数值了。
		 */
		result[i] = function(num) {
			return function() {
				return num;
			};
		}(i);
	}
	return result;
}

var functions2 = createFunctions2();
for (var i = 0; i < functions2.length; i++) {
	console.log("functions2[" + i + "]()=" + functions2[i]());
}