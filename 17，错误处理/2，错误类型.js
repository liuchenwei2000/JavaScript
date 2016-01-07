/**
 * 执行代码期间可能会发生的错误有多种类型。每种错误都有对应的错误类型，而当错误发生时，就会抛出相应类型的错误对象。
 * ECMA-262 定义了下列 7 种错误类型：
 *
 * Error、EvalError、RangeError、ReferenceError、SyntaxError、TypeError、URIError。
 *
 * 其中，Error 是基类型，其他错误类型都继承自该类型。
 */

/**
 * EvalError 类型的错误会在使用 eval() 函数而发生异常时被抛出。
 * 简单地说，如果没有把 eval()当成函数调用，就会抛出错误。
 */
new eval(); // 抛出 EvalError
eval = foo; // 抛出 EvalError

/**
 * RangeError 类型的错误会在数值超出相应范围时触发。
 */
var items1 = new Array(-20); // 抛出 RangeError
var items2 = new Array(Number.MAX_VALUE); // 抛出 RangeError

/**
 * 在找不到对象的情况下，会发生 ReferenceError。
 * 通常，在访问不存在的变量时，就会发生这种错误，
 */
var obj = x; // 在 x 并未声明的情况下抛出 ReferenceError

/**
 * SyntaxError 当把语法错误的 JavaScript 字符串传入 eval()函数时，就会导致此类错误。
 */
eval("a ++ b"); // 抛出 SyntaxError

/**
 * TypeError 类型在 JavaScript 中会经常用到，
 * 在变量中保存着意外的类型时，或者在访问不存在的方法时，都会导致这种错误。
 * 错误的原因虽然多种多样，但归根结底还是由于在执行特定于类型的操作时，变量的类型并不符合要求所致。
 * 最常发生类型错误的情况，就是传递给函数的参数事先未经检查，结果传入类型与预期类型不相符。
 */
alert("name" in true); // 抛出 TypeError
Function.prototype.toString.call("name"); // 抛出 TypeError

/**
 * 在使用 encodeURI()或 decodeURI()，而 URI 格式不正确时，就会导致 URIError 错误。
 */


// 利用不同的错误类型，可以获悉更多有关异常的信息，从而有助于对错误作出恰当的处理。

try {
    someFunction();
} catch (error) {
    if (error instanceof TypeError) {//处理类型错误

    } else if (error instanceof ReferenceError) {//处理引用错误

    } else {//处理其他类型的错误

    }
}