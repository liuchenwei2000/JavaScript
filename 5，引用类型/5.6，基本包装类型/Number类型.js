
// Number 类型

// Number 类型是与数值对应的引用类型，可以像下面这样创建 Number 对象。
var numberObj = new Number(10);

// Number 类型的实例重写了valueOf()方法，返回其表示的基本类型数值。
console.log("numberObj.valueOf()=" + numberObj.valueOf());
// 重写了 toString() 方法，返回数值字符串形式。
console.log("numberObj.toString()=" + numberObj.toString());
// 还可以指定基数，返回数值2进制的字符串
console.log("numberObj.toString(2)=" + numberObj.toString(2));


// Number 类型还提供了一些用于将数值格式化为字符串的方法。

// toFixed() 方法会按照指定的小数位返回数值的字符串表示。
var num = 10;
console.log("num.toFixed(2)=" + num.toFixed(2));// 两位小数表示

var num2 = 10.005
console.log("num2.toFixed(2)=" + num2.toFixed(2));// 如果数值本身包含的小数位比指定的还多，那么接近指定的最大小数位的值就会舍入。

// toExponential() 方法返回以指数表示法（e表示法）表示的数值字符串形式。
var num3 = 1200000;
console.log("num3.toExponential(2)=" + num3.toExponential(2));// 两位小数的e表示法 ：1.20e+6

// toPrecision() 方法返回表示某个数值最合适的格式，可能返回 fiexd 格式，也可能返回 exponential 格式，
// 具体要看哪种格式最合适。它只接收一个参数，即表示数值的所有数字的位数（不包括指数部分）。
var num4 = 99;
console.log("num4.toPrecision(1)=" + num4.toPrecision(1));// 1e+2
console.log("num4.toPrecision(2)=" + num4.toPrecision(2));// 99
console.log("num4.toPrecision(3)=" + num4.toPrecision(3));// 99.0

// 与 Boolean 类型一样，不建议使用 Number 对象。