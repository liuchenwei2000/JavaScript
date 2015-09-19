
// 迭代方法：every()、some()、filter()、map()、forEach()

/**
 * 每个方法都接收两个参数：第一个是要在每一项上运行的函数，第二项是运行该函数的作用域对象——影响this的值。后者是可选的。
 * 传入方法的函数会接收三个参数：数组项的值、该项在数组中的索引和数组对象本身。
 * 
 * 这五个方法都不会修改数组中项的值。
 */ 

/**
 * every()：对数组中的每一项运行给定函数，如果该函数对【每】一项都返回true，则方法返回true。
 * some()：对数组中的每一项运行给定函数，如果该函数对【任】一项都返回true，则方法返回true。
 * 
 * 它们都用于查询数组中的项是否满足某个条件。
 */ 

var number1 = [ 1, 2, 3, 4, 5, 4, 3, 2, 1 ];
log("number1=" + number1);

var everyResult = number1.every(function(item, index, array) {
	return item > 2;
});
log("everyResult=" + everyResult);

var someResult = number1.some(function(item, index, array) {
	return item > 2;
});
log("someResult=" + someResult);


/**
 * filter()：对数组中的每一项运行给定函数，返回该函数会返回true的项组成的数组。
 * 
 * 对查询符合某些条件的所有数组项非常有用。
 */
var filterResult = number1.filter(function(item, index, array) {
	return item > 2;
});
log("filterResult=" + filterResult);

/**
 * map()：对数组中的每一项运行给定函数，返回每次函数调用的结果组成的数组。
 * 
 * 返回一个数组，其内每一项都是在原始数组的对应项上运行传入函数的结果。
 * 适合创建包含的项与另一个数组一一对应的数组。
 */
var mapResult = number1.map(function(item, index, array) {
	return item * 2;
});
log("mapResult=" + mapResult);

/**
 * forEach()：对数组中的每一项运行给定函数，没有返回值。
 * 
 * 没有返回值，本质上与使用 for 循环迭代数组一样。
 */
var foreachResult = number1.forEach(function(item, index, array) {
	console.log(item);
});
