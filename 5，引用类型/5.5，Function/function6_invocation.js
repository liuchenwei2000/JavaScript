
// 影响 this 值的四种调用模式

/**
 * this 的值取决于调用的模式，在 JavaScript 中一共有4中调用模式：
 *
 * 方法调用模式、函数调用模式、构造器调用模式、apply 调用模式。
 *
 * 这些模式在如何初始化关键参数 this 上存在差异。
 */

/**
 * 1，方法调用模式
 *
 * 当一个函数被保存为对象的一个属性时，称它为一个方法。
 * 当一个方法被调用时，this 被绑定到该对象。
 * 如果调用表达式包含一个提取属性的动作（即包含 . 点号操作符或 [] 中括号操作符），
 * 那么它就是被当做一个方法来调用。
 */

var myObject = {
	greeting: " World",
	/*
	 * 方法可以使用 this 访问自己所属的恩对象，所以它能从对象中取值或对对象进行修改。
	 * this 到对象的绑定，发生在调用的时候，这使得函数可以对 this 高度复用。
	 */
	sayHi: function () {
		return 'Hello' + this.greeting;
	}
};

console.log(myObject.sayHi());

/**
 * 2，函数调用模式
 *
 * 当一个函数并非一个对象的属性时，那么它就是被当做一个函数来调用的。
 * 以此模式调用函数时，this 就被绑定到全局对象，这是语言设计上的一个错误。
 */

var sum = add(1, 2);

function add(num1, num2) {
	console.log(this);// this 是全局对象，比如 window
	return num1 + num2;
}

myObject.bad = function () {

	var helper = function () {
		console.log(this);// this 是全局对象，比如 window，而不是 myObject
	};

	helper();
};

myObject.bad();

/*
 * 倘若语言设计正确，那么当内部函数被调用时，this 应该仍然绑定到外部函数的 this 变量。
 * 这个设计错误的后果就是方法不能利用内部函数来帮助它工作，因为内部函数的 this 被绑定了错误的值，
 * 所以不能共享该方法对对象的访问权。为了解决这个问题，可以使用下面的方式：
 */
myObject.good = function () {

	// 在方法中定义一个变量比给它赋值为 this，那么内部函数就可以通过该变量访问到 this。
	var that = this;

	var helper = function () {
		console.log(that);// that 是 myObject
	};

	helper();
};

myObject.good();


/**
 * 3，构造器调用模式
 *
 * 如果一个函数前面带上 new 来调用，那么背地里将会创建一个连接到该函数的
 * prototype 成员的新对象，同时 this 将会绑定到那个新对象上。
 *
 * 不推荐使用这种形式的构造函数。
 */

// 创建一个名为 Foo 的构造器函数，带有一个 message 属性。
var Foo = function(message){
	this.message = message;
};
// 给 Foo 的所有实例提供一个名为 getMessage 的公共方法。
Foo.prototype.getMessage = function(){
	return this.message;
};
// 创建一个 Foo 实例，并调用公共方法。
var foo = new Foo('Hello');
console.log(foo.getMessage());

/**
 * 4，apply 调用模式
 *
 * apply 方法允许构建一个参数数组传递给调用函数，也允许选择 this 的值。
 * 它接收两个参数：第一个是要绑定给 this 的值，第二个就是一个参数数组。
 */

var array = [2,3];

var sum2 = add.apply(null,array);
console.log(sum2);

var newObject = {
	message : 'new object'
};

var result = Foo.prototype.getMessage.apply(newObject);
console.log(result);