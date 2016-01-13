
/**
 * 函数柯里化（function currying），它用于创建已经设置好了一个或多个参数的函数。
 * 函数柯里化的基本方法和函数绑定是一样的：使用一个闭包返回一个函数。
 * 两者的区别在于，柯里化当函数被调用时，返回的函数还需要设置一些传入的参数。
 */

function add(a, b) {
    return a + b;
}

function curryAdd5(a) {
    return function () {
        return add(a, 5);
    };
}

console.log(add(1, 2));

var curryAdd = curryAdd5(3);
console.log(curryAdd());

// 柯里化函数通常由以下步骤动态创建：调用另一个函数并为它传入要柯里化的函数和必要参数。
// 下面是创建柯里化函数的通用方式：

// 1，curry() 的第一个参数是要进行柯里化的函数，其他参数是要传入的值。
function curry(fn) {
    // 2，为了获取第一个参数之后的所有参数，在 arguments 对象上调用了 slice()方法，
    // 并传入参数 1 表示被返回的数组包含从第二个参数开始的所有参数。
    // 然后 args 数组包含了来自外部函数的参数。
    var args = Array.prototype.slice.call(arguments, 1);

    return function () {
        // 3，在内部函数中，创建了 innerArgs 数组用来存放所有传入内部函数的参数
        var innerArgs = Array.prototype.slice.call(arguments);
        // 4，有了存放来自外部函数和内部函数的参数数组后，就可以使用 concat()方法将它们组合为 finalArgs
        var finalArgs = args.concat(innerArgs);
        // 5，使用 apply() 将参数传递给该函数。注意这个函数并没有考虑到执行环境，所以第一个参数是 null。
        return fn.apply(null, finalArgs);
    };
}

// 5 这个参数对应 var args = Array.prototype.slice.call(arguments, 1); 中的 arguments
var curryAdd = curry(add, 5);
// 3 这个参数对应 var innerArgs = Array.prototype.slice.call(arguments); 中的 arguments
console.log(curryAdd(4));
// 也可以像下面这样
var curryAdd = curry(add, 5, 7);
console.log(curryAdd());

/**
 * 函数柯里化还常常作为函数绑定的一部分包含在其中，构造出更为复杂的 bind() 函数。
 *
 * ES5 的 bind() 方法也实现了函数柯里化，只要在 this 的值之后再传入另一个参数即可。
 */

function bind(fn, context){
    // 这里要去掉前两个参数（fn、context）
    var args = Array.prototype.slice.call(arguments, 2);
    return function(){
        var innerArgs = Array.prototype.slice.call(arguments);
        var finalArgs = args.concat(innerArgs);
        // fn 绑定到给定环境
        return fn.apply(context, finalArgs);
    };
}

/**
 * JavaScript 中的柯里化函数和绑定函数提供了强大的动态函数创建功能。
 * 使用 bind() 还是 curry() 要根据是否需要 object 对象响应来决定。
 * 它们都能用于创建复杂的算法和功能，当然两者都不应滥用，因为每个函数都会带来额外的开销。
 */