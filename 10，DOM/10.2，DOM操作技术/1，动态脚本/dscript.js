
/**
 * 动态脚本，指的是在页面加载时不存在，但将来的某一时刻通过修改 DOM 动态添加的脚本。
 * 跟操作 HTML 元素一样，创建动态脚本也有两种方式：插入外部文件和直接插入 JavaScript 代码。
 *
 * 代码会在全局作用域中执行，而且当脚本执行后将立即可用。
 * 实际上，这样执行代码与在全局作用域中把相同的字符串传递给 eval() 是一样的。
 */

// 动态加载外部文件的函数
function loadScript(url) {
	var script = document.createElement("script");
	script.type = "text/javascript";
	script.src = url;
	document.body.appendChild(script);
}

// 动态加载 JavaScript 代码的函数
function loadScriptString(jscode, callback) {
	var script = document.createElement("script");
	script.type = "text/javascript";
	// 下面的写法是为了适配不同的浏览器
	try{
		script.appendChild(document.createTextNode(jscode));
	}catch (ex) {
		script.text = jscode;
	}

	document.body.appendChild(script);

	callback();
}
