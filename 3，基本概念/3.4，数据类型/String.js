
/**
 * String 类型用于表示由零或多个16位Unicode字符组成的字符序列，即字符串。
 * 字符串可以由双引号或单引号表示。
 */

var s1 = "string";
var s2 = 'string';

// 字符串可以被视为字符数组，因此可以使用数组的方括号运算符，用来返回某个位置的字符（从0开始）。
console.log("s1[0]=" + s1[0]);
console.log("s1[1]=" + s1[1]);
console.log("s1[2]=" + s1[2]);

/**
 * String 类型包含了一些特殊的字符字面量，也叫转义序列，用于表示非打印字符或者具有其他用途的字符。
 * 
 * \n 换行符
 * \t 制表符
 * \\ 斜杠
 * \'
 * \"
 * \xnn 以十六进制代码nn表示一个字符，n为0-F
 * \unnnn 以十六进制代码nnnn表示一个Unicode字符，n为0-F。
 */ 

console.log("\u0041");// A

var s3 = "hello \"world\"\n";

// 任何字符串的长度都可以通过访问其 length 属性取得。
console.log("s3.length=" + s3.length);

// ECMAScript 中的字符串是不可变的，也就是说，字符串一旦创建，它们的值就不能改变。
// 要改变某个变量保存的字符串，首先要销毁原来的字符串，然后再用另一个包含新值的字符串填充该变量。

var s4 = "old";
s4 = s4 + "new";

/**
 * 转换为字符串
 * 
 * 1，使用几乎每个值都有的 toString() 方法。
 * 数值、布尔值、对象和字符串值都有 toString() 方法，但 null 和 undefined 值没有这个方法。
 */

var num = 11;
console.log("11.toString()=" + num.toString());
console.log("true.toString()=" + true.toString());
console.log("\"aaa\".toString()=" + "aaa".toString());

/**
 * 在调用数值的 toString() 方法时可以传递一个参数用于指定输出数值的基数。
 * 默认情况下，toString() 方法以十进制格式返回数值的字符串表示。
 * 而通过传递基数，toString() 可以输出以二进制、八进制、十六进制，乃至其他任意有效进制格式表示的字符串。
 */

console.log("num.toString(2)=" + num.toString(2));
console.log("num.toString(8)=" + num.toString(8));
console.log("num.toString(10)=" + num.toString(10));
console.log("num.toString(16)=" + num.toString(16));


/**
 * 2，如果不知道要转换的值是不是 null 或 undefined，可以使用转型函数 String()，它能将任何类型的值转换为字符串。
 * 转换规则如下：
 * 如果值有 toString()方法，则调用该方法并返回相应的结果。
 * 如果值是null，则返回“null”，如果值是 undefined，则返回“undefined”。
 */
console.log("String(true)=" + String(true));
console.log("String(10)=" + String(10));
console.log("String(null)=" + String(null));
console.log("String(undefined)=" + String(undefined));


// 3，可以直接使用加号操作符把某个值与一个字符串加在一起。

console.log("\"a\" + 10=" + ("a" + 10));
