
/**
 * 最严格的防篡改级别是冻结对象（frozen object）。
 *
 * 冻结的对象既不可扩展，又是密封的，而且对象数据属性的 [[Writable]] 特性会被设置为 false。
 */

var person = {
    name: "Tom"
};

// ES5 定义的 Object.freeze() 方法可以用来冻结对象。
Object.freeze(person);

person.age = 20;
console.log(person.age);// undefined

delete person.name;
console.log(person.name);// Tom

person.name = "Ann";
console.log(person.name);// Tom

// Object.isFrozen() 方法用于检测冻结对象。
// 因为冻结对象既是密封的又是不可扩展的，所以用 Object.isExtensible()
// 和 Object.isSealed()检测冻结对象将分别返回 false 和 true。

console.log(Object.isFrozen(person));
console.log(Object.isSealed(person));
console.log(Object.isExtensible(person));