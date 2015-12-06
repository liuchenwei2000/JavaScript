
/**
 * 鉴于 ECMAScript 是松散类型的，因此需要typeof 操作符来检测给定变量的数据类型。
 * 
 * 对一个值使用 typeof 操作符可能返回下列某个字符串：
 * undefined —— 如果这个值未定义
 * boolean —— 如果这个值是布尔值
 * string —— 如果这个值是字符串
 * number —— 如果这个值是数值
 * object —— 如果这个值是对象或null
 * function —— 如果这个值是函数
 * 
 * typeof 操作符的操作数可以是变量，也可以是字面量。需要注意的是，typeof 是一个操作符而不是函数，因此无需圆括号。
 */
typeof "s";// string
typeof 5;// number
typeof null;// object

var a = true;
typeof a;// boolean

var b;
typeof b;// undefined

function sum(num1, num2) {
	return num1 + num2;
}
typeof sum;// function

// 除非为了检测一个变量是否已经定义，否则应尽量避免使用 typeof 操作符。
if(typeof foo === 'undefined')
{
	console.log('foo is undefined');
}
// 为了检测一个对象的类型，强烈推荐使用 Object.prototype.toString 方法，因为这是唯一一个可依赖的方式。
var type = Object.prototype.toString.call(sum);
console.log(type);

if('[object Function]' === type)
{
	console.log('sum is a function');
}