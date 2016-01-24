
/**
 * ECMAScript 描述了一组用于操作数据值的操作符，它们能够适用于很多值，例如字符串、数字值、布尔值，甚至对象。
 * 在应用到对象时，相应的操作符通常会调用对象的 valueOf() 或 toString() 方法，以便取得可以操作的值。
 */

// 赋值操作符：由 = 表示，作用是把右侧的值赋给左侧的变量。
var name = "tom";

// 逗号操作符：可以在一条语句中执行多个操作，多用于声明多个变量。
var a = 1, b = 2, c = 3;

// 算术操作符：和 Java 中的类似。

var add = 11 + 2;
var sub = 11 - 2;
var mul = 11 * 2;
var div = 11 / 2;
var mod = 11 % 2; // 求模

// 还可以使用简化的操作
var n = 100;
n += 1;// n = n + 1;
n -= 1;
n *= 1;
n /= 1;

var num1 = a++;// 自增
var num2 = ++a;
var num3 = -b;// 求负数

// 逻辑操作符
// 逻辑非：使用叹号（!）表示，可以应用于任何值，不论这个值是什么数据类型，该操作符都会返回一个布尔值。
var b1 = !false;// 返回 true

// 逻辑与：使用 && 表示，有两个操作数。只有当两个操作数都为 true 时才返回 true。
// 属于短路操作，即如果第一个操作数能够决定结果，那么就不会再对第二个操作数求值。
var b2 = true && false;

// 逻辑或：使用 || 表示，有两个操作数。两个操作数有至少一个为 true 时就返回 true。
// 属于短路操作，即如果第一个操作数能够决定结果，那么就不会再对第二个操作数求值。
var b3 = true || false;
// || 操作符可以用来填充默认值
var status = window.status || "unknown";

// 比较操作符：<、>、<=、>=，用于比较两个数值，返回一个布尔值。
var r1 = 1 > 2;
var r2 = 1 < 2;
var r3 = 1 >= 2;
var r4 = 1 <= 2;

// 相等操作符：用于比较两个变量是否相等，包括相等（==）和全等（===）。
// 相等会先转换类型再比较，而全等仅比较不转换。

// 相等和不相等
var d1 = 1 == 1;
var d2 = "1" == 1;
var d3 = "1" == "1";

var d11 = 1 != 1;
var d22 = "1" != 1;
var d33 = "1" != "1";

// 全等和不全等
var s1 = 1 === 1;
var s2 = "1" === 1;
var s3 = "1" === "1";

var s11 = 1 !== 1;
var s22 = "1" !== 1;
var s33 = "1" !== "1";


// 条件操作符：variable = boolean_expression ? true_value : false_value;
// 根据 boolean_expression 的求值结果对变量进行赋值，当布尔表达式为 true 时返回 true_value，否则返回 false_value。
var result = 1 > 2 ? "good" : "bad";
