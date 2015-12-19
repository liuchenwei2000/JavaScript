
/**
 * 初始的 Book 对象设计，构造方法模式
 */

function Book(title, author, edition) {
	this.title = title;
	this.author = author;
	this.edition = edition;

	// 这种写法使得每个 Book 对象都有该方法的一个副本，造成存储的浪费和低效。
	// 不像属性需要为每个对象存储其特定数据，方法应该是所有 Book 对象所共享。
	// this 关键字引用的属性和方法表明这是实例特有的属性和方法。
	this.printInfo = function() {
		console.log("Title=" + this.title + ", Author=" + this.author
				+ ", Edition=" + this.edition);
	};
}

var book = new Book("Thinking in Java", "Bruce Eckel", 3);
book.printInfo();
