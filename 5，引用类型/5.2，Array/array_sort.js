
// 数组中有两个方法可以进行重排序：reverse()和sort()，方法的返回值都是经过排序之后的数组。

// 1，reverse 方法会反转数组项的顺序（即倒序）

var array1 = [ 1, 2, 3, 4, 5 ];
log("array1=" + array1);
array1.reverse();
log("after reverse() array1=" + array1);

// 2，sort 方法默认按升序排列数组项——即最小的值位于最前面，最大的值排在最后面。
// 为了实现排序，sort()方法会调用每个数组项的 toString() 转型方法，然后比较得到的字符串以确定如何排序。
// 即使数组中的每一项都是数值，sort()方法比较的也是字符串。

var array2 = [ 0, 1, 5, 10, 15 ];
log("array2=" + array2);
array2.sort();
log("after sort() array2=" + array2);


// sort 方法可以接收一个比较函数作为参数，以便指定哪个值位于哪个值的前面。
// 比较函数接收两个参数，如果第一个参数应该位于第二个之前则返回一个负数，
// 如果两个参数相等则返回0，如果第一个参数应该位于第二个之后则返回一个正数。

var compare1 = function(value1, value2) {
	if (value1 < value2) {
		return -1;
	} else if (value1 > value2) {
		return 1;
	} else {
		return 0;
	}
};

array2.sort(compare1);
log("after sort(compare1) array2=" + array2);

// 对于数值类型的数组，比较函数可以更加简单
var compare2 = function(value1, value2) {
	return value2 - value1;
};

array2.sort(compare2);
log("after sort(compare2) array2=" + array2);