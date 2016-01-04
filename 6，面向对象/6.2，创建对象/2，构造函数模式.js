
/**
 * 2，构造函数模式
 * 
 * 工厂模式虽然解决了创建多个相似对象的问题，但是没有解决对象识别的问题（即怎样知道一个对象的类型）。
 * ECMAScript 中的构造函数可用来创建特定类型的对象，像 Object 和 Array 这样的原生构造函数，在运行时会自动出现在执行环境中。
 * 此外，也可以创建自定义的构造函数，从而定义自定义对象类型的属性和方法。
 */

/*
 * 构造函数模式与工厂模式不同之处有：
 * 1，构造函数模式没有显式地创建对象。
 * 2，构造函数模式直接将属性和方法赋给了 this 对象。
 * 3，构造函数模式没有 return 语句。
 * 
 * 按照惯例，构造函数始终都应该以一个大写字母开头，而非构造函数则应该以一个小写字母开头。
 * 因为构造函数本身也是函数，只不过可以用来创建对象而已。
 */
function Book(title, author, edition) {
	this.title = title;
	this.author = author;
	this.edition = edition;

	this.printInfo = function() {
		console.log("Title=" + this.title + ", Author=" + this.author
				+ ", Edition=" + this.edition);
	};
}

/*
 * 要创建 Book 的新实例，必须使用 new 操作符，这种方式调用构造函数实际上会经历以下4个步骤：
 * 1，创建一个新对象；
 * 2，将构造函数的作用域赋给新对象，因此 this 就指向了这个新对象。
 * 3，执行构造函数中的代码（为这个新对象添加属性）
 * 4，返回新对象。 
 */
// 创建自定义的构造函数意味着将来可以将它的实例标识为一种特定的类型，这正是构造函数模式胜过工厂模式的地方。
var book2 = new Book("Thinking in Java", "Bruce Eckel", 3);
book2.printInfo();
console.log("book2.constructor == Book=" + (book2.constructor == Book));
console.log("book2 instanceof Book=" + (book2 instanceof Book));
