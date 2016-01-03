
// 1，检测数组

/**
 * 对于一个网页，或者一个全局作用域而言，使用 instanceof 操作符就能得到满意的结果：
 * if(value instanceof Array)
 * 
 * 它的问题在于假定单一的全局执行环境，如果网页中包含多个框架（iframe），
 * 那实际上就存在两个以上不同的全局执行环境，从而存在两个以上不同版本的Array构造函数。
 * 如果从一个框架向另一个框架传入一个数组，那么传入的数组与第二个框架中原生创建的数组分别具有各自不同的构造函数。
 * 为了解决这个问题，ECMAScript5 新增了 Array.isArray() 方法来最终确定某个值到底是不是数组，而不管它是在哪个全局执行环境中创建的。
 */

var array1 = [ "1", "2" ];
if (Array.isArray(array1)) {
	console.log("array1 is an array.");
}


// 2，转换方法

/**
 * 所有对象都具有 toLocaleString()、toString()和 valueOf() 方法。
 * 其中，调用数组的 toString() 方法会返回由数组中每个值的字符串形式拼接而成的一个以逗号分隔的字符串，
 * 实际上，为了创建这个字符串会调用数组每一项的 toString() 方法。
 */

var colors = [ "red", "green", "yellow" ];
console.log("colors.toString()=" + colors.toString());
console.log("colors.valueOf()=" + colors.valueOf());// valueOf() 返回的还是数组
console.log("colors=" + colors);// 后台默认调用对象的 toString() 方法

// 数组继承的 toLocaleString()、toString() 和 valueOf() 方法，在默认情况下都会以逗号分隔的字符串的形式返回数组项，
// 而使用 join() 方法，则可以使用不同的分隔符来构建这个字符串。
// join() 方法只接收一个参数，即用作分隔符的字符串，然后返回包含所有数组项的字符串。
console.log('colors.join(".")=' + colors.join("."));
console.log('colors.join("|")=' + colors.join("|"));

// 如果数组中的某一项的值是 null 或者 undefined，那么该值的在 join()、toString()
// 和 toLocaleString()方法返回的结果中以空字符串表示。
var array2 = [ "a", "b", null, "d", undefined, "f" ];
console.log("array2.toString()=" + array2.toString());