/**
 * 相对于原型链而言，借用构造函数有一个很大的优势，即可以在子类型构造函数中向超类型构造函数传递参数。
 */

function SuperType(aname) {
    this.name = aname;
}

/**
 * 在 SubType 构造函数内部调用 SuperType 构造函数时，实际上是为 SubType 的实例设置了 name 属性。
 * 为了确保 SuperType 构造函数不会重写子类型的属性，可以在调用超类型构造函数后，再添加应该在子类型中定义的属性。
 */
function SubType(amessage) {
    // 继承了 SuperType，同时还传递了参数
    SuperType.call(this, "SubType");
    // 实例属性
    this.message = amessage;
}

var instance = new SubType("Hello");

console.log("instance.name=" + instance.name);
console.log("instance.message=" + instance.message);

/**
 * 如果仅仅是借用构造函数，那么也将无法避免构造函数模式存在的问题——方法都在构造函数中定义，因此函数就无法复用。
 * 而且，在超类型的原型中定义的方法，对子类型而言也是不可见的，结果所有类型都只能使用构造函数模式。
 * 考虑到这些问题，借用构造函数的技术也是很少单独使用的。
 */
