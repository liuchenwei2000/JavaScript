
/**
 * navigator 对象用于提供客户端浏览器类型的信息。
 */

window.onload = function() {
	// 返回浏览器的名称，通常都是 Mozilla（即便是非 Mozilla 浏览器），如 Mozilla
	log("navigator.appCodeName=" + navigator.appCodeName);
	// 返回浏览器次版本信息，如 0
	log("navigator.appMinorVersion=" + navigator.appMinorVersion);
	// 返回完整的浏览器名称，如 Microsoft Internet Explorer
	log("navigator.appName=" + navigator.appName);
	// 返回浏览器的版本，一般不与实际的浏览器版本对应，如 4.0 (compatible; MSIE 8.0; Windows NT 6.1; Win64; x64; Trident/4.0; .NET CLR 2.0.50727; SLCC2; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0)
	log("navigator.appVersion=" + navigator.appVersion);
	// 返回 cookie 是否启用，如 true
	log("navigator.cookieEnabled=" + navigator.cookieEnabled);
	// 返回客户端计算机使用的 CPU 类型，如 x64
	log("navigator.cpuClass=" + navigator.cpuClass);
	// 返回浏览器中是否启用了 java，如 true
	log("navigator.javaEnabled()=" + navigator.javaEnabled());
	// 返回在浏览器中注册的MIME类型数组，如 [object MimeTypeArray]
	log("navigator.mimeTypes=" + navigator.mimeTypes);
	// 返回浏览器中安装的插件信息的数组，如 [object HTMLPluginsCollection]
	log("navigator.plugins=" + navigator.plugins);
	for (var i = 0; i < navigator.plugins.length; i++) {
		var name = navigator.plugins[i].name;// 插件名字
		var des = navigator.plugins[i].description;// 插件描述
		var filename = navigator.plugins[i].filename;// 插件文件名
		log("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;plugin[name=" + name
				+ ", description=" + des + ", filename=" + filename);
	}
	// 返回浏览器的用户代理字符串，如 Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; Win64; x64; Trident/4.0; .NET CLR 2.0.50727; SLCC2; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0)
	log("navigator.userAgent=" + navigator.userAgent);
	// 返回浏览器的供应商信息，如 Google Inc.
	log("navigator.vendor=" + navigator.vendor);
};

function log(content) {
	var div = document.getElementById("div");
	div.innerHTML += content + "<br>";
}