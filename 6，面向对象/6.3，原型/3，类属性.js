
/**
 * 类属性与类拥有的实例方法很相似，它们都隶属于类，只有唯一一份可供所有实例访问。
 * 一般的使用场景是：某个数据对于所有实例而言都是一样的，就可以将其设为类属性。
 */

function Book(title, edition) {
	this.title = title;
	this.edition = edition;
}

Book.prototype.author = "Bruce Eckel";

Book.prototype.printInfo = function() {
	console.log("Title=" + this.title + ", Author=" + this.author
		+ ", Edition=" + this.edition);
};

var book1 = new Book("Thinking in Java", 3);
book1.printInfo();

var book2 = new Book("Hello Java", 1);
book2.printInfo();

book1.author = "Duck";
book1.printInfo();
book2.printInfo();
