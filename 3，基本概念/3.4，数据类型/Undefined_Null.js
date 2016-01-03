
/**
 * Undefined 类型只有一个值，即特殊的 undefined。
 * 在使用 var 声明变量但未对其加以初始化时，变量的值就是 undefined。
 * 引入这个值是为了正式区分空对象指针与未经初始化的变量。
 */

var a;
console.log("a=" + a);

if (a === undefined) {
	console.log("a has not been initialized");
}


/**
 * Null 类型也只有一个值，即特殊的 null。
 * 从逻辑角度看，null 值表示一个空对象指针，
 * 而这也正是使用 typeof 操作符检测 null 值时会返回"object"的原因。
 */

var b = null;
console.log("typeof b=" + (typeof b));

// 如果定义的变量准备在将来用于保存对象，那么最好将改变量初始化为 null 而不是其他值。
// 这样一来，只要直接检查 null 值就可以知道相应的变量是否已经保存了一个对象的引用。
if (b != null) {
	console.log("b is not null");
}

// undefined 值是派生自 null 值的，因此它们的相等性测试将返回 true
console.log("null == undefined is " + (null == undefined));