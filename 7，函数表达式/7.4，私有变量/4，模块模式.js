
/**
 * 不论是构造函数模式还是静态私有变量模式，都用于为自定义类型创建私有变量和特权方法。
 * 而模块模式（module pattern）则是为单例创建私有变量和特权方法。
 * 
 * 所谓单例（singleton），指的是只有一个实例的对象。
 */

// 按照惯例，javaScript 是以对象字面量的方式来创建单例对象的。
var singleton = {
	name : "Tom",
	sayHello : function() {
		console.log("Hello,I am " + this.name);
	}
};

/*
 * 模块模式通过为单例添加私有变量和特权方法能够使其得到增强。
 * 
 * 该模式使用了一个返回对象的匿名函数。内部定义了私有变量和函数，并将一个对象字面量作为函数的值返回。
 * 返回的对象字面量中只包含可以公开的属性和方法，由于这个对象是在匿名函数内部定义的，
 * 因此它的公有方法有权访问私有变量和函数。从本质上讲，这个对象字面量定义的是单例的公共接口。
 */
var singleton1 = function() {

	// 私有变量
	var name = "Tom";

	// 私有函数
	function sayHello() {
		console.log("Hello,I'm " + name);
	}

	// 返回对象字面量
	return {
		// 特权/公有 方法和属性
		publicName : name,
		publicMethod : function() {
			sayHello();
		}
	};
}();

console.log("singleton1.publicName=" + singleton1.publicName);
singleton1.publicMethod();

// 这种模式在需要对单例进行某些初始化，同时又需要维护其私有变量时是非常有用的。
// 如果必须创建一个对象并以某些数据对其进行初始化，同时还要公开一些能够访问这些私有数据的方法，那就可以使用该模式。

var application = function() {

	// 私有变量
	var components = new Array();

	// 初始化
	components.push(new BaseCompnent());

	// 特权/公共方法
	return {
		getComponentsCount : function() {
			return components.length;
		},
		
		registerComponent : function(component) {
			if (typeof component == "object") {
				components.push(component);
			}
		}
	};
}();

function BaseCompnent() {
}
function WebCompnent() {
}

console.log("application.getComponentsCount()=" + application.getComponentsCount());
application.registerComponent(new WebCompnent());
console.log("application.getComponentsCount()=" + application.getComponentsCount());
