
/**
 * Object 类型
 * 
 * ECMAScript 中的对象其实就是一组数据和功能的集合。
 */

// 对象可以通过执行 new 操作符后跟要创建的对象类型的名称来创建。
var myObj = new Object();

// 创建 Object 类型的实例并为其添加属性和方法，就可以创建自定义对象。
myObj.name = "tom cat";
myObj.sayHi = function() {
	console.log("Hi,my name is " + this.name);
};
myObj.toString = function() {
	return this.name;
};

// 调用对象的方法
myObj.sayHi();

/**
 * 仅仅创建 Object 的实例并没有什么用，但关键是要理解一个重要的思想：
 * 即在 ECMAScript 中，Object类型是所有它的实例的基础。
 * 换句话说，Object 类型所具有的任何属性和方法也同样存在于更具体的对象中。
 */

// Object 的每个实例都具有下列属性和方法。

// constructor 属性保存着用于创建当前对象的函数。
console.log("myObj.constructor=" + myObj.constructor);

// hasOwnProperty() 用于检查给定的属性在当前对象实例中（而不是在实例的原型中）是否存在。
console.log("myObj.hasOwnProperty(\"name\")=" + myObj.hasOwnProperty("name"));

// isPrototypeOf() 用于检查传入的对象是否是另一个对象的原型。
console.log("Object.prototype.isPrototypeOf(myObj)=" + Object.prototype.isPrototypeOf(myObj));

// propertyIsEnumerable(propertyName) 用于检查给定的属性是否能够使用 for-in 语句来枚举。
console.log("myObj.propertyIsEnumerable(\"name\")="	+ myObj.propertyIsEnumerable("name"));

// toLocaleString() 返回对象的字符串表示，该字符串与执行环境的地区对应。
console.log("myObj.toLocaleString()=" + myObj.toLocaleString());

// toString() 返回对象的字符串表示。
console.log("myObj.toString()=" + myObj.toString());

// valueOf() 返回对象的字符串、数值或布尔值表示，通常与 toString() 的返回值相同。
console.log("myObj.valueOf()=" + myObj.valueOf());
