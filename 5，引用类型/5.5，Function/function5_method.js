
// 函数方法：apply()、call、bind()

/**
 * 每个函数都包含两个非继承而来的方法：apply()和call()。
 * 这两个方法的用途都是指定在特定的作用域中调用函数，实际上等于设置函数体内this对象的值。
 * 
 * apply() 方法接收两个参数：
 * 一个是在其中运行函数的作用域（即this值），另一个是参数数组。
 * 第二个参数可以是 Array 的实例，也可以是 arguments 对象。
 * 
 * call() 方法与 apply() 方法的作用相同，区别仅在于接收参数的方式不同。
 * 第一个参数是 this 值，这跟 apply() 是一样的，其余参数都直接传递给函数。
 * 
 * 至于选择使用 apply() 还是 call()，完全取决于采取哪种给函数传递参数的方式更方便。
 */

function sum(num1, num2) {
	return num1 + num2;
}

function callSum1(num1, num2) {
	return sum.apply(this, arguments);// 传入 arguments 对象
}

function callSum2(num1, num2) {
	return sum.apply(this, [ num1, num2 ]);// 传入 数组
}

function callSum3(num1, num2) {
	return sum.call(this, num1, num2);// 逐一传入所有参数
}

console.console.log("callSum1(1,2)="+callSum1(1,2));
console.console.log("callSum2(1,2)="+callSum2(1,2));
console.console.log("callSum3(1,2)="+callSum3(1,2));

/**
 * 传递参数并非 apply() 和 call() 真正的用武之地，它们真正强大的地方是能够扩充函数赖以运行的作用域。
 * 使用 call() 与 apply() 来扩充作用域的最大好处，就是对象不需要与方法有任何耦合关系。
 */

window.color = "red";

var mine = {
	color : "blue"
};

function sayColor() {
	console.console.log("color=" + this.color);
}

sayColor();
sayColor.apply(this);
sayColor.apply(window);
sayColor.apply(mine);

// 函数的toString方法返回函数的源码
console.console.log("sum.toString()=" + sum.toString());
