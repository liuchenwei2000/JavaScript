
/**
 * location 对象提供了与当前窗口中加载的文档有关的信息，还提供了一些导航功能。
 * 
 * 事实上，location 对象既是 window 对象的属性，又是 document 对象的属性，
 * 也就是说 window.location 和  document.location 引用的是同一个对象。
 */

// location 对象能够将 URL 解析为独立的片段，让开发人员可以通过不同的属性访问这些片段。
window.onload = function() {
	// 返回服务器名称和端口号（如果有），如 10.10.17.78:8080
	log("location.host=" + location.host);
	// 返回不带端口号的服务器名称，如 10.10.17.78
	log("location.hostname=" + location.hostname);
	// 返回URL中指定的端口号，如果没有则返回空字符串，如 8080
	log("location.port=" + location.port);
	// 返回当前加载页面的完整URL，如 http://10.10.17.78:8080/test/location.html?a=1&b=2#cdsvqerbqer232r23f
	log("location.href=" + location.href);
	// 返回URL中的目录和（或）文件名，如 /test/location.html
	log("location.pathname=" + location.pathname);
	// 返回页面使用的协议，如 http:
	log("location.protocol=" + location.protocol);
	// 返回URL的查询字符串，以问号开头，如 ?a=1&b=2
	log("location.search=" + location.search);
	// 返回URL中的hash（#号后跟零或多个字符），如果没有则返回空字符串，如 #cdsvqerbqer232r23f
	log("location.hash=" + location.hash);
};

function log(content) {
	var div = document.getElementById("div");
	div.innerHTML += content + "<br>";
}