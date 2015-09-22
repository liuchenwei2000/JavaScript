
/**
 * 原型与 in 操作符
 */

function Book() {
}
Book.prototype.title = "default";
Book.prototype.author = "default";
Book.prototype.edition = 1;

// in 操作符在单独使用时，无论属性存在于实例中还是原型中，只要对象能够访问该属性就返回 true。
var book1 = new Book();
console.log("\"title\" in book1=" + ("title" in book1));
console.log("\"name\" in book1=" + ("name" in book1));

book1.name = "a name";
console.log("\"name\" in book1=" + ("name" in book1));

// 同时使用 hasOwnProperty() 方法和 in 操作符，就可以确定该属性到底是存在于对象中，还是存在于原型中。

function hasPrototypeProperty(object, prop) {
	return (prop in object) && (!object.hasOwnProperty(prop));
}

console.log("hasPrototypeProperty(book1,\"title\")=" + hasPrototypeProperty(book1, "title"));
console.log("hasPrototypeProperty(book1,\"name\")=" + hasPrototypeProperty(book1, "name"));


/**
 * 在使用 for-in 循环时，返回的是所有能够通过对象访问的、可枚举的属性，
 * 其中既包括存在于实例中的属性，也包括存在于原型中的属性。
 * 屏蔽了原型中不可枚举属性的实例属性也会被返回，因为根据规定，所有自定义的属性都是可枚举的。
 */

for ( var prop in book1) {
	console.log("prop=" + prop);
}

// 要获取对象上所有可枚举的实例属性，可以使用 ES5 的 Object.keys() 方法
// 它接收一个对象作为参数，返回一个包含所有可枚举属性的字符串数组。
console.log("props=" + Object.keys(Book.prototype));// 如果通过原型调用，则只返回原型属性。
console.log("props=" + Object.keys(book1));// 如果通过实例调用，则只返回实例属性。

// 如果想要得到所有属性，无论它是否可枚举，都可以使用 Object.getOwnPropertyNames() 方法
console.log("Object.getOwnPropertyNames(Book.prototype)="
		+ Object.getOwnPropertyNames(Book.prototype));// 如果通过原型调用，则只返回原型属性。
console.log("Object.getOwnPropertyNames(book1)="
		+ Object.getOwnPropertyNames(book1));// 如果通过实例调用，则只返回实例属性。

// Object.keys() 和 Object.getOwnPropertyNames() 都可以用来替代 for-in 循环
