
/**
 * 1，要选择进入严格模式，可以使用严格模式的编译指示（pragma），实际上就是一个不会赋给任何变量的字符串。
 * 这种语法可以向后兼容那些不支持严格模式的 JavaScript 引擎。支持严格模式的引擎会启动这种模式，
 * 而不支持该模式的引擎就当遇到了一个未赋值的字符串字面量，会忽略这个编译指示。
 */

"use strict";

// 如果是在全局作用域中（函数外部）给出这个编译指示，则整个脚本都将使用严格模式。
// 换句话说，如果把带有这个编译指示的脚本放到其他文件中，则该文件中的 JS 代码也将处于严格模式下。

// 也可以只在函数中打开严格模式

function test(){
	"use strict";
	// do somthing
}


/**
 * 2，变量
 *
 * 不允许意外创建全局变量。在严格模式下，如果给一个没有声明的变量赋值，就会抛出 ReferenceError
 */

// ReferenceError: message is not defined
message = "Hello world";


/**
 * 3，对象
 *
 * 一般来说，非严格模式下会静默失败的情形，在严格模式下就会抛出错误。
 * 因此，在开发中使用严格模式会加大早发现错误的可能性。
 *
 * 在下列情形下操作对象的属性会导致错误：
 *
 * 为只读属性赋值会抛出 TypeError；
 * 对不可配置的（nonconfigurable）的属性使用 delete 操作符会抛出 TypeError；
 * 为不可扩展的（nonextensible）的对象添加属性会抛出 TypeError。
 */

// 在使用对象字面量时，属性名必须唯一。
var person = {
	name: "Nicholas",
	name: "Greg"
};

/**
 * 4，函数
 */

// 首先，严格模式要求命名函数的参数必须唯一。
function sum (num, num){
	// do something
}

// 其次，淘汰了 arguments.callee 和 arguments.caller。
// 在非严格模式下，这两个属性一个引用函数本身，一个引用调用函数。
// 而在严格模式下，访问哪个属性都会抛出 TypeError。

// 第三，只能在脚本的顶级和在函数内部声明函数。
// 也就是说，在 if 语句中声明函数会导致语法错误。

/**
 * 5，eval()
 *
 * 严格模式下，eval() 函数在包含上下文中不再创建变量或函数。
 * 可以在 eval()中声明变量和函数，但这些变量或函数只能在被求值的特殊作用域中有效，随后就将被销毁。
 */

function doSomething() {
	eval("var x=10");
	alert(x);// 严格模式下调用 alert(x) 时会抛出 ReferenceError
}

/**
 * 6，抑制 this
 *
 * 在非严格模式下使用函数的 apply() 或 call() 方法时， null 或 undefined 值会被转换为全局对象。
 * 而在严格模式下，函数的 this 值始终是指定的值，无论指定的是什么值。
 */

var color = "red";
function displayColor() {
	alert(this.color);
}

// 严格模式：抛出错误，因为 this 的值为 null
displayColor.call(null);

/**
 * 7，去掉八进制
 *
 * 严格模式去掉了 JavaScript 中的八进制字面量，八进制字面量已经成为无效的语法。
 */

var value = 010;

// 也修改了严格模式下 parseInt()的行为：八进制字面量在严格模式下会被当作以 0 开头的十进制字面量。
// 非严格模式：值为 8；严格模式：值为 10
var value = parseInt("010");