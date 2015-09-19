
// 作为值的函数

/**
 * 函数名本身就是变量，所以函数也可以作为值来使用。也就是说，
 * 不仅可以像传递参数一样把一个函数传递给另一个函数，而且可以将一个函数作为另一个函数的结果返回。
 */

// 1，函数作为参数使用

// 该函数接收两个参数，第一个参数是一个函数，第二个参数是要传递给参数函数的值。
function callSomeFucntion(someFunction, arg) {
	return someFunction(arg);
}

function add10(num){
	return num + 10;
}

// 要访问函数的指针而不执行函数的话，必须去掉函数名后面的那对圆括号。因此这里传入的是 add10
var result = callSomeFucntion(add10, 1);
log("callSomeFucntion(add10, 1)=" + result);

var greeting = function(name) {
	return "Hello " + name;
}; 

result = callSomeFucntion(greeting, " world");
log("callSomeFucntion(greeting, \" world\")=" + result);

// 2，函数作为返回结果使用
// 可以从一个函数中返回另一个函数，而且这也是极为有用的一种技术。

// 比如要对一个对象数组按对象某个指定属性进行排序
function createComparisonFunction(propName) {
	return function(object1, object2) {
		var value1 = object1[propName];
		var value2 = object2[propName];

		return value1 - value2;
	};
}

var people = [ {
	name : "Tom",
	age : 22,
	salary : 10000,
	toString : function() {
		return this.name;
	}
}, {
	name : "Peter",
	age : 20,
	salary : 20000,
	toString : function() {
		return this.name;
	}
} ];

people.sort(createComparisonFunction("age"));
log("people sorted by age=" + people);

people.sort(createComparisonFunction("salary"));
log("people sorted by salary=" + people);
