
// 缩小数组的方法：reduce()、reduceRight()

/**
 * 这两个方法都会迭代数组的所有项，然后构建一个最终返回的值。
 * 其中，reduce() 方法从数组的第一项开始，逐个遍历到最后。
 * 而 reduceRight() 则从数组的最后一项开始，向前遍历到第一项。
 * 
 * 这两个方法都接收两个参数：一个是在每一项上调用的函数，另一个是作为缩小基础的初始值（可选的）。
 * 第一个参数函数接收4个参数：前一个值、当前值、项的索引和数组对象。
 * 这个函数返回的任何值都会作为第一个参数自动传给下一项。
 * 第一次迭代发生在数组的第二项上，因此第一个参数是数组的第一项，第二个参数就是数组的第二项。
 */ 

var number1 = [ 1, 2, 3, 4, 5 ];
console.log("number1=" + number1);

// 数组求和
var sum = number1.reduce(function(prev, cur, index, array) {
	return prev + cur;
});
console.log("sum=" + sum);