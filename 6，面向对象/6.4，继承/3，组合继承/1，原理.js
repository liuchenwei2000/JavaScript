
/**
 * 组合继承，也叫做伪经典继承，指的是将原型链和借用构造函数的技术组合到一块，从而发挥二者之长的一种继承模式。
 * 其背后的思路是使用原型链实现对原型属性和方法的继承，而通过借用构造函数来实现对实例属性的继承。
 * 这样，既通过在原型上定义方法实现了函数复用，又能够保证每个实例都有它自己的属性。
 */

function SuperType(aname) {
    this.name = aname;
    this.colors = ['RED','BLUE','GREEN'];
}

SuperType.prototype.sayName = function(){
    console.log("Hi " + this.name);
};

function SubType(aname, amessage) {
    // 继承属性
    SuperType.call(this, aname);
    this.message = amessage;
}

// 继承方法
SubType.prototype = new SuperType();
SubType.prototype.constructor = SubType;

SubType.prototype.getMessage = function(){
    return this.message;
};

// 这样一来，就可以让两个不同的 SubType 实例既分别拥有自己属性——包括 colors 属性，又可以使用相同的方法。
var instance = new SubType("instance1","Hello");
instance.colors.push("YELLOW");

console.log("instance.colors=" + instance.colors);// RED,BLUE,GREEN,YELLOW
instance.sayName();
console.log("instance.getMessage()=" + instance.getMessage());

var instance2 = new SubType("instance2","World");
console.log("instance2.colors=" + instance2.colors);// RED,BLUE,GREEN
instance2.sayName();
console.log("instance2.getMessage()=" + instance2.getMessage());

/**
 * 组合继承避免了原型链和借用构造函数的缺陷，融合了它们的优点，成为 JavaScript 中最常用的继承模式。
 * 而且，instanceof 和 isPrototypeOf()也能够用于识别基于组合继承创建的对象。
 */