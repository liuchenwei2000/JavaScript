
// 日期类型

// 1，要创建一个日期对象，使用下面的语法即可。

var now = new Date();// 新创建的对象自动获得当前日期和时间。
console.log("now=" + now);

/*
 * 如果想根据特定的日期和时间创建日期对象，必须传入表示该日期的毫秒数（即从 UTC 时间 
 * 1970年1月1日午夜起至该日期止经过的毫秒数），可以通过 Date.parse()和Date.UTC()方法获取毫秒数。 
 */

// Date.parse() 方法接收一个表示日期的字符串参数，然后尝试根据这个字符串返回相应日期的毫秒数。
// 字符串参数的格式通常因地区而已，下面是几种示例：

var d1 = Date.parse("08/18/2015"); // 月/日/年 格式
console.log("d1=" + d1);

var d2 = Date.parse("2015-07-01T08:01:02");// YYYY-MM-DDTHH:mm:ss 格式
console.log("d2=" + d2);

var date1 = new Date(d1);
console.log("date1=" + date1);

var date2 = new Date(d2);
console.log("date2=" + date2);

// 如果直接将表示日期的字符串传递给 Date 构造函数，也会在后台自动调用 Date.parse()。
var date3 = new Date("2015-07-01T08:01:02");
console.log("date3=" + date3);

// Date.UTC() 同样返回表示日期的毫秒数，参数分别是年、月（基于0，一月是0）、日、时、分、秒以及毫秒数。
// 只有年和月是必须的，如果没有提供日，则默认是1，其余参数默认是0。
// 除了参数不同外，其他用法和 Date.parse() 一致。

var d3 = Date.UTC(2015, 7);
var d4 = Date.UTC(2105, 7, 1, 8, 1, 2);

console.log("UTC d3=" + new Date(d3));
console.log("UTC d4=" + new Date(d4));

// 2，ECMAScript5 添加了 Date.now() 方法，返回调用当前方法时的日期和时间（毫秒级）。
var start = Date.now();

var i = 0;
while (i < 100000) {
	i++;
}

var stop = Date.now();

console.log("total time=" + (stop - start) + " ms");
