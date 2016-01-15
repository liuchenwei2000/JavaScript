
/**
 * sessionStorage 对象是 Storage 的一个实例，用于存储特定于某个会话的数据，也就是该数据只保持到浏览器关闭。
 * 存储在 sessionStorage 中的数据可以跨越页面刷新而存在，同时如果浏览器支持，浏览器崩溃并重启之后依然可用。
 * 因为 seesionStorage 对象绑定于某个服务器会话，所以当文件在本地运行的时候是不可用的。
 * 存储在 sessionStorage 中的数据只能由最初给对象存储数据的页面访问到，所以对多页面应用有限制。
 *
 * 不同浏览器写入数据方面略有不同。Firefox 和 WebKit 实现了同步写入，所以添加到存储空间中的数据是立刻被提交的。
 * 而 IE 的实现则是异步写入数据，所以在设置数据和将数据实际写入磁盘之间可能有一些延迟。
 * 对于少量数据而言，这个差异是可以忽略的。对于大量数据，IE 要比其他浏览器更快地恢复执行，因为它会跳过实际的磁盘写入过程。
 *
 * sessionStorage 对象应该主要用于针对会话的小段数据的存储。
 * 如果需要跨越会话存储数据，那么 globalStorage 或者 localStorage 更为合适。
 */

// 使用方法存储数据
sessionStorage.setItem("name", "Nicholas");
// 使用属性存储数据
sessionStorage.book = "Professional JavaScript";
// 使用属性读取数据
console.log(sessionStorage.name);
// 使用方法读取数据
console.log(sessionStorage.getItem("book"));

// 可以通过结合 length 属性和 key() 方法来迭代 sessionStorage 中的值
for (var i = 0, len = sessionStorage.length; i < len; i++) {
	var key = sessionStorage.key(i);
	var value = sessionStorage.getItem(key);
	console.log(key + "=" + value);
}

// 也可以使用 for-in 循环来迭代 sessionStorage 中的值
for (var key in sessionStorage) {
	var value = sessionStorage.getItem(key);
	console.log(key + "=" + value);
}

// 要从 sessionStorage 中删除数据，可以使用 delete 操作符删除对象属性，也可调用 removeItem() 方法
sessionStorage.removeItem("name");
delete sessionStorage.book;