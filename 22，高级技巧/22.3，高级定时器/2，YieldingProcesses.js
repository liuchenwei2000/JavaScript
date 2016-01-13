
/**
 * 运行在浏览器中的 JavaScript 都被分配了一个确定数量的资源。
 * 不同于桌面应用往往能够随意控制想要的内存大小和处理器时间，
 * JavaScript 被严格限制了，以防止恶意的 Web 程序把用户的计算机搞崩溃。
 * 其中一个限制是对长时间运行脚本的制约：如果代码运行超过特定的时间或者特定语句数量就不让它继续执行。
 *
 * 如果代码达到了这个限制，会弹出一个浏览器错误的对话框，告诉用户某个脚本会用过长的时间执行，询问是允许其继续执行还是停止它。
 * 所有 JavaScript 开发人员的目标就是，确保用户永远不会在浏览器中看到这个令人费解的对话框。定时器是绕开此限制的方法之一。
 *
 * 脚本长时间运行的问题通常是由两个原因之一造成的：过长的、过深嵌套的函数调用或者是进行大量处理的循环。
 * 由于 JavaScript 的执行是一个阻塞操作，脚本运行所花时间越久，用户无法与页面交互的时间也越久。
 */

/**
 * 可以使用定时器分割大量处理的循环。
 *
 * 这是一种叫做数组分块（array chunking）的技术，小块小块地处理数组，通常每次一小块。
 * 基本的思路是为要处理的数据创建一个队列，然后使用定时器取出下一个要处理的数据进行处理，接着再设置另一个定时器。
 * 在数组分块模式中，array 变量本质上就是一个“待办事宜”列表，它包含了要处理的项目。
 */

setTimeout(function () {
    // 取出下一个条目并处理
    var item = array.shift();
    console.log(item);// do somthing with item

    // 若还有条目，再设置另一个定时器
    if (array.length > 0) {
        setTimeout(arguments.callee, 100);
    }
}, 100);

// 更通用的实现方式如下，方法接受三个参数：待处理数据的数组，用于处理数据的函数，以及可选的运行该函数的环境。
function chunk(array, process, context) {
    setTimeout(function () {
        var item = array.shift();
        process.call(context, item);
        if (array.length > 0) {
            setTimeout(arguments.callee, 100);
        }
    }, 100);
}