
/**
 * ES5 通过新增 Object.create() 方法规范化了原型式继承。这个方法接收两个参数：
 * 一个用作新对象原型的对象和一个为新对象定义额外属性的对象（可选的）。
 *
 * 在没有必要创建构造函数，而只想让一个对象与另一个对象保持类似的情况下，原型式继承是完全可以胜任的。
 * 不过，包含引用类型值的属性始终都会共享相应的值，就像使用原型模式一样。
 */

var person = {
    name: "Tom",
    friends: ["Ann", "Peter"]
};

var person1 = Object.create(person);
person1.name  = "Jimmy";
person1.friends.push("Lucy");

var person2 = Object.create(person);
person2.name  = "Bill";
person2.friends.push("Lily");

console.log(person.friends);// [ 'Ann', 'Peter', 'Lucy', 'Lily' ]

/**
 * Object.create() 方法的第二个参数与 Object.defineProperties() 方法的第二个参数格式相同：
 * 每个属性都是通过自己的描述符定义的。以这种方式指定的任何属性都会覆盖原型对象上的同名属性。
 */
var person3 = Object.create(person, {
    name: {
        value: "Clark"
    },
    age: {
        value: 22
    }
});

console.log(person3.name);
console.log(person3.age);