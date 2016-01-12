
/**
 * 函数绑定要创建一个函数，可以在特定的 this 环境中以指定参数调用另一个函数。
 * 该技巧常常和回调函数与事件处理程序一起使用，以便在将函数作为变量传递的同时保留代码执行环境。
 *
 * 只要是将某个函数指针以值的形式进行传递，同时该函数必须在特定环境中执行，被绑定函数的效用就突显出来了。
 * 它们主要用于事件处理程序以及 setTimeout() 和 setInterval()。
 * 然而，被绑定函数与普通函数相比有更多的开销，它们需要更多内存，同时也因为多重函数调用稍微慢一点，所以最好只在必要时使用。
 */

var handler = {

    message: "Hello World",

    handleEvent: function () {
        console.log(this.message);
    }
};

handler.handleEvent();// Hello World

function on(callback) {
    callback();
}

on(handler.handleEvent);// undefined

/**
 * 问题在于没有保存 handler.handleEvent() 的环境，所以 this 对象最后是指向了全局对象而非 handler
 * 可以使用一个闭包来修正这个问题。下面使用一个闭包直接调用 handler.handleClick()。
 */

on(function () {
    handler.handleEvent();
});// Hello World

/**
 * 当然，这是特定于这段代码的解决方案。创建多个闭包可能会令代码变得难于理解和调试。
 * 因此，很多 JavaScript 库实现了一个可以将函数绑定到指定环境的函数。这个函数一般都叫 bind()。
 *
 * 一个简单的 bind() 函数接受一个函数和一个环境，并返回一个在给定环境中调用给定函数的函数，并且将所有参数原封不动传递过去。
 */

function bind(fn, context) {
    // 在 bind()中创建了一个闭包，闭包使用 apply()调用传入的函数，并给 apply() 传递 context 对象和参数。
    // 注意这里使用的 arguments 对象是内部函数的，而非 bind() 的。
    // 当调用返回的函数时，它会在给定环境中执行被传入的函数并给出所有参数。
    return function () {
        return fn.apply(context, arguments);
    };
}

on(bind(handler.handleEvent, handler));// Hello World

/**
 * ES5 为所有函数定义了一个原生的 bind() 方法，进一步简单了操作。
 * 换句话说，不用再自己定义 bind() 函数了，而是可以直接在函数上调用这个方法。
 *
 * 原生的 bind() 方法与前面介绍的自定义 bind() 方法类似，都是要传入作为 this 值的对象。
 */

on(handler.handleEvent.bind(handler));// Hello World