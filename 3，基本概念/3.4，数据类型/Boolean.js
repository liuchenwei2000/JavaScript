
/**
 * Boolean 类型只有两个字面量：true 和 false，字面量大小写敏感。
 */

var a = true;
var b = false;

if(true) {
	// do something
}

/**
 * ECMAScript 中所有类型都有与这两个 Boolean 值等价的值，要将一个值转换为其对应的 Boolean 值，可以调用转型函数 Boolean()。
 * 该函数总返回一个 boolean 值，至于返回的是 true 还是 false，取决于要转换值的数据类型及其实际值。如下：
 * 
 * 	数据类型						转换为 true						转换为 false
 * 
 * 	String						任何非空字符串					    空字符串("")
 * 	Number						任何非零数值（包括无穷大）		    0和NaN
 * 	Object						任何对象							null
 * 	Undefined					不适用						    undefined
 */ 
var result = Boolean("hello");

// 上述规则对流程控制语句（如if语句）自动执行相应的 boolean 转换非常重要。
if("world"){// 此处会将字符串自动转换为 boolean 值
	// do something
}