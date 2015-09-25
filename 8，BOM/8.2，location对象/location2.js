
/**
 * 定位操作
 * 
 * location 对象可以通过很多方式来改变浏览器的定位，修改 location 对象的属性可以改变当前加载的页面。
 * 本例通过将 href、hostname、pathname、port、search、hash 设置为新值来改变URL。
 * 每次修改 location 的属性（除了hash），页面都会以新URL重新加载。
 */

function changeHref() {
	location.href = "http://localhost:8080";
	// 等价于下面的两种方式
//	window.location = "http://localhost:8080";
//	location.assign("http://localhost:8080");
}

function changeHostname() {
	location.hostname = "localhost";
}

function changePathname() {
	location.pathname = "/test/location.html";
}

function changePort() {
	location.port = "8080";
}

function changeSearchString() {
	location.search = "?c=1&d=2";
}

function changeHash() {
	location.hash = "#aaaaaaaaaaaaaa";
}

// 当通过上述任何一种方式修改URL之后，浏览器的历史记录中就会生成一条新纪录，因此用户可以可以通过"后退"按钮导航到前一个页面。

/**
 * reload() 方法可以重新加载当前显示的页面。
 * 
 * 如果不传递任何参数，页面就会以最有效的方式重新加载，
 * 也就是说，如果页面自上次请求以来并没有改变过，页面就会从浏览器缓存中重新加载。
 * 如果要强制从服务器重新加载，则需要传入参数 true。 
 */
function reload() {
	// 位于 reload() 之后的代码可能不会执行，这要取决于网络延迟或系统资源等因素。
	// 为此，需要把 reload() 放在代码的最后一行。
	location.reload();
//	location.reload(true);
}
