
/**
 * 无论什么时候，只要创建了一个新函数，就会根据一组特定的规则为该函数创建一个 prototype 属性，这个属性指向函数的原型对象。
 */

function Book() {
}
Book.prototype.title = "default";
Book.prototype.author = "default";
Book.prototype.edition = 1;

// 所有原型对象都会自动获得一个 constructor（构造函数）属性，这个属性包含一个指向 prototype 属性所在函数的指针。
console.log("Book.prototype.constructor=" + Book.prototype.constructor);

/*
 * 创建了自定义的构造函数之后，其原型对象默认只会取得 constructor 属性；
 * 至于其他方法，则都是从 Object 继承而来的。
 * 
 * 当调用构造函数创建一个新实例后，该实例的内部将包含一个指针（内部属性），指向构造函数的原型对象。
 * 这个指针在 ES5 中称为[[Prototype]]，在脚本中没有标准的方式访问它。
 * 这个连接存在于实例与构造函数的原型对象之间，而不是存在于实例与构造函数之间。
 */

// 虽然无法访问[[Prototype]]，但可以通过 isPrototypeOf() 方法来确定对象之间是否存在这种关系。
// 如果 [[Prototype]] 指向调用 isPrototypeOf() 方法的对象，那么这个方法就返回 true。
var book1 = new Book();
var book2 = new Book();
console.log("Book.prototype.isPrototypeOf(book1)=" + Book.prototype.isPrototypeOf(book1));
console.log("Book.prototype.isPrototypeOf(book2)=" + Book.prototype.isPrototypeOf(book2));

// ES5 增加了一个新方法 Object.getPrototypeOf()，它返回 [[Prototype]] 的值。
// 下面的例子可以证明  Object.getPrototypeOf() 返回的对象实际就是这个对象的原型。
console.log("Object.getPrototypeOf(book1)=" + Object.getPrototypeOf(book1));
console.log("Object.getPrototypeOf(book1) == Book.prototype=" + (Object.getPrototypeOf(book1) == Book.prototype));

/*
 * 虽然可以通过对象实例访问保存在原型中的值，但却不能通过对象实例重写原型中的值。
 * 如果在实例中添加了一个属性，而该属性与实例原型中的一个属性同名，
 * 也只是在实例中创建了该属性，它将会屏蔽原型中的那个属性。 
 */
book1.title = "new title";
console.log("book1.title=" + book1.title);// 来自实例
console.log("book2.title=" + book2.title);// 来自原型

// 当为对象实例添加一个属性时，该属性就会屏蔽原型对象中保存的同名属性。
// 也就是说，添加这个属性只会阻止访问原型中的那个属性，但不会修改那个属性。
// 如果将这个属设置为null，也只会在实例中设置这个属性，而不会恢复其指向原型的连接。
book1.title = null;
console.log("book1.title=" + book1.title);// 来自实例

// 使用 delete 操作符则可以完全删除实例属性，从而能够重新访问原型中的属性。
delete book1.title;
console.log("book1.title=" + book1.title);// 来自实例

// 使用 hasOwnProperty() 方法可以检测一个属性是存在于实例中还是原型中。
// 该方法继承自Object，只在给定属性存在于对象实例中时，才会返回 true。

console.log("book1.hasOwnProperty(\"title\")=" + book1.hasOwnProperty("title"));
book1.title = "new title";
console.log("book1.hasOwnProperty(\"title\")=" + book1.hasOwnProperty("title"));
book1.name = "a book";
console.log("book1.hasOwnProperty(\"name\")=" + book1.hasOwnProperty("name"));
