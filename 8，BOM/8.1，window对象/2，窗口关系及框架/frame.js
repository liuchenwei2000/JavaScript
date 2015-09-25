window.onload = function() {

	var div = document.getElementById("div");
	div.innerHTML += "window=" + window.name + "<br>";
	
	/**
	 * parent 对象始终指向当前框架的直接上层框架。
	 * 在某些情况下，parent 有可能等于 top，但在没有框架的情况下，parent 一定等于 top（此时它们都等于 window）。
	 */
	div.innerHTML += "parent.color=" + parent.color + "<br>";

	/**
	 * self 对象始终指向 window，实际上，这两个对象可以互换使用。
	 * 引入 self 对象的目的就是为了与 top 和 parent 对象对应起来，因此它不格外包含其他值。
	 */
	div.innerHTML += "self.color=" + self.color + "<br>";

	/**
	 * frames、top、parent、self 都是 window 对象的属性，可以通过 window.top、window.parent 等形式来访问。
	 * 同时这也意味着可以将不同层次的 window 对象连缀起来，如：self.parent.parent.frames[0]。
	 */
};