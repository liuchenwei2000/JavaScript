
/**
 * 3，原型模式
 * 
 * 每个函数都有一个 prototype（原型）属性，这个属性是一个指针，指向一个对象，
 * 而这个对象的用途是包含可以由特定类型的所有实例共享的属性和方法。
 * 按字面意思理解，prototype 就是通过调用构造函数而创建的那个对象的原型对象。
 * 
 * 使用原型对象的好处是可以让所有对象实例共享它所包含的属性和方法，也就是说，
 * 不必在构造函数中定义对象实例的信息，而是可以将这些信息直接添加到原型对象中。
 */

// 构造函数成了空函数，但仍然可以使用构造函数创建对象，而且新对象还会具有相同的属性和方法。
// 但与构造函数模式不同的是，新对象的这些属性和方法是由所有实例共享的。
function Book() {
}

Book.prototype.title = "default";
Book.prototype.author = "default";
Book.prototype.edition = 1;

Book.prototype.printInfo = function() {
	console.log("Title=" + this.title + ", Author=" + this.author
			+ ", Edition=" + this.edition);
};

var book1 = new Book();
book1.title = "Thinking in Java";
console.log("book1.title=" + book1.title);

var book2 = new Book();
book2.title = "Code Complete";
console.log("book2.title=" + book2.title);

// printInfo 都指向同一个函数
console.log("book1.printInfo == book2.printInfo ? " + (book1.printInfo == book2.printInfo));


// 为了减少不必要的输入，也为了从视觉上更好地封装原型的功能，更常见的做法是用一个包含所有属性和方法的对象字面量来重写整个原型对象。
function ABook() {
}

ABook.prototype = {
	title : "default",
	author : "default",
	edition : 1,
	printInfo : function() {
		console.log("Title=" + this.title + ", Author=" + this.author
				+ ", Edition=" + this.edition);
	}
};

// 这种写法只有一个例外，constructor 属性指向了 Object 构造函数，不再指向 ABook 函数。
console.log("ABook.prototype.constructor=" + ABook.prototype.constructor);

// 为了解决上述问题，可以像下面这样把 constructor 重设回 ABook 函数。

ABook.prototype = {
	constructor : ABook,
	title : "default",
	author : "default",
	edition : 1,
	printInfo : function() {
		console.log("Title=" + this.title + ", Author=" + this.author
				+ ", Edition=" + this.edition);
	}
};

console.log("ABook.prototype.constructor=" + ABook.prototype.constructor);