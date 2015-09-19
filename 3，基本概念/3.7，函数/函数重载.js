
/**
 * ECMAScript 不可能实现真正的重载，函数没有签名，因为其参数是由包含零或多个值得数组来表示的，
 * 而没有函数签名，真正的重载是不可能做到的。
 * 
 * 通过检查传入函数中参数的类型和数量并作出不同的操作，可以模仿方法的重载。
 */

// 如果定义了两个名字相同的函数，那么后者会替代前者。
function add(num) {
	return num + 100;
}

function add(num) {
	return num + 200;
}

console.log("add(1)=" + add(1));