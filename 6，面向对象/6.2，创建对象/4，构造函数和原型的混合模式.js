
/**
 * 4，够赞函数和原型的混合模式
 *
 * 创建自定义类型的最常见方式，就是组合使用构造函数模式和原型模式。
 * 构造函数模式用于定义实例属性，而原型模式用于定义方法和共享的属性。
 * 结果，每个实例都会有自己的一份实例属性的副本，但同时又共享着对方法的引用，最大限度地节省了内存。
 * 另外，这种混合模式还支持向构造函数传递参数，可谓集两种模式之长。
 *
 * 这种模式是目前 ES 中使用最广泛、认同度最高的一种创建自定义类型的方法。
 */

function Person(name, age) {
	// 实例属性都是在构造函数中定义的
	this.name = name;
	this.age = age;
	this.friends = ["Micky", "Tomcat"];
}

Person.prototype = {
	// 由所有实例共享的属性 constructor 和方法是在原型中定义的
	constructor : Person,
	sayName : function() {
		console.log(this.name);
	}
};

var person1 = new Person('Ann', 18);
var person2 = new Person('Peter', 22);

person1.friends.push("Jerry");

console.log("person1.friends=" + person1.friends);
console.log("person2.friends=" + person2.friends);
console.log("person1.friends == person2.friends ? " + (person1.friends === person2.friends));
console.log("person1.sayName == person2.sayName ? " + (person1.sayName === person2.sayName));
