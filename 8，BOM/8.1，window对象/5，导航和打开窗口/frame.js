
/**
 * 使用 window.open() 方法既可以导航到一个特定的 URL，也可以打开一个新的浏览器窗口。
 * 
 * 这个方法接收4个参数：
 * 要加载的URL、窗口目标、一个特性字符串以及一个表示新页面是否取代浏览器历史记录中加载页面的布尔值。
 * 
 * 通常只需传递第一个参数，最后一个参数很少用到。如果传递了第二个参数，
 * 而且该参数是已有窗口或框架的名称，那么就会在其有该名称的窗口或框架中加载第一个参数指定的URL。
 */

var newTab = null;

function openURL(url) {
	/*
	 * 如果有一个名叫 “rightFrame” 的窗口或框架，就会在该窗口或框架加载这个 URL；
	 * 否则就会创建一个新窗口并把它命名为“rightFrame”。
	 * 此外，第二个参数可以是下列任何一个特殊的窗口名：
	 * _self、_parent、_top、_blank。 
	 */
	window.open(url, "rightFrame");
}

function openURL_Blank(url) {
	// window.open() 会返回一个指向新窗口的引用，引用的对象与其他 window 对象大致相似。
	newTab = window.open(url, "newTab");// 在指定新窗口中打开链接
}

function closeTab() {
	// 调用 close() 方法可以关闭新打开的窗口，该方法只适用于通过 window.open() 打开的弹出窗口。
	if (newTab != null) {
		newTab.close();
	}
}

function openerInfo() {
	/*
	 * 新创建的 window 对象有一个 opener 属性，其中保存着打开它的原始窗口对象。
	 * 这个属性只在弹出窗口中的最外层 window 对象中有定义，而且指向调用 window.open() 的窗口或框架。
	 */
	if (newTab != null) {
		alert("newTab.opener == window?" + (newTab.opener == window));
	}
}