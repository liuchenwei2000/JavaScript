
/**
 * 5，寄生构造函数模式
 * 
 * 在前面几种模式都不适用的情况下，可以使用寄生构造函数模式。
 * 该模式的基本思想是创建一个函数，该函数的作用仅仅是封装创建对象的代码，然后再返回新创建的对象，
 * 但从表面上看，该函数又很像是典型的构造函数。
 */

/*
 * 构造函数在不返回值的情况下，默认会返回新对象实例。
 * 而通过在构造函数的末尾添加一个 return 语句，可以重写调用构造函数时返回的值。 
 */
function Book(title, author, edition) {
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

var book1 = new Book("Thinking in Java", "Bruce Eckel", 3);
book1.printInfo();

/**
 * 这个模式可以在特殊的情况下用来为对象创建构造函数。
 * 假如想创建一个具有额外方法的特殊数组，由于不能直接修改 Array 构造函数，因此可以使用这个模式。
 */

function SpecialArray() {
	var array = new Array();
	array.push.apply(array, arguments);
	array.toPipedString = function() {
		return this.join("|");
	};
	return array;
}

var sarray = new SpecialArray("a", "b", "c");
console.log("sarray.toPipedString()=" + sarray.toPipedString());

/*
 * 该模式返回的对象与构造函数或者与构造函数的原型属性之间没有关系，也就是说，
 * 构造函数返回的对象与构造函数外部创建的对象没有什么不同。
 * 为此，不能依赖 instanceof 操作符来确定对象类型。
 * 由于存在上述问题，建议在可以使用其他模式的情况下，不要使用这种模式。 
 */
