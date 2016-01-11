
/**
 * 子类型有时候需要重写超类型中的某个方法，或者需要添加超类型中不存在的某个方法。
 * 但不管怎样，给原型添加方法的代码一定要放在替换原型的语句之后。
 */

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

// 添加的新方法要放在替换原型的语句之后
SubType.prototype.getMessage = function () {
    return this.message;
};

// 重写超类型中的方法
SubType.prototype.getName = function () {
    return this.name.toUpperCase();
};

var instance = new SubType();
// 通过 SubType 的实例调用 getName() 时，调用的就是这个重新定义的方法。
// 但通过 SuperType 的实例调用 getName()时，还会继续调用原来的那个方法。
console.log("instance.getName()=" + instance.getName());
console.log("instance.getMessage()=" + instance.getMessage());