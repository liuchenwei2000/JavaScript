
/**
 * ECMAScript 函数不用声明返回值类型，也不介意传递进来多少个参数（及参数类型）。
 * 也就是说，即便定义了函数只接收两个参数，在调用函数时也未必一定要传递两个参数，可以传递一个、两个甚至不传递参数。
 * 原因是 ECMAScript 中的参数在内部是用一个数组来表示的，函数接收的始终都是这个数组，而不关心数组中包含哪些参数。
 * 在函数体中可以通过 arguments 对象来访问这个参数数组，从而获取传递给函数的每一个参数。
 * 
 * arguments 对象只是与数组类似（它并不是Array的实例），因为可以使用方括号语法访问它的每一个元素
 * （即第一个元素是 arguments[0]，第二个元素是 arguments[1]，以此类推），使用 length 属性来确定传递进来多少个参数。
 * 
 * 这是 ECMAScript 函数的一个重要特点：命名的参数只提供便利，但不是必需的。
 * 另外，其他语言可能需要事先创建一个函数签名，而将来的调用必须与该签名一致。
 * 但 ECMAScript 中，没有这些条条框框，解析器不会验证命名参数。
 * 
 * ECMAScript 中的所有参数传递的都是值，不可能通过引用传递参数。
 */

function sayHello() {
	console.log("Hello " + arguments[0] + "," + arguments[1]);
}

// 可以通过函数名来调用函数，后面要加上一对圆括号和参数（圆括号中的参数如果有多个，可以用逗号隔开）。
sayHello("Tim", "nice to meet you.");

function showArgsNumbers() {
	console.log("arguments.length=" + arguments.length);
}

showArgsNumbers(1, 2, 3, 4, 5);

/**
 * arguments 的值永远与对应命名参数的值保持同步，即 arguments 对象中的值会自动反映到对应的命名参数，
 * 这种影响是单向的：修改命名参数不会改变 arguments 中对应的值。
 */

function add(num1, num2) {
	arguments[1] = 10;
	return arguments[0] + num2;
}

console.log("add(2,3)=" + add(2, 3));

/**
 * 另外，如果只传入了一个参数，那么为 arguments[1] 设置的值不会反应到命名参数中，
 * 这是因为 arguments 对象的长度是由传入的参数个数决定的，而不是由定义函数时的命名参数的个数决定的。
 * 
 * 没有传递值的命名参数将被自动地赋予 undefined 值，这就跟定义了变量但又没有初始化一样。
 */
console.log("add(2)=" + add(2));