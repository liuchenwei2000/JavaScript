
// 函数的内部属性：caller

/**
 * 3，caller 属性中保存着调用当前函数的函数的引用，如果是在全局作用域中调用当前函数，它的值为 null。
 */

function outer() {
	inner();
}

function inner(){
	// 这里会显示调用 inner() 的函数源代码
	log("caller=" + inner.caller);
	// 如果想更松散的耦合，可以采用下面的写法
	log("arguments.callee.caller=" + arguments.callee.caller);
}

outer();