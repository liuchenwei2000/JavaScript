
/**
 * if 语句
 * 
 * 语法：if(condition) statement1 else statement2
 * 
 * 其中的 condition（条件）可以是任意表达式，ECMAScript 会自动调用 
 * Boolean() 转换函数将这个表达式的结果转换成一个布尔值。
 * 如果对 condition 求值的结果是 true，则执行 statiement1，否则执行 statement2.
 */

var age = 20;
if (age > 20) {
	console.log("You can enter in");
} else {
	console.log("Sorry.");
}

/**
 * do-while 语句
 * 
 * 语法：
 * do{
 * 	statement;
 * }while(condition);
 * 
 * do-while 语句是一种后测试循环语句，在对条件表达式求值之前，循环体内的代码至少执行一次。
 */

do {
	console.log("in do-while loop");
} while (age > 20);

/**
 * while 语句
 * 
 * 语法：
 * while(condition){
 * 	statement;
 * }
 * 
 * while 语句属于前测试循环语句，在循环体内的代码被执行之前，就会对条件求值。
 */

while (age > 20) {
	console.log("in while loop");
}

/**
 * for 语句
 * 
 * 语法：
 * for(initialization; expression; post-loop-expression){
 * 	statement;
 * }
 * 
 * for 语句也是一种前测试循环语句，但它具有在执行循环之前初始化变量和定义循环后要执行的代码的能力。
 * 只有当条件表达式 expression 返回 true 的情况下才会进入 for 循环。
 * 
 * while 循环做不到的，使用 for 循环一样做不到，for 循环只是把与循环有关的代码集中在了一个位置。
 */

var count = 10;
for (var i = 0; i < count; i++) {
	console.log("i=" + i);
}

// 在 for 循环的变量初始化表达式中，也可以不使用 var 关键字，该变量的初始化可以在外部执行。

var index;
for (index = 0; index < count; i++) {
	console.log("i=" + i);
}

// for 语句中的初始化表达式、控制表达式和循环后表达式都是可选的。下面是一个无限循环：

for (;;) {
	// do something
}

/**
 * for-in 语句
 * 
 * 语法：
 * for(property in expression){
 * 	statement;
 * }
 * 
 * for-in 语句是一种精准的迭代语句，可以用来枚举对象的属性。
 * 
 * ECMAScript 对象的属性没有顺序，因此通过 for-in 循环输出的属性名的顺序是不可预测的。
 * 建议在使用 for-in 循环之前，先检测确认该对象的值不是 null 或 undefined。
 */

// 使用 for-in 循环来显示 BOM 中 window 对象的所有属性。
// 每次执行循环时，都会将 window 对象中存在的一个属性名赋值给变量 prop，这个过程会一直持续到对象中的所有属性都被枚举一遍为止。
for ( var prop in window) {
	console.log(prop);
}

/**
 * break 和 continue 语句用于在循环中精确地控制代码的执行。
 * 
 * 其中，break 语句会立即退出循环，强制继续执行循环后面的语句；
 * 而 continue 语句虽然也是立即退出循环，但退出循环后会从循环的顶部继续执行。
 */

for (var i = 1; i < 10; i++) {
	if (i % 5 == 0) {
		break;
	}
	console.log(i);
}

for (var i = 1; i < 10; i++) {
	if (i % 5 == 0) {
		continue;
	}
	console.log(i);
}

/**
 * switch 语句
 * 
 * 语法：
 * switch (expression) {
 * 	case value1:
 * 		statement1;
 * 		break;
 *  case value2:
 *  	statement2;
 *  	break;
 *  case value3:
 *  	statement3;
 *  	break;
 *  default: 
 *  	statement4;
 * }
 * 
 * switch 语句中的每一个情形（case）的含义是：
 * 如果表达式等于这个值（value），则执行后面的语句（statement），而 break 关键字会导致代码执行流跳出 switch 语句。
 * 如果省略 break 关键字，就会导致执行完当前case后，继续执行下一个case。
 * 最后的 default 关键字则用于在表达式不匹配前面任何一种情形的时候，执行默认代码。
 * 
 * switch 语句主要是为了避免开发出大量 if/else 语句。
 */

var key = 3;
switch (key) {
case 1:
	console.log("One");
	break;
case 2:
	console.log("Two");
	break;
case 3:
	console.log("Three");
	break;
case 4:
	console.log("Four");
	break;
default:
	console.log("Zero");
}

// 如果确实需要混合几种情形，可以省略部分 break 关键字。

var month = 11;
switch (month) {
case 1:
case 3:
case 5:
case 7:
case 8:
case 10:
case 12:
	console.log("31 days");
	break;
case 4:
case 6:
case 9:
case 11:
	console.log("30 days");
	break;
default:
	console.log("28 or 29 days");
}

// switch 语句中使用任何数据类型（在很多其他语言中只能使用数值），无论是字符串，还是对象都没有问题。
// 其次，每个 case 的值不一定是常量，可以是变量，甚至是表达式。
// 另外，在比较值时使用的是全等操作符，因此不会发生类型转换（即字符串“10”不等于数值10）

var num = 15;
switch (true) {
case num < 0:
	console.log("num < 0");
	break;
case num < 10:
	console.log("num < 10");
	break;
case num < 20:
	console.log("num < 20");
	break;
default:
	console.log("num > 20");
}

/*
 * switch结构不利于代码重用，往往可以用对象形式重写。
 */

var fruit = "banana";

switch (fruit) {
case "banana":
	console.log("Monkey like it");
	break;
case "apple":
	console.log("I like it");
	break;
default:
	console.log("nothing");
}

var fruits = {
	banana : function() {
		console.log("Monkey like it");
	},
	apple : function() {
		console.log("I like it");
	},
	"default" : function() {
		console.log("nothing");
	}
};

fruits[fruit]();
