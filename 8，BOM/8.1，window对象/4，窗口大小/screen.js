
/**
 * 跨浏览器确定一个窗口的大小也不是一件简单的事，虽然最终无法确定浏览器窗口本身的大小，但却可以取得页面视图的大小。
 */
function showScreenInfo() {
	var pageWidth = window.innerWidth;
	var pageHeight = window.innerHeight;

	if (typeof pageWidth != "number") {
		if (document.compatMode == "CSS1Compat") {
			pageWidth = document.documentElement.clientWidth;
			pageHeight = document.documentElement.clientHeight;
		} else {
			pageWidth = document.body.clientWidth;
			pageHeight = document.body.clientHeight;
		}
	}

	alert("[pageWidth, pageHeight]=[" + pageWidth + ", " + pageHeight + "]");
}

/**
 * 使用 resizeTo() 和 resizeBy() 方法可以调整浏览器窗口的大小。
 * 
 * 这两个方法都接收两个参数：
 * 其中 resizeTo() 接收浏览器窗口的新宽度和新高度，而 resizeBy() 接收的是浏览器窗口与原窗口的宽度和高度之差。。
 * 注：这两个方法可能会被浏览器禁用。
 */
function resizeScreenTo(){
	// 调整到 800 * 600
	window.resizeTo(800, 600);
}

function resizeScreenBy(){
	// 调大100 * 100。（负数表示调小）
	window.resizeBy(100, 100);
}