
/**
 * 闭包
 * 
 * 闭包是指有权访问另一个函数作用域中变量的函数。创建闭包的常见方式，就是在一个函数内部创建另一个函数。
 */

function createComparisonFunction(propName) {
	return function(object1, object2) {
		/*
		 * 这里访问了外部函数的变量 propName，因此该内部函数是个闭包。
		 */ 
		var value1 = object1[propName];
		/*
		 * 即使这个内部函数被返回了，而且是在其他地方被调用了，但它仍然可以访问 propName。
		 * 之所以还能够访问这个变量，是因为内部函数的作用域链中包含 createComparisonFunction() 的作用域。
		 */
		var value2 = object2[propName];

		return value1 - value2;
	};
}

/**
 * 函数被调用时发生的事情对理解闭包很重要，下面是详述：
 * 
 * 当某个函数第一次被调用时，会创建一个执行环境及相应的作用域链，并把作用域链赋值给一个特殊的内部属性。
 * 然后使用this、arguments和其他命名参数的值来初始化函数的活动对象。但在作用域链中，
 * 外部函数的活动对象始终处于第二位，外部函数的外部函数的活动对象处于第三位……直到作为作用域链终点的全局执行环境。
 */

function compare(value1, value2) {
	return value1 - value2;
}

/*
 * 当第一次调用 compare() 时，会创建一个包含 this、arguments、values1 和 value2 的（局部）活动对象。
 * 全局执行环境的活动对象（this、result 和 compare）在 compare() 执行环境的作用域链中则处于第二位。
 */
var result = compare(1, 2);

/**
 * 在后台执行环境中，闭包的作用域链包含着它自己的作用域、包含函数的作用域和全局作用域。
 * 通常，函数的作用域及其所有变量都会在函数执行结束后被销毁，内存中仅保存全局作用域（全局执行环境的变量对象）。
 * 但是，当函数返回了一个闭包时，这个函数的作用域将会一直在内存中保存到闭包不存在为止。
 *
 * 由于闭包会携带包含它的外部函数的作用域，因此会比其他函数占用更多的内存，过度使用可能会导致内存占用过多。
 */

var compareByName = createComparisonFunction("name");// 创建函数

var obj1 = {name:"tom"};
var obj2 = {name:"ann"};
var resultByName = compareByName(obj1,obj2);// 调用函数

compareByName = null;// 解除对匿名函数的引用（即销毁），以便释放内存
