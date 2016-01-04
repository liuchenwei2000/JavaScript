
/**
 * document.write() 和 document.writeln()方法都接受一个字符串参数，即要写入到输出流中的文本。
 * write() 会原样写入，而 writeln() 则会在字符串的末尾添加一个换行符（\n）。
 * 在页面被加载的过程中，可以使用这两个方法向页面中动态地加入内容。
 */

// 这样做会创建一个 DOM 元素，而且可以在将来访问该元素。
document.write("<strong>" + (new Date()).toString() + "</strong>");

// 使用 document.write() 是在页面呈现的过程中直接向其中输出了内容，
// 如果要在文档加载结束后再调用 document.write()，那么输出的内容将会重写整个页面。

window.onload = function() {
	document.write("Hello world.");
};