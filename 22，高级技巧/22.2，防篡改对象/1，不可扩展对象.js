
// 默认情况下，所有对象都是可以扩展的。也就是说，任何时候都可以向对象中添加属性和方法。
// 可以像下面这样先定义一个对象，然后再给它添加一个属性。

var person = {
    name: "Tom"
};

person.age = 20;
console.log(person.age);// 20

// 使用 Object.preventExtensions() 方法可以改变这个行为，使得不能再给对象添加属性和方法。

Object.preventExtensions(person);
person.code = 'Hello';

console.log(person.code);// undefined

// 虽然不能给对象添加新成员，但已有的成员则丝毫不受影响，仍然可以修改和删除已有的成员。

delete person.age;
console.log(person.age);// undefined

// 使用 Object.isExtensible() 方法还可以确定对象是否可以扩展。

console.log(Object.isExtensible(person));
console.log(Object.isExtensible({}));