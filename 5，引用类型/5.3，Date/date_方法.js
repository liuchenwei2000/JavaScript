
// 1，继承的方法：toString()、toLocaleString()、valueOf()。

// toLocaleString() 方法会按照与浏览器设置的地区相适应的格式返回日期和时间。
// toString() 方法则通常返回带有时区信息的日期和时间，其中时间一般是24小时制。
// 这两个方法在不同的浏览器中返回的日期和时间格式也不一致，事实上，它们的这一差别仅在调试代码时比较有用，而在显示日期和时间时并没有什么价值。

var now = new Date();
console.log("now.toString()=" + now.toString());
console.log("now.toLocaleString()=" + now.toLocaleString());

// valueOf() 方法返回日期的毫秒表示，因此可以方便使用比较操作符来比较日期值。

var date1 = new Date(2014, 8, 1);
var date2 = new Date(2014, 9, 1);

console.log("date1.valueOf() < date2.valueOf()=" + (date1.valueOf() < date2.valueOf()));


// 2，格式化方法：toDateString()、toTimeString()、toLocaleDateString()、toLocaleTimeString()、toUTCString()。
// 这些格式化方法的输出也是因浏览器而异的，因此没有哪一个方法能够用来在用户界面显示一致的日期信息。

console.log("now.toDateString()=" + now.toDateString());
console.log("now.toTimeString()=" + now.toTimeString());
console.log("now.toLocaleDateString()=" + now.toLocaleDateString());
console.log("now.toLocaleTimeString()=" + now.toLocaleTimeString());
console.log("now.toUTCString()=" + now.toUTCString());


// 3，组件方法：都是直接获取或设置日期值中特定部分的方法。

now.setFullYear(2013); // 设置四位数的年份
console.log("now.getFullYear()=" + now.getFullYear());// 获取四位数的年份

now.setMonth(2); // 设置月份，基于0，即一月是0
console.log("now.getMonth()=" + now.getMonth());// 获取月份

now.setDate(23); // 设置月份的第几天
console.log("now.getDate()=" + now.getDate());// 获取月份的第几天

now.setHours(22); // 设置小时
console.log("now.getHours()=" + now.getHours());// 获取小时

now.setMinutes(55); // 设置分钟
console.log("now.getMinutes()=" + now.getMinutes());// 获取分钟

now.setSeconds(59); // 设置秒数
console.log("now.getSeconds()=" + now.getSeconds());// 获取秒数

now.setMilliseconds(112); // 设置毫秒数
console.log("now.getMilliseconds()=" + now.getMilliseconds());// 获取毫秒数
