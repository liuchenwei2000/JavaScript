
/**
 * 关于 Web Worker，它所执行的 JavaScript 代码完全在另一个作用域中，与主网页中的代码不共享作用域。
 * 在 Web Worker 中，同样有一个全局对象和其他对象以及方法。
 * 但是，Web Worker 中的代码不能访问 DOM，也无法通过任何方式影响主页面的外观。
 *
 * Web Worker 中的全局对象是 worker 对象本身。
 *
 * 在这个特殊的全局作用域中，this 和 self 引用的都是 worker 对象。
 * 为便于处理数据，Web Worker 本身也是一个最小化的运行环境:
 *
 * 1，最小化的 navigator 对象，包括 onLine、appName、appVersion、userAgent 和 platform 属性。
 * 2，只读的 location 对象。
 * 3，setTimeout()、setInterval()、clearTimeout() 和 clearInterval() 方法。
 * 4，XMLHttpRequest 构造函数。
 */

/**
 * 当主页面在 worker 对象上调用 postMessage() 时，数据会以异步方式被传递给 worker，
 * 进而触发 worker 中的 message 事件。为了处理来自页面的数据，同样也需要创建一个 onmessage 事件处理程序。
 *
 * 传递消息就是页面与 Worker 相互之间通信的方式。
 * 在 worker 中调用 postMessage() 会以异步方式触发主页面中 worker 实例的 message 事件。
 */
onmessage = function (event) {
    console.log('Message received from main script');
    var workerResult = parseInt(event.data[0]) + parseInt(event.data[1]);
    console.log('Posting message back to main script');
    // worker 完成工作后，通过调用 postMessage() 可以把数据再发回主页面
    postMessage(workerResult);
}

// 在 worker 内部，调用 close() 方法也可以停止工作，就像在主页面中调用 terminate()方法一样。
// self.close();