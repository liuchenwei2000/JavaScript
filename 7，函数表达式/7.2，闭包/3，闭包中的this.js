
/**
 * 闭包中使用 this 对象会导致一些问题。
 * 
 * this 对象是在运行时基于函数的执行环境绑定的：在全局函数中，this 等于 window，
 * 而当函数被作为某个对象的方法调用时，this 等于那个对象。
 * 但是，匿名函数的执行环境具有全局性，因此其 this 对象通常指向 window。
 */

var name = "name in window";

var myObj = {
	name : "name in myObj",
	sayName : function() {
		return function() {
			return this.name;
		};
	}
};

console.log("myObj.sayName()()=" + myObj.sayName()());

/*
 * 每个函数在被调用时，其活动对象都会自动取得两个特殊变量：this 和 arguments。
 * 内部函数在搜索这两个变量时，只会搜索到其活动对象为止，因此永远不可能直接访问外部函数中的这两个变量。
 * 不过，把外部作用域中的 this 对象保存在一个闭包能够访问到的变量里，就可以让闭包访问该对象了。 
 */
var myObj2 = {
	name : "name in myObj2",
	sayName : function() {
		/*
		 * 把 this 变量赋值给一个名叫 that 的变量，在定义了闭包之后，闭包也可以访问这个变量，
		 * 因为它是在外部函数中特意声明的一个变量。即使在外部函数返回之后，that 也仍然引用着 myObj2。 
		 * arguments 也存在着同样的问题，如果想访问作用域中的 arguments 对象，必须将该对象引用保存在一个闭包能够访问的变量中。
		 */
		var that = this;
		return function() {
			return that.name;
		};
	}
};

console.log("myObj2.sayName()()=" + myObj2.sayName()());