
/**
 * 通过 prototype 实现方法共享，达成存储一次，运行多次的目的。
 * prototype 对象让方法可存储于类内，以免实例不必要地一直复制程序代码。
 */

function Book(title, author, edition) {
	this.title = title;
	this.author = author;
	this.edition = edition;
}

// 每个对象都有个隐藏对象 prototype（以属性的形式存在），可以用来模拟 OOP 中的类。
// prototype 对象用于设定隶属于类层的属性和方法，而非属于实例的。如下所示：
// 这样一来，无论创建多少 Book 实例，都只会有一份 printInfo 方法。

// printInfo 方法成为 Book 类的一部分，当它被调用时，将在类内运行。
// 然而它仍是实例的方法，因为它能透过实例对象被调用，也可访问实例里的特性。
Book.prototype.printInfo = function() {
	console.log("Title=" + this.title + ", Author=" + this.author
		+ ", Edition=" + this.edition);
};

var book = new Book("Thinking in Java", "Bruce Eckel", 3);
book.printInfo();
