
function SuperType() {
    this.name = "super";
}

SuperType.prototype.getName = function () {
    return this.name;
};

function SubType() {
    this.message = "sub";
}

SubType.prototype = new SuperType();

SubType.prototype.getMessage = function () {
    return this.message;
};

/**
 * 可以通过两种方式来确定原型和实例之间的关系：
 */

// 第一种方式是使用 instanceof 操作符，只要用这个操作符来测试实例与原型链中出现过的构造函数，结果就会返回 true。

console.log("instance instanceof Object=" + (instance instanceof Object));
console.log("instance instanceof SuperType=" + (instance instanceof SuperType));
console.log("instance instanceof SubType=" + (instance instanceof SubType));

// 第二种方式是使用 isPrototypeOf() 方法，只要是原型链中出现过的原型，都可以说是该原型链所派生的实例的原型。

console.log("Object.prototype.isPrototypeOf(instance)=" + Object.prototype.isPrototypeOf(instance));
console.log("SuperType.prototype.isPrototypeOf(instance)=" + SuperType.prototype.isPrototypeOf(instance));
console.log("SubType.prototype.isPrototypeOf(instance)=" + SubType.prototype.isPrototypeOf(instance));