
/**
 * 1，动态属性
 * 
 * 定义基本类型值和引用类型值的方式是类似的：创建一个变量并为该变量赋值。
 * 但是，当这个值保存到变量中以后，对不同类型值可以执行的操作则大相径庭。
 */

// 对于引用类型的值，可以为其添加属性和方法，也可以改变和删除其属性和方法。
// 创建一个对象并将其保存在了变量 person 中。
var person = new Object();
person.name = "Tom";// 为对象添加一个名为 name 的属性，并为其赋值。

// 如果对象不被销毁或者这个属性不被删除，则这个属性将一直存在。
console.log("person.name=" + person.name);

// 但是不能给基本类型的值添加属性，尽管这样做不会导致任何错误。
var num = 1;
num.name = "one";
console.log("num.name=" + num.name);

/**
 * 2，复制变量值
 * 
 * 在从一个变量向另一个变量复制基本类型值和引用类型值时，也存在不同。
 */

// 如果从一个变量向另一个变量复制基本类型的值，会在变量对象上创建一个新值，然后把该值复制到为新变量分配的位置上。
// 此后，这两个变量可以参与任何操作而不会互相影响。
var num1 = 5;
var num2 = num1;
num1 = 0;

console.log("num1=" + num1);
console.log("num2=" + num2);

// 如果从一个变量向另一个变量复制引用类型的值，同样也会将存储在变量对象中的值复制一份放到为新变量分配的空间中。
// 不同的是，这个值的副本实际上是一个指针，而这个指针指向存储在堆中的一个对象。
// 复制操作结束后，两个变量实际上将引用同一个对象。因此，改变其中一个变量，就会影响另一个变量。
var obj1 = new Object();
var obj2 = obj1;
obj2.name = "obj2";

console.log("obj1.name=" + obj1.name);
console.log("obj2.name=" + obj2.name);

/**
 * 3，传递参数
 * 
 * 函数的参数都是按值传递的，也就是说，把函数外部的值复制给函数内部的参数，就和把值从一个变量复制到另一个变量一样。
 * 基本类型值的传递如同基本类型变量的复制一样，而引用类型值的传递则如同引用类型变量的复制一样。
 */

// 在向参数传递基本类型的值时，被传递的值会被复制给一个局部变量（即命名参数，或者说就是 arguments 对象中的一个元素）。

function add(num){
	num += 10;
	return num;
}

var num3 = 1;
var result = add(num3)

console.log("num3=" + num3);// num3 不会变化
console.log("add(num3)=" + result);

// 在向参数传递引用类型的值时，会把这个值在内存中的地址复制给一个局部变量，因此这个局部变量的变化会反映在函数的外部。

function setName(obj){
	obj.name = "newName";
	obj = new Object();// 这个局部变量对象会在函数执行完毕后立即被销毁。
	obj.name = "newObject";
}

var obj3 = new Object();
setName(obj3);

console.log("obj3.name=" + obj3.name);// obj3 会变化

/**
 * 4，检测类型
 * 
 * typeof 操作符是确定一个变量是字符串、数值、布尔值还是undefined的最佳工具，如果变量的值是一个对象或null，
 * 则typeof操作符会返回 object。所以在检测引用类型的值时，typeof的用处不大。
 * 
 * 通常我们想知道某个值是什么类型的对象，为此可以使用 instanceof 操作符。
 * 如果变量是给定引用类型（根据它的原型链来识别）的实例，那么 instanceof 就会返回 true。
 * 
 * 根据规定，所有引用类型的值都是Object的实例。因此，在检测一个引用类型值是否是Object时，instanceof 始终会返回true。
 * 当然，如果使用 instanceof 操作符检测基本类型的值，则始终会返回 false。
 */

console.log("(obj3 instanceof Object)=" + (obj3 instanceof Object));// 变量是否是 Object
console.log("(obj3 instanceof Array)=" + (obj3 instanceof Array));// 变量是否是 Array
