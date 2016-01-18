
/**
 * 页面可视化 API
 *
 * 不知道用户是不是正在与页面交互，这是困扰广大 Web 开发人员的一个主要问题。
 * 如果页面最小化或者隐藏在其他标签页后面，那么有些功能是可以停下来的，比如轮询服务器或者某些动画效果。
 * 而 Page Visibility API（页面可见性 API）就是为了让开发人员知道页面是否对用户可见而推出的。
 */

// 1，document.hidden 表示页面是否隐藏的布尔值。页面隐藏包括页面在后台标签页中或者浏览器最小化。
console.log(document.hidden);

// 2，visibilitychange 事件 为了在页面从可见变为不可见或从不可见变为可见时收到通知，可以侦听该事件。
document.addEventListener("visibilitychange", function (event) {
	if (document.hidden) {
		console.log("Page is now hidden.");
	} else {
		console.log("Page is now visible.");
	}
});

/**
 * 3，document.visibilityState
 *
 * 表示页面的显示状态，有下面 4 个可能的值：
 *
 * hidden：页面在后台标签页中或浏览器最小化。
 * visible：页面在前台标签页中。
 * prerender：实际的页面已经隐藏，但用户可以看到页面的预览。
 * unloaded：文档正在从内存中卸载。
 */

document.addEventListener("visibilitychange", function (event) {
	console.log(document.visibilityState);
});