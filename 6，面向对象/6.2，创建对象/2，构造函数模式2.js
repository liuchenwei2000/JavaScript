
function Book(title, author, edition) {
	this.title = title;
	this.author = author;
	this.edition = edition;

	this.printInfo = function() {
		console.log("Title=" + this.title + ", Author=" + this.author
				+ ", Edition=" + this.edition);
	};
}

/**
 * 将构造函数当作函数
 * 
 * 任何函数，只要通过 new 操作符来调用，那它就可以作为构造函数；
 * 而任何函数，如果不通过 new 操作符来调用，那它跟普通函数也不会有什么两样。
 */

// 当做构造函数使用
var book1 = new Book("Thinking in Java", "Bruce Eckel", 4);
book1.printInfo();
// 当做普通函数使用
Book("Professional JavaScript", "Nicholas", 3);// 此时 Book 方法内部的 this 指向 Global 对象（浏览器中即 window）
window.printInfo();
// 在另一个对象的作用域中调用
var o = new Object();
Book.call(o,"Head first JavaScript", "John", 2);
o.printInfo();

/**
 * 构造函数的问题
 * 
 * 使用构造函数的主要问题，就是每个方法都要在每个实例上重新创建一遍。
 * 因为在 ECMAScript 中的函数都是对象，因此每定义一个函数，也就是实例化一个函数对象。
 * 也就是说，每个 Book 实例都包含一个不同 Fucntion 实例（printInfo）。
 * 以这种方式才创建函数，会导致不同的作用域链和标识符解析，但创建 Fucntion 新实例的机制仍然是相同的。
 * 因此，不同实例上的不同函数是不相等的。
 */

var book2 = new Book("Code complete", "Bob", 1);

console.log("book.printInfo == book2.printInfo ? " + book.printInfo === book2.printInfo);

/**
 * 创建两个完成同样任务的 Function 实例的确没有必要，况且有 this 对象在，
 * 根本不用在执行代码前就把函数绑定到特定对象上面。
 * 因此，可以使用下面的方式把函数定义转移到构造函数外面来解决这个问题。 
 */

function ABook(title, author, edition) {
	this.title = title;
	this.author = author;
	this.edition = edition;
	// 每一个对象的 printInfo 都指向同一个全局函数
	this.printInfo = printInfo;
}

function printInfo() {
	console.log("Title=" + this.title + ", Author=" + this.author
			+ ", Edition=" + this.edition);
}

var abook = new ABook("Thinking in Java", "Bruce Eckel", 4);
abook.printInfo();

/**
 * 这种方式解决了两个函数做同一件事的问题，但新问题是：
 * 在全局作用域中定义的函数实际上只能被某个对象调用，这让全局作用域有点名不副实。
 * 另外，如果对象需要定义很多方法，那么就要定义很多全局函数，那这个自定义的引用类型就丝毫没有封装性可言。
 * 这些问题都可以通过使用原型模式来解决。
 */
