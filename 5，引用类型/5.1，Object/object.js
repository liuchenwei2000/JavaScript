
// 1，创建对象

// 创建 Object 实例的方式有两种，第一种是使用 new 操作符后跟 Object 构造函数。

var person = new Object();
person.name = "Tom";
person.age = 15;

console.log(person.name + " " + person.age);

// 另一种是使用对象字面量表示法，这是对象定义的一种简写方式，目的在于简化创建包含大量属性的对象的过程。
var person2 = {
	"name" : "Peter",	// 在使用对象字面量语法时，属性名也可以使用字符串。
	age : 18,	// 数值属性会自动转换为字符串
	living : true	// living 是最后一个属性，所以不需要加逗号
};

console.log(person2.name + " " + person2.age);

// 也可以像下面这种用法
var person3 = {};	// 与 new Object(); 相同
person3.name = "Ann";
person3.age = 14;

console.log(person3.name + " " + person3.age);

// 2，访问属性

/**
 * 一般来说，访问对象属性时使用的都是点表示法，这也是很多面向对象语言中通用的语法。
 * 不过，在JavaScript中也可以使用方括号表示法来访问对象的属性。
 * 在使用方括号语法时，应该将要访问的属性以字符串的形式放在方括号中。
 * 除非必须使用变量来访问属性，否则建议使用点表示法。
 */ 

console.log(person.name);
console.log(person["name"]);

// 方括号语法的主要优点是可以通过变量来访问属性。
var prop = "age";
console.log(person[prop]);

// 如果属性名中包含会导致语法错误的字符，或者属性名使用的关键字或保留字，也可以使用方括号表示法。
var person4 = {
	"first name" : "Jimmy"
};
console.log(person4["first name"]);