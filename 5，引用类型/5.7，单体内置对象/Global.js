
/**
 * Global 对象
 * 
 * Global 对象在某种意义上是作为一个终极的“兜底儿对象”来定义的，也就说，
 * 不属于任何其他对象的属性和方法，最终都是它的属性和方法。
 * 事实上，没有全局变量或全局函数，所有在全局作用域定义的属性和函数，都是属于 Global 对象的。
 * 诸如 isNan()、parseInt()、parseFloat()，实际上全都是 Global 对象的方法。
 */

/**
 * 1，URI 编码方法
 * 
 * encodeURI() 和 encodeURIComponent() 方法可以对 URI 进行编码，以便发送给浏览器。
 * 有效的 URI 中不能包含某些字符，例如空格。
 * 而这两个方法可以对 URI 进行编码，它们使用特殊的 UTF-8 编码替换所有无效的字符，从而让浏览器能够接受和理解。
 */ 

var uri = "http://www.google.com/query.html?name=Tom Green";

// encodeURI() 主要用于整个 URI 进行编码。
// 它不会对本身属于 URI 的特殊字符进行编码，比如冒号、正斜杠、问号和井号。
console.log("encodeURI(uri)=" + encodeURI(uri));

// encodeURIComponent() 主要用于 URI 中的某一段进行编码，会对它发现的任何非标准字符进行编码。
// 一般来说，使用 encodeURIComponent() 方法的时候要比使用 encodeURI() 更多，
// 因为在实践中更常见的是对查询字符串参数而不是对基础 URI 进行编码。
console.log("encodeURIComponent(uri)=" + encodeURIComponent(uri));


/**
 * 2，URI 解码方法
 * 
 * encodeURI() 和 encodeURIComponent() 方法对应的解码方法分别是 decodeURI() 和 decodeURIComponent()，
 * 其中 decodeURI() 只能对使用 encodeURI() 替换的字符进行解码；
 * decodeURIComponent() 能够解码使用 encodeURIComponent() 编码的所有字符，即它可以解码任何特殊字符的编码。 
 */

var uri2 = "http%3A%2F%2Fwww.google.com%2Fquery.html%3Fname%3DTom%20Green";

console.log("decodeURI(uri2)=" + decodeURI(uri2));
console.log("decodeURIComponent(uri2)=" + decodeURIComponent(uri2));


/**
 * 3，eval() 方法
 * 
 * eval() 方法就像是一个完整的 ECMAScript 解析器，它只接受一个参数，即要执行的 ECMAScript（或JavaScript） 字符串。
 * 
 * 能够解释代码字符串的能力非常强大，但也非常危险，特别是用在执行用户输入数据的情况下。
 * 可能会有恶意用户输入威胁站点或应用程序安全的代码（即所谓的代码注入）。
 */

eval("console.log('in eval()');");// 和直接执行 console.log('in eval()'); 一样的效果

// 通过 eval() 执行的代码被认为是包含该次调用的执行环境的一部分，因此被执行的代码具有与该执行环境相同的作用域链。
// 这意味着通过 eval() 执行的代码可以引用在包含环境中定义的变量或函数。

var name = "Tom";
eval("console.log(name);");

function sayHi(){
	console.log("Hi");
}

eval("sayHi();");

// 同样的，也可以在 eval() 中定义一个变量或函数，然后在该调用的外部代码中使用这个变量或函数。
// 在 eval() 中创建的任何变量或函数都不会被提升，因为在解析代码的时候，它们被包含在一个字符串中，它们只在 eval() 执行的时候创建。

// console.log(message); // 此时使用 message 变量会出错
eval("var message = \"I'm in eval().\";");
console.log(message);

eval("function sayHello(){ console.log(\"Hello\");}");
sayHello();


/**
 * 4，Global 对象的属性
 * 
 * Infinity		特殊值表示正的无穷大。
 * NaN			特殊值表示非数字值。
 * undefined	特殊值表示一个变量未被初始化。
 * Object		构造函数 Object
 * Array		构造函数 Array
 * Function		构造函数 Function
 * Boolean		构造函数 Boolean
 * String		构造函数 String
 * Number		构造函数 Number
 * Date			构造函数 Date
 * RegExp		构造函数 RegExp
 * Error		构造函数 Error
 * EvalError	构造函数 EvalError
 * RangeError	构造函数 RangeError
 * SyntaxError	构造函数 SyntaxError
 * TypeError	构造函数 TypeError
 * URIError		构造函数 TypeError	
 * ReferenceError构造函数 ReferenceError
 */

/**
 * 5，window 对象
 * 
 * ECMAScript 虽然没有指出如何直接访问 Global 对象，但 Web 浏览器都是将这个全局对象作为 window 对象的一部分加以实现的。
 * 因此，在全局作用域中声明的所有变量和函数，就都成为了 window 对象的属性。
 */

var color = "red";// 实际上是一个全局变量

function sayColor() {// 实际上是一个全局函数
	console.log(window.color);// 指定 window 对象进行调用
}

window.sayColor();// 指定 window 对象进行调用

console.log("window === this ? " + (window === this));// 实际上，window 对象就是 this
