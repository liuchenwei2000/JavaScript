
var first = document.querySelector('#number1');
var second = document.querySelector('#number2');

var result = document.querySelector('#result');

if (window.Worker) {
	// 实例化 Worker 对象并传入要执行的 JavaScript 文件名就可以创建一个新的 Web Worker
	// 这行代码会导致浏览器下载 worker.js，但只有 Worker 接收到消息才会实际执行文件中的代码。
	var myWorker = new Worker("worker.js");

	first.onchange = function() {
		// 要给 Worker 传递消息，可以使用 postMessage() 方法，消息内容可以是任何能够被序列化的值
		// postMessage() 能接收对象参数，因此可以随便传递任何形式的对象数据
		// 一般来说，可以序列化为 JSON 结构的任何值都可以作为参数传递给 postMessage()。
		myWorker.postMessage([first.value,second.value]);
		console.log('Message posted to worker');
	};

	second.onchange = function() {
		myWorker.postMessage([first.value,second.value]);
		console.log('Message posted to worker');
	};

	/**
	 * Worker 是通过 message 和 error 事件与页面通信的，来自 Worker 的数据保存在 event.data 中
	 */
	myWorker.onmessage = function(event) {
		result.textContent = event.data;
		console.log('Message received from worker');
	};

	/**
	 * Worker 不能完成给定的任务时会触发 error 事件。
	 *
	 * 具体来说，Worker 内部的 JavaScript 在执行过程中只要遇到错误，就会触发 error 事件。
	 * 发生 error 事件时，事件对象中包含三个属性：filename、lineno 和 message，
	 * 分别表示发生错误的文件名、代码行号和完整的错误消息。
	 */
	myWorker.onerror = function(event){
		console.log("ERROR: " + event.filename + " (" + event.lineno + "): " +
			event.message);
	};

	/**
	 * 任何时候，只要调用 terminate() 方法就可以停止 Worker 的工作。
	 * 而且，Worker 中的代码会立即停止执行，后续的所有过程都不会再发生（包括 error 和 message 事件也不会再触发）。
	 */
	//worker.terminate(); // 立即停止 Worker 的工作
}