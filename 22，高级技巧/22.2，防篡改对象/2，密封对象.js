
/**
 * ES5 为对象定义的第二个保护级别是密封对象（sealed object）。
 * 密封对象不可扩展，而且已有成员的 [[Configurable]] 特性将被设置为 false。
 * 这就意味着不能删除属性和方法，但属性值是可以修改的。
 */

var person = {
    name: "Tom"
};

// 要密封对象，可以使用 Object.seal() 方法，添加属性和删除属性的操作会被忽略。
Object.seal(person);

person.age = 20;
console.log(person.age);// undefined

delete person.name;
console.log(person.name);// Tom

person.name = "Ann";
console.log(person.name);// Ann

// 使用 Object.isSealed() 方法可以确定对象是否被密封了。
// 因为被密封的对象不可扩展，所以用 Object.isExtensible() 检测密封的对象也会返回 false。

console.log(Object.isSealed(person));
console.log(Object.isExtensible(person));