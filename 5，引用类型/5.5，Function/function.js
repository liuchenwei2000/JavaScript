
// 1，函数声明语法定义函数

function sum(num1, num2) {
	return num1 + num2;
}

// 2，函数表达式定义函数

// 定义了变量 sum2 并将其初始化为一个函数，function 关键字后面没有函数名，
// 这是因为使用函数表达式定义函数时，没必要使用函数名————通过变量 sum2 即可以引用函数。
var sum2 = function(num1, num2) {
	return num1 + num2;
}; // 注意这里有分号


// 3，由于函数名仅仅是指向函数的指针，因此函数名与包含对象指针的其他变量没有什么不同，也就是说，一个函数可能会有多个名字。

console.log("sum(1,2)=" + sum(1,2));

// 使用不带圆括号的函数名是访问函数指针，而非调用函数。这样一来，anotherSum 和 sum 指向同一个函数。
var anotherSum = sum;
console.log("anotherSum(1,2)=" + anotherSum(1,2));

// 即使将 sum 设为 null，让它与函数断绝关系，依然可以调用 anotherSum。
sum = null;
console.log("anotherSum(1,2)=" + anotherSum(1,2));

// 4，没有重载

function add(num1, num2) {
	return num1 + num2;
}

function add(num1, num2) {
	return num1 + num2;
}

// 上面这种方式等价于下面的写法
var add2 = function(num1, num2) {
	return num1 + num2;
};

add2 = function(num1, num2) {
	return num1 + num2;
};

// 由此可见函数没有重载。


// 5，一等公民
/*
 * JavaScript 的函数与其他数据类型处于同等地位，可以使用其他数据类型的地方就能使用函数。
 * 比如，可以把函数赋值给变量或对象的属性，也可以当作参数传入其他函数，或者作为函数的结果返回。
 * 这表示函数与其他数据类型的地方是平等，所以又称函数为一等公民。
 */

function add(x, y) {
	return x + y;
}

// 将函数赋值给一个变量
var operator = add;
console.log("operator(1, 2)=" + operator(1, 2));

// 将函数作为参数和返回值
function run(func) {
	return func;
}
console.log("run(add)(1, 1)=" + run(add)(1, 1));
