
/**
 * 对原型对象所做的任何修改都能够立即从实例上反映出来————即使是先创建了实例后修改原型也照样如此。
 * 原因可以归结为实例与原型之间的松散连接关系，因为实例与原型之间的连接只不过是一个指针，
 * 而非一个副本，因此就可以在原型中找到新的 printInfo 属性并返回保存在那里的函数。
 */

function Book() {
}

var book = new Book();

Book.prototype.title = "default";
Book.prototype.printInfo = function() {
	console.log("Title=" + this.title);
};

book.printInfo();

/**
 * 原型模式的重要性不仅体现在创建自定义类型方面，就连所有原生的引用类型，都是采用这种模式创建的。
 * 所有原生引用类型，如Object、Array、String等，都在其构造函数的原型上定义了方法。
 * 另外，可以像修改自定义对象的原型一样修改原生对象的原型，因此可以随时添加方法。
 * 尽管可以这样做，但是不推荐在产品化的程序中修改原生对象的原型。
 */
	
// 为 String 类型添加 startsWith() 方法
String.prototype.startsWith = function(text) {
	return this.indexOf(text) == 0;
};

var str = "hello world";
console.log("str.startsWith(\"hello\")=" + str.startsWith("hello"));


/**
 * 原型对象的问题
 * 
 * 原型中所有属性都是被多个实例共享的，这种共享对函数非常合适，对包含基本值的属性也说得过去，
 * 毕竟可以通过在实例上添加一个同名属性从而隐藏掉原型中的对应属性。
 * 然而，对于包含引用类型值得属性来说，问题就来了。
 */

function Person() {
}

Person.prototype = {
	constructor : Person,
	name : "default",
	age : 18,
	friends : [ "Micky", "Tomcat" ],
	sayName : function() {
		console.log(this.name);
	}
};

var person1 = new Person();
var person2 = new Person();

// 由于 friends 数组存在于 Person.prototype 而非 person1 中，所以这里的修改
// 也会通过 person2.friends 反映出来，因为它和 person1.friends 指向同一个数组。
// 可是，实例一般都是要有属于自己的全部属性的，而这个问题正是很少有人单独使用原型模式的原因所在。
person1.friends.push("Jerry");

console.log("person1.friends=" + person1.friends);
console.log("person2.friends=" + person2.friends);
console.log("person1.friends == person2.friends ? " + (person1.friends === person2.friends));
