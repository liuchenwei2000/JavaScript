
/**
 * JavaScript 内置的类型检测机制并非完全可靠。事实上，发生错误的情况也不在少数。
 */

/**
 * instanceof 操作符在存在多个全局作用域（像一个页面包含多个 frame）的情况下，也是问题多多。
 *
 * 下面的代码要返回 true，value 必须是一个数组，而且还必须与 Array 构造函数在同个全局作用域中。
 * Array 是 window 的属性，如果 value 是在另个 frame 中定义的数组，那么下面的代码就会返回 false。
 */

// var isArray = value instanceof Array;


/**
 * 在任何值上调用 Object 原生的 toString()方法，都会返回一个
 * [object NativeConstructorName]格式的字符串。
 * 每个类在内部都有一个 [[Class]] 属性，这个属性中就指定了上述字符串中的构造函数名。
 *
 * 由于原生数组的构造函数名与全局作用域无关，因此使用 toString()就能保证返回一致的值。
 */

function isArray(value){
    return Object.prototype.toString.call(value) == "[object Array]";
}

// 同样，也可以基于这一思路来测试某个值是不是原生函数或正则表达式：
function isFunction(value){
    return Object.prototype.toString.call(value) == "[object Function]";
}

function isRegExp(value){
    return Object.prototype.toString.call(value) == "[object RegExp]";
}