
/**
 * 模块是一个提供接口却隐藏状态与实现的函数或对象。
 *
 * 通过使用函数产生模块，几乎可以完全摈弃全局变量的使用，从而缓解这个糟糕的特性。
 */

/**
 * 模块模式利用了函数作用域和闭包来创建被绑定对象与私有成员的关联。
 *
 * 一般形式：
 * 一个定义了私有变量和函数的函数，利用闭包创建可以访问私有变量和函数的特权函数，
 * 最后返回这个特权函数，或者把它们保存到一个可访问到的地方。
 *
 * 使用模块模式就可以摒弃全局变量的使用，它促进了信息隐藏和其他优秀的设计实践。
 * 对于应用程序的封装，或者构造其他单例对象，模块模式非常有效。
 */
var generator = (function () {

	// 两个私有变量
	var prefix = '';
	var counter = 0;

	return {
		// 利用闭包创建的特权函数
		setPrefix: function (_prefix) {
			prefix = _prefix;
		},
		gen: function () {
			return prefix + counter++;
		},
	}
})();

generator.setPrefix('ID');

console.log(generator.gen());
console.log(generator.gen());
console.log(generator.gen());
