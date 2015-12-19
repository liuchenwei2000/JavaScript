
/**
 * 类拥有的实例方法是说，它虽然属于类，但能访问实例属性。
 * 而类方法为类所拥有，只能访问类属性，不能访问实例属性。
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

// 这是一个类方法
Book.getAuthor = function(){
	return console.log("author=" + Book.prototype.author);
};

var book1 = new Book("Thinking in Java", 3);
book1.printInfo();

// 调用时只需引用类名即可
Book.getAuthor();
