
/**
 * 由于 JavaScript 中读写 cookie 不是非常直观，常常需要写一些函数来简化 cookie 的功能。
 * 基本的 cookie 操作有三种：读取、写入和删除。
 * 这些方法通过处理解析、构造 cookie 字符串的任务令在客户端利用 cookie 存储数据更加简单。
 * 如下表示：
 */

var CookieUtil = {
	// 根据 cookie 的名字获取相应的值
	get: function (name) {
		var cookieName = encodeURIComponent(name) + "=",
			cookieStart = document.cookie.indexOf(cookieName),
			cookieValue = null;
		if (cookieStart > -1) {
			var cookieEnd = document.cookie.indexOf(";", cookieStart);
			if (cookieEnd == -1) {
				cookieEnd = document.cookie.length;
			}
			cookieValue = decodeURIComponent(document.cookie.substring(cookieStart
				+ cookieName.length, cookieEnd));
		}
		return cookieValue;
	},

	// 在页面上设置一个 cookie，接收如下几个参数：cookie 的名称，cookie 的值，
	// 用于指定 cookie 何时应被删除的 Date 对象，cookie 的 URL 路径，域，以及表示是否要添加 secure 标志的布尔值。
	// 参数是按照它们的使用频率排列的，只有头两个是必需的。
	set: function (name, value, expires, path, domain, secure) {
		var cookieText = encodeURIComponent(name) + "=" +
			encodeURIComponent(value);
		if (expires instanceof Date) {
			cookieText += "; expires=" + expires.toGMTString();
		}
		if (path) {
			cookieText += "; path=" + path;
		}
		if (domain) {
			cookieText += "; domain=" + domain;
		}
		if (secure) {
			cookieText += "; secure";
		}
		document.cookie = cookieText;
	},

	// 没有删除已有 cookie 的直接方法。
	// 所以需要使用相同的路径、域和安全选项再次设置 cookie，并将失效时间设置为过去的时间。
	unset: function (name, path, domain, secure) {
		this.set(name, "", new Date(0), path, domain, secure);
	}
};

// 设置 cookie
CookieUtil.set("name", "Nicholas");
CookieUtil.set("book", "Professional JavaScript");

// 读取 cookie 的值
console.log(CookieUtil.get("name"));
console.log(CookieUtil.get("book"));

// 删除 cookie
CookieUtil.unset("name");
CookieUtil.unset("book");

// 设置 cookie，包括它的路径、域、失效日期
CookieUtil.set("name", "Nicholas", "/books/projs/", "www.google.com", new Date("January 1, 2010"));

// 删除刚刚设置的 cookie
CookieUtil.unset("name", "/books/projs/", "www.google.com");

console.log(CookieUtil.get("name"));
