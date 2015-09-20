
// 位置方法：indexOf()、lastIndexOf()

/**
 * 这两个方法都接收两个参数：要查找的项和表示查找起始位置的索引（这是可选的）。
 * 其中，indexOf() 方法从数组的头部（位置0）开始向后查找，lastIndexOf() 方法则从数组的末尾开始向前查找。
 * 这两个方法的都返回要查找的项在数组中的位置，或者在没有找到的情况下返回 -1。
 */ 

var number1 = [ 1, 2, 3, 4, 5, 4, 3, 2, 1 ];

console.log("number1=" + number1);
console.log("number1.indexOf(4)=" + number1.indexOf(4));
console.log("number1.lastIndexOf(4)=" + number1.lastIndexOf(4));
console.log("number1.indexOf(4,4)=" + number1.indexOf(4, 4));
console.log("number1.lastIndexOf(4,4)=" + number1.lastIndexOf(4, 4));

// 在比较参数和元素相等性的时候，会使用全等操作符（===）。

var person = {
	name : "tom"
};

var people1 = [ {
	name : "tom"
} ];

var people2 = [ person ];

console.log("people1.indexOf(person)=" + people1.indexOf(person));
console.log("people2.indexOf(person)=" + people2.indexOf(person));
