
/**
 * 基本包装类型
 * 
 * 为了便于操作基本类型值，ECMAScript 还提供了3个特殊的引用类型：Boolean、Number 和 String。
 * 这些类型与其他的引用类型相似，但同时也具有与各自的基本类型相应的特殊行为。
 */

// 实际上，每当读取一个基本类型值的时候，后台就会创建一个对应的基本包装类型的对象，从而让我们能够调用一些方法来操作这些数据。

var s1 = "a string";// 变量 s1 包含一个字符串，这是一个基本类型值。

// 当访问 s1 时，访问过程处于一种读取模式，也就是要从内存中读取这个字符串的值。
// 而在读取模式中访问字符串时，后台都会自动完成下列操作：
// 1，创建 String 类型的一个实例。
// 2，在实例上调用指定的方法。
// 3，销毁这个实例。
// 经过这番处理，基本的字符串值就变得跟对象一样了。
// 而且，上面这三个步骤也分别适用于 Boolean 和 Number 类型对应的布尔值和数字值。
var s2 = s1.substring(2);
console.log("s2=" + s2);

// 下面是用 JS 代码模拟上述三个步骤：
var temp = new String("a string");
var s2 = temp.substring(2);
temp = null;

/**
 * 使用 new 操作符创建的引用类型的实例，在执行流离开当前作用域之前一直保存在内存中。
 * 而自动创建的基本包装类型的对象，则只存在于一行代码的执行瞬间，然后立即被销毁。
 * 这意味着不能在运行时为基本类型值添加属性和方法。
 */

s1.color = "red";
console.log("s1.color=" + s1.color);

/**
 * 可以显式地调用 Boolean、Number 和String 来创建基本包装类型的对象，但应该在绝对必要的情况下才能这样做。
 * 尽管如此，基本包装类型操作基本类型值的能力还是相当重要的，它们都提供了操作相应值的便捷方法。
 */

/**
 * Object 构造函数也会根据传入值的类型返回相应基本类型的实例。
 * 
 * 把字符串传给 Object 构造函数，就会创建 String 的实例；
 * 而传入数值参数则会得到 Number 的实例，传入布尔值参数则会得到 Boolean 的实例。
 */ 

var s = new Object("string");
console.log("s instanceof String=" + (s instanceof String));

var n = new Object(8);
console.log("n instanceof Number=" + (n instanceof Number));

var b = new Object(true);
console.log("b instanceof Boolean=" + (b instanceof Boolean));


// 使用 new 调用基本包装类型的构造函数，与直接调用同名的转型函数是不一样的。
// 变量 number 中保存的是基本类型的值，而变量 obj 中保存的是 Number 的实例。
var numStr = "11";

var number = Number(numStr);
console.log("typeof number=" + (typeof number));

var obj = new Number(numStr);
console.log("typeof obj=" + (typeof obj));
