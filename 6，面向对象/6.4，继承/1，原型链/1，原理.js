/**
 * 定义了两个类型：SuperType 和 SubType。每个类型分别有一个属性和一个方法。
 * 它们的主要区别是 SubType 继承了 SuperType，而继承是通过创建 SuperType 的实例，
 * 并将该实例赋给 SubType.prototype 实现的。实现的本质是重写原型对象，代之以一个新类型的实例。
 * 换句话说，原来存在于 SuperType 的实例中的所有属性和方法，现在也存在于 SubType.prototype 中了。
 * 在确立了继承关系之后，给 SubType.prototype 添加了一个方法，这样就在继承了 SuperType 的属性和方法的基础上又添加了一个新方法。
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

/**
 * 没有使用 SubType 默认提供的原型，而是给它换了一个新原型；这个新原型就是 SuperType 的实例。
 * 新原型不仅具有作为一个 SuperType 的实例所拥有的全部属性和方法，而且其内部还有一个指针，指向了 SuperType 的原型。
 * 最终结果就是这样的：instance 指向 SubType 的原型，SubType 的原型又指向 SuperType 的原型。
 * getName() 方法仍然还在 SuperType.prototype 中，但 name 则位于 SubType.prototype 中。
 * 这是因为 name 是一个实例属性，而 getName() 则是一个原型方法。
 *
 */
SubType.prototype = new SuperType();

SubType.prototype.getMessage = function () {
    return this.message;
};

/**
 * 当以读取模式访问一个实例属性时，首先会在实例中搜索该属性。
 * 如果没有找到该属性，则会继续搜索实例的原型。
 * 在通过原型链实现继承的情况下，搜索过程就得以沿着原型链继续向上。
 */
var instance = new SubType();
console.log("instance.getName()=" + instance.getName());
console.log("instance.getMessage()=" + instance.getMessage());

instance.name="new name";
instance.message="Hello";

var instance2 = new SubType();
console.log("instance2.getName()=" + instance2.getName());
console.log("instance2.getMessage()=" + instance2.getMessage());