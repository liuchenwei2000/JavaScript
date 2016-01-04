
/**
 * 间隔调用与延时调用类似，只不过它会按照指定的时间间隔重复执行代码，直到间隔调用被取消或者页面被卸载。
 * 设置间隔调用的方法是 setInterval()，它接受的参数与 setInterval()相同：
 * 要执行的代码（字符串和函数）和每次执行之前需要等待的毫秒数。
 */

setInterval("alert('Hello world.');", 1000);

setInterval(function() {
	alert("Hello world.");
}, 2000);


/**
 * 调用 setInterval() 之后，该方法也会返回一个数值 ID，该 ID 可用在将来某个时刻取消间隔调用。。
 * 要取消尚未执行的间隔调用，可以调用 clearInterval() 方法并将相应的间隔调用 ID 作为参数传入。
 */

var num = 0;
var max = 5;
var taskId = null; 

function count() {
	alert("num=" + (++num));
	if (num == max) {
		clearInterval(taskId);
	}
}

taskId = setInterval(count, 500);


/**
 * 一般而言，使用延时调用是模拟间隔调用的一种最佳模式。
 * 原因是后一个间隔调用可能会在前一个间隔调用结束之前启动，而使用本例中的延时调用则完全可以避免这一点。
 * 所以，最好不要使用间隔调用。
 */

var num = 0;
var max = 5;
var taskId = null; 

function count() {
	alert("num=" + (++num));
	if (num == max) {
		clearTimeout(taskId);
	} else {
		setTimeout(count, 500);
	}
}

taskId = setTimeout(count, 500);
