
/**
 * Number 类型表示整数和浮点数，格式可以是十进制、八进制或十六进制。
 */

var a = 10;// 十进制
var b = 075;// 八进制，以 0 开头
var c = 0x12ae;// 十六进制，以 0x 开头

var d = 3.14;// 浮点数

var e = 2.7e4;// 科学计数法表示 2.7*10^4，值等于e前面的数值乘以10的e后面的数值次幂。

// 浮点数的最高精度是17位小数，但进行算术运算的其精确度远远不如整数。
// 所以，永远不要测试某个特定的浮点数值。
if((0.1 + 0.2) == 0.3){
	// do somthing
}

// 数值范围的最大值
var max = Number.MAX_VALUE;
// 数值范围的最小值
var min = Number.MIN_VALUE;

// 如果超出最大值最小值范围，会被转换成特殊的 Infinity（正无穷） 或 -Infinity（负无穷）。

/**
 * NaN，即非数值（Not a Number）是一个特殊的数值，这个数值用于表示一个
 * 本来要返回数值的操作数却未返回数值的情况（这样就不会抛出错误了）。
 * 在ECMAScript中，任何数值除以0会返回NaN，因此不会影响其他代码的执行。
 * 
 * NaN 本身有两个非同寻常的特点：
 * 首先，任何涉及NaN的操作都会返回NaN，这个特点在多步计算中有可能导致问题。
 * 其次，NaN与任何值都不相等，包括NaN本身。
 * 针对NaN的这两个特点，ECMAScript定义了isNaN()函数，它接受一个参数，该参数可以是任何类型，用于判断参数是否“不是数值”。
 */

console.log("1/0=" + (1 / 0));
console.log("NaN===NaN ? " + (NaN === NaN));
console.log("isNaN(1/0)=" + isNaN(1 / 0));
console.log("isNaN(10)=" + isNaN(10));

/**
 * 数值转换
 * 
 * 有3个函数可以把非数值转换为数值：Number()、parseInt()和parseFloat()。
 * 其中 Number() 可以用于任何数据类型，另外两个函数则专门用于把字符串转换成数值。
 */

console.log("Number(\"hello\")=" + Number("hello"));
console.log("Number(\"\")=" + Number(""));
console.log("Number(\"11100\")=" + Number("11100"));
console.log("Number(\"true\")=" + Number("true"));

// 在处理整数的时候更常用的是 parseInt() 函数
console.log("parseInt(\"1234\")=" + parseInt("1234"));
console.log("parseInt(\"\")=" + parseInt(""));
console.log("parseInt(\"22.5\")=" + parseInt("22.5"));
console.log("parseInt(\"080\")=" + parseInt("080"));

// 还可以按指定进制进行转换（第二个参数）
console.log("parseInt(\"11\",2)=" + parseInt("11", 2));// 2进制，值为3
console.log("parseInt(\"11\",8)=" + parseInt("11", 8));// 8进制，值为9
console.log("parseInt(\"11\",10)=" + parseInt("11", 10));// 10进制，值为11
console.log("parseInt(\"11\",16)=" + parseInt("11", 16));// 16进制，值为17

//在处理浮点数的时候更常用的是 parseFloat() 函数
console.log("parseFloat(\"12.34\")=" + parseFloat("12.34"));
console.log("parseFloat(\"3.12e10\")=" + parseFloat("3.12e10"));
console.log("parseFloat(\"000.22\")=" + parseFloat("000.22"));
