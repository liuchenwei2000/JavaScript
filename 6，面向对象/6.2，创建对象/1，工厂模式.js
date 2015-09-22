
/**
 * 虽然 Object 构造函数或对象字面量都可以用来创建单个对象，但这些方式有个明显的缺点：
 * 使用同一个接口创建很多对象，会产生大量的重复代码。
 */

/**
 * 1，工厂模式
 * 
 * 为了解决上述问题，可以使用工厂模式的变体。
 * 因为 ECMAScript 中无法创建类，开发人员用函数来封装以特定接口创建对象的细节。
 */

function createBook(title, author, edition) {
	var book = new Object();
	book.title = title;
	book.author = author;
	book.edition = edition;

	book.printInfo = function() {
		console.log("Title=" + this.title + ", Author=" + this.author
				+ ", Edition=" + this.edition);
	};
	return book;
}

var book1 = createBook("Thinking in Java", "Bruce Eckel", 3);
book1.printInfo();
