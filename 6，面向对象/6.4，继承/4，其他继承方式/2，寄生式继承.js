
/**
 * 寄生式继承的思路与寄生构造函数和工厂模式类似，即创建一个仅用于封装继承过程的函数，
 * 该函数在内部以某种方式来增强对象，最后再像真地是它做了所有工作一样返回对象。
 */

function createAnother(original){
    var clone = object(original); // 通过调用某个函数创建一个新对象
    clone.sayHi = function(){ // 以某种方式来增强这个对象
        console.log("hi");
    };
    return clone; // 返回这个对象
}

function object(o) {
    function F() {
    }

    F.prototype = o;
    return new F();
}

var person = {
    name: "Tom",
    friends: ["Ann", "Peter"]
};

// 新对象不仅具有 person 的所有属性和方法，而且还有自己的 sayHi() 方法。
var anotherPerson = createAnother(person);
anotherPerson.sayHi();

// 使用寄生式继承来为对象添加函数，会由于不能做到函数复用而降低效率。