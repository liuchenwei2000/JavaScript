/**
 * 借用构造函数的技术（有时候也叫伪造对象或经典继承）。
 *
 * 这种技术的基本思想相当简单，即在子类型构造函数的内部调用超类型构造函数。
 * 别忘了，函数只不过是在特定环境中执行代码的对象，
 * 因此通过使用 apply()和 call()方法也可以在（将来）新创建的对象上执行构造函数。
 */

function SuperType() {
    this.colors = ['RED','BLUE','GREEN'];
}

function SubType() {
    // 继承了 SuperType
    SuperType.call(this);
    // 这样就会在新 SubType 对象上执行 SuperType() 函数中定义的所有对象初始化代码。
    // 结果，SubType 的每个实例就都会具有自己的 colors 属性的副本。
}

var instance = new SubType();
instance.colors.push("YELLOW");

console.log("instance.colors=" + instance.colors);// RED,BLUE,GREEN,YELLOW

var instance2 = new SubType();
console.log("instance2.colors=" + instance2.colors);// RED,BLUE,GREEN