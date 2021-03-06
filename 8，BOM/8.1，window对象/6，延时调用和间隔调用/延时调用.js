
/**
 * JavaScript 是单线程语言，但它允许通过设置延时值和间隔时间值来调度代码在特定的时刻执行。
 * 前者是在指定的时间过后执行代码，而后者则是每隔指定的时间就执行一次代码。
 */

/**
 * 延时调用需要使用 window 对象的 setTimeout() 方法，它接受两个参数：
 * 要执行的代码和以毫秒表示的时间（即在执行代码前需要等待多少毫秒）。
 * 
 * 第一个参数可以是一个包含 JavaScript 代码的字符串（和 eval() 函数使用的字符串一样），
 * 也可以是一个函数。由于传递字符串可能导致性能损失，因此不建议以字符串作为第一个参数。
 * 
 * 第二个参数是一个表示等待多长时间的毫秒数，但经过该时间后指定的代码不一定会执行。
 * JavaScript 是一个单线程的解释器，因此一定时间内只能执行一段代码。
 * 为了控制要执行的代码，就有一个 JavaScript 任务队列。这些任务会按照将它们添加到队列的顺序执行。
 * 这个参数告诉 JavaScript 再过多长时间把当前任务添加到队列中。
 * 如果队列是空的，那么添加的代码会立即执行，否则它需要等前面的代码执行完毕才会执行。
 */

setTimeout("alert('Hello world.');", 1000);

setTimeout(function() {
	alert("Hello world.");
}, 2000);


/**
 * 调用 setTimeout() 之后，该方法会返回一个数值 ID，表示延时调用任务。
 * 这个 ID 是计划执行代码的唯一标识符，可以通过它来取消延时调用。
 * 要取消尚未执行的延时调用计划，可以调用 clearTimeout() 方法并将相应的延时调用 ID 作为参数传入。
 * 只要是在指定的时间尚未过去之前调用 clearTimeout()，就可以完全取消延时调用。
 */
var taskId = setTimeout(function() {
	alert("Hello world.");
}, 3000);

clearTimeout(taskId);
