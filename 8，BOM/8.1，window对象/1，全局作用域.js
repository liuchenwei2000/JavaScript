
/**
 * 所有在全局作用域中声明的变量、函数都会变成 window 对象的属性和方法。
 */

var age = 20;

function sayAge() {
	console.log("age=" + this.age);
}

console.log("window.age=" + window.age);
sayAge();
window.sayAge();


// 定义全局变量与在 window 对象上直接定义属性还是有一点差别：
// 全局变量不能通过 delete 操作符删除，而直接在 window 对象上定义的属性可以。

window.color = "red";

delete window.age;
delete window.color;

console.log(window.age);
console.log(window.color);