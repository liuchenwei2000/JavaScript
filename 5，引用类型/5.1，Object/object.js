
// 1，创建对象

// 创建 Object 实例的方式有两种，第一种是使用 new 操作符后跟 Object 构造函数。

var person = new Object();
person.name = "Tom";
person.age = 15;

console.log(person.name + " " + person.age);

// 另一种是使用对象字面量表示法，这是对象定义的一种简写方式，目的在于简化创建包含大量属性的对象的过程。
var person2 = {
	"name" : "Peter",	// 在使用对象字面量语法时，属性名也可以使用字符串。
	"2p q" : "2p q",	// 如果属性名不符合标识符的条件（比如第一个字符为数字），则必须加上引号。
	age : 18,	// 数值属性会自动转换为字符串
	10 : 10,	// 如果键名是数字，则会默认转为对应的字符串。
	living : true	// living 是最后一个属性，所以不需要加逗号
};

console.log(person2.name + " " + person2.age);
console.log("person2.[\"10\"]=" + person2["10"]);
console.log("person2.[\"2p q\"]=" + person2["2p q"]);

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
	"first name" : "Jimmy",
	"last name" : "Green"
};
console.log(person4["first name"]);

// for...in 语句循环遍历对象的属性，循环中的代码块将针对每个属性执行一次。
for ( var prop in person4) {
	console.log("person[" + prop + "]=" + person4[prop]);
}


// 3，其他方法

// 查看所有属性
console.log("Object.keys(person4)=" + Object.keys(person4));

// 删除一个属性，需要使用 delete 命令
delete person4["last name"];

// 一旦使用 delete 命令删除某个属性，再读取该属性就会返回 undefined，
// 而且 Object.keys 方法返回的该对象的所有属性中，也将不再包括该属性。

console.log("person4['last name']=" + person4['last name']);
console.log("Object.keys(person4)=" + Object.keys(person4));


// in 运算符用于检查对象是否包含某个属性（注意，检查的是键名，不是键值），
// 如果包含就返回true，否则返回false，对继承的属性也一样。
if ('last name' in person4) {
	console.log("'last name' is in person4");
}
if ('first name' in person4) {
	console.log("'first name' is in person4");
}
