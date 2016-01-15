
/**
 * localStorage 对象在 HTML 5 规范中作为持久保存客户端数据的方案取代了 globalStorage。
 * 与 globalStorage 不同，不能给 localStorage 指定任何访问规则；规则事先就设定好了。
 * 要访问同一个 localStorage 对象，页面必须来自同一个域名（子域名无效），使用同一种协议，在同一个端口上。
 *
 * 存储在 localStorage 中的数据和存储在 globalStorage 中的数据一样，都遵循相同的规则：
 * 数据保留到通过 JavaScript 删除或者是用户清除浏览器缓存。
 */
// 使用方法存储数据
localStorage.setItem("user", "Tom");
// 使用属性存储数据
localStorage.message = "Hello World";
// 使用属性读取数据
console.log(localStorage.user);
// 使用方法读取数据
console.log(localStorage.getItem("message"));

for (var key in localStorage) {
	var value = localStorage.getItem(key);
	console.log(key + "=" + value);
}

