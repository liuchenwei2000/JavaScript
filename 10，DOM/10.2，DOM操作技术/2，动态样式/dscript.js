
/**
 * 动态样式是指在页面刚加载时不存在的样式，它是在页面加载完成后动态添加到页面中的。
 */

// 动态加载 CSS 文件的函数
function loadCss(url) {
	var link = document.createElement("link");
	link.rel = "stylesheet";
	link.type = "text/css";
	link.href = url;
	document.head.appendChild(link);
}

// 动态加载 CSS 代码的函数
function loadCssString(csscode) {
	var style = document.createElement("style");
	style.type = "text/css";
	// 下面的写法是为了适配不同的浏览器
	try{
		style.appendChild(document.createTextNode(csscode));
	}catch (ex) {
		style.styleSheet.cssText = csscode;
	}

	document.head.appendChild(style);
}
