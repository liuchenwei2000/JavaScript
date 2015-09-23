
/**
 * 增强的模块模式适合那些单例必须是某种类型的实例，同时还必须添加某些属性和（或）方法对其加以增强的情况。
 */

var singleton = function() {

	// 私有变量
	var name = "Tom";

	// 私有函数
	function sayHello() {
		console.log("Hello,I'm " + name);
	}

	// 特定类型的实例
	var object = new MyObject();

	// 特权/公有 方法和属性
	object.publicName = name;

	object.publicMethod = function() {
		sayHello();
	};

	return object;
}();

function MyObject() {
}

console.log("singleton1.publicName=" + singleton.publicName);
singleton.publicMethod();
