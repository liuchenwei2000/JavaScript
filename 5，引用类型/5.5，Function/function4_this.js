
// 函数的内部属性：this

/**
 * 2，this 的行为与 Java 中的 this 大致相似。
 * 它引用的是函数据以执行的环境对象，当在网页的全局作用域中调用函数时，this 对象引用的就是 window。
 */

window.color = "red";

var mine = {
	color : "blue"
};

function sayColor() {
	// sayColor() 是在全局作用域中定义的，它引用了 this 对象。
	// 由于在调用函数之前， this 的值并不确定，因此 this 可能会在代码执行过程中引用不同的对象。
	console.log("color=" + this.color);
}

sayColor();// 在全局作用域中调用 sayColor()，this引用的是全局对象 window

mine.sayColor = sayColor;

mine.sayColor();// 在 mine 对象作用域中调用 sayColor()，this引用的是对象 mine
