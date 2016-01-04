
// 函数的内部属性：arguments

/**
 * 1，arguments 对象是一个类数组对象，包含着传入函数中的所有参数。
 * 虽然它的主要用途是保存函数参数，但这个对象还有一个名为 callee 的属性，
 * 该属性是一个指针，指向拥有这个 arguments 对象的函数。
 */

// 经典阶乘函数，它的问题是这个函数的执行与函数名 factorial 紧紧耦合在了一起。
function factorial(num) {
	if (num < 2) {
		return 1;
	} else {
		return num * factorial(num - 1);
	}
}

console.log("factorial(5)=" + factorial(5));

// 下面的使用方式会出现计算错误
var factorial2 = factorial;

factorial = function() {
	return 0;
};

console.log("factorial2(5)=" + factorial2(5));

// 使用  arguments.callee 可以避免上述问题
function trueFactorial(num) {
	if (num < 2) {
		return 1;
	} else {
		// 在函数体内，没有再引用函数名 trueFactorial。
		// 这样，无论引用函数时使用的是什么名字，都可以保证正常完成递归调用。
		return num * arguments.callee(num - 1);
	}
}

console.log("trueFactorial(5)=" + trueFactorial(5));

// 下面的使用方式就不会出现计算错误
var factorial3 = trueFactorial;

trueFactorial = function() {
	return 0;
};

console.log("factorial3(5)=" + factorial3(5));
