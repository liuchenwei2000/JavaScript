
/**
 * JavaScript 中每个对象都连接到一个原型对象，并且它可以从中继承属性。
 * 所有通过对象字面量创建的对象都连接到 Object.prototype，它是 JavaScript 中的标配对象。
 *
 * 当创建一个新对象时，可以选择某个对象作为它的原型。
 */

var obj1 = {};
console.log(obj1.prototype);

function Book(title, edition) {
    this.title = title;
    this.edition = edition;
}

Book.prototype.author = "Bruce Eckel";

/**
 * 原型连接在更新时是不起作用的，当对某个对象做出改变时，不会触及该对象的原型。
 * 原型连接只有在检索的时候才被用到，如果尝试去获取对象的某个属性值，但该对象没有此属性名，
 * 那么 JavaScript 会试着从原型对象中获取属性值。如果那个原型对象也没有该属性，那么再从它的原型中寻找，
 * 以此类推，直到该过程最后达到终点 Object.prototype。
 * 如果想要的属性完全不存在于原型链中，那么结果就是 undefined 值。这个过程称为 委托。
 */
var book1 = new Book("Thinking in Java", 3);
console.log(book1.author);

var book2 = new Book("Hello Java", 1);
console.log(book2.author);

book1.author = "Duck";
console.log(book1.author);
console.log(book2.author);

// 原型关系是一种动态的关系。如果添加一个新的属性到原型中，该属性会立即对所有基于该原型创建的对象可见。
Book.prototype.press = "O'Reilly";
console.log(book1.press);
console.log(book2.press);