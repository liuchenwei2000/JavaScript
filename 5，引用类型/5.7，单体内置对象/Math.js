
/**
 * Math 对象
 * 
 * ECMAScript 还为保存数学公式和信息提供了一个公共位置，即 Math 对象。
 * 与在 JavaScript 直接编写的计算功能相比，Math 对象提供的计算功能执行起来要快得多，另外它还提供了辅助完成这些计算的属性和方法。
 */

/**
 * 1，Math 对象的属性
 * 
 * Math 对象的属性大都是数学计算中可能会用到的一些特殊值。
 */

console.log("Math.E=" + Math.E);// 自然常数 e
console.log("Math.PI=" + Math.PI);// 圆周率
console.log("Math.SQRT2=" + Math.SQRT2);// 2 的平方根


/**
 * 2，Math 对象的方法
 * 
 * Math 对象的方法用于辅助完成简单和复杂的数学计算。
 */

// min() 和 max() 方法用于确定一组数值中的最小值和最大值，可以接收任意多个数值参数。
console.log("Math.min(2,3,7,1,0,5)=" + Math.min(2, 3, 7, 1, 0, 5));
console.log("Math.max(2,3,7,1,0,5)" + Math.max(2, 3, 7, 1, 0, 5));

// 要找到数组中的最大值或最小值，可以像下面那样使用 apply() 方法：
var array = [ 8, 2, 1, 4, 9, 3, 5 ];
var max = Math.max.apply(Math, array);
console.log("max=" + max);

// 其他一些数学计算方法
console.log("Math.sin(30)=" + Math.sin(30));// 正弦
console.log("Math.abs(-30)=" + Math.abs(-30));// 绝对值
console.log("Math.log(20)=" + Math.log(10));// 自然对数
console.log("Math.pow(2,10)=" + Math.pow(2, 10));// 2的10次幂
console.log("Math.sqrt(10)=" + Math.sqrt(10));// 平方根

/**
 * 3，舍入方法
 * 
 * Math.ceil()：向上舍入，将数值向上舍入为最接近的整数。 
 * Math.floor()：向下舍入，将数值向下舍入为最接近的整数。
 * Math.round()：标准舍入，将数值四舍五入为最接近的整数。
 */

console.log("Math.ceil(3.5)=" + Math.ceil(3.5));
console.log("Math.floor(3.5)=" + Math.floor(3.5));
console.log("Math.round(3.5)=" + Math.round(3.5));


/**
 * 4，random() 方法
 * 
 * Math.random() 方法返回介于 0 和 1 之间的一个随机数，不包括 0 和 1.
 */

console.log("Math.random()=" + Math.random());

// 可以利用下面的技巧从某个整数范围（如从0到100）内随机选择一个值。
var firstValue = 0;
var total = 100;
var ran = Math.floor(Math.random() * total + firstValue);
console.log("random from 0 to 100=" + ran);
