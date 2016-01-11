/**
 * 原型链最主要的问题来自包含引用类型值的原型。包含引用类型值的原型属性会被所有实例共享；
 * 而这也正是为什么要在构造函数中，而不是在原型对象中定义属性的原因。
 * 在通过原型来实现继承时，原型实际上会变成另一个类型的实例。于是，原先的实例属性也就变成了现在的原型属性。
 */

function SuperType() {
    this.colors = ['RED','BLUE','GREEN'];
}

function SubType() {
}

/**
 * 当 SubType 通过原型链继承了 SuperType 之后，SubType.prototype 就变成了 SuperType 的一个实例，
 * 因此它也拥有了一个它自己的 colors 属性，就跟专门创建了一个 SubType.prototype.colors 属性一样。
 * 结果是 SubType 的所有实例都会共享这一个 colors 属性，因此对 instance.colors 的修改能够通过 instance2.colors 反映出来。
 */
SubType.prototype = new SuperType();

var instance = new SubType();
instance.colors.push("YELLOW");

console.log("instance.colors=" + instance.colors);// RED,BLUE,GREEN,YELLOW

var instance2 = new SubType();
console.log("instance2.colors=" + instance2.colors);// RED,BLUE,GREEN,YELLOW

/**
 * 在创建子类型的实例时，不能向超类型的构造函数中传递参数。
 * 实际上，应该说是没有办法在不影响所有对象实例的情况下，给超类型的构造函数传递参数。
 * 有鉴于此，再加上由于原型中包含引用类型值所带来的问题，实践中很少会单独使用原型链。
 */