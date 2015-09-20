
// 函数属性：length 和 prototype

/**
 * 函数是对象，因此函数也有属性和方法，每个函数都包含两个属性：length 和 prototype。
 * 
 * 其中length 属性表示函数希望接收的命名参数的个数。
 * 
 * 对于 ECMAScript 中的引用类型而言，prototype 是保存它们所有实例方法的真正所在。
 * 换句话说，诸如 toString() 和 valueOf() 等方法实际上都保存在 prototype 名下，只不过是通过各自对象的实例访问罢了。
 * 在创建自定义引用类型以及实现继承时，prototype 属性的作用极为重要（详见第六章）。
 */

function sayHi() {
}

function say(what) {
}

function add(num1,num2) {
}

console.log("sayHi.length=" + sayHi.length);
console.log("say.length=" + say.length);
console.log("add.length=" + add.length);