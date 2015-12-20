
/**
 * 执行环境（execution context）是 JavaScript 中最为重要的一个概念。
 * 
 * 执行环境定义了变量或函数有权访问的其他数据，决定了它们各自的行为。
 * 每个执行环境都有一个与之关联的变量对象（variable object），环境中定义的所有变量和函数都保存在这个对象中。
 * 虽然我们编写的代码无法访问这个的对象，但解析器在处理数据时会在后台使用它。
 * 
 * 全局执行环境是最外围的一个执行环境，根据所在的宿主环境不同，表示执行环境的对象也不一样。
 * 在Web浏览器中，全局执行环境被认为是 windows 对象，因此所有全局变量和函数都是作为 window 对象的属性和方法创建的。
 * 某个执行环境中的所有代码执行完毕后，该环境被销毁，保存在其中的所有变量和函数定义也随之销毁
 * （全局执行环境直到应用程序退出——例如关闭网页或者浏览器——时才会被销毁）。
 * 
 * 每个函数都有自己的执行环境，当执行流进入一个函数时，函数的环境就会被推入一个环境栈中。
 * 而在函数执行之后，栈将其环境弹出，把控制权返回给之前的执行环境。
 */

var color = "blue";

function changeColor() {
	var anotherColor = "red";

	function swapColors() {
		var tempColor = anotherColor;
		anotherColor = color;
		color = tempColor;
		// 这里是 swapColors()的局部环境，可以访问 color、anotherColor、tempColor
	}

	// 这里是 changeColor()的局部环境，可以访问 color、anotherColor
	swapColors();
}

// 这里是全局执行环境，可以访问 color
changeColor();

/**
 * * JavaScript 中的代码块不会创建新的作用域（即没有块级作用域），因此变量应该被定义在函数的头部，而不是在代码块中。
 * 
 * 在其他语言中，由花括号封闭的代码块都有自己的作用域（就是JavaScript中的执行环境），因而支持根据条件来定义变量，
 * 而在JavaScript 中，if语句中的变量声明会将变量添加到当前的执行环境中。在使用 for 语句时尤其要牢记这一差异。
 */

if(true){
	var name = "tom";
}

console.log("name=" + name);// 依然可以访问到 if 语句块中声明的 name 变量

for (var i = 0; i < 5; i++) {
	// do something
}

console.log("i=" + i);// 依然可以访问到 for 语句块中声明的 i 变量

/**
 * 使用 var 声明的变量会自动被添加到最接近的环境中。在函数内部，最接近的环境就是函数的局部环境。
 * 如果初始化变量时没有使用 var 声明，该变量会自动被添加到全局环境。
 */

var arg = "arg";// 该变量会被添加到全局环境

function doSomething() {
	var arg1 = "arg1";// 该变量会被添加到函数的局部环境
	arg2 = "arg2";// 该变量会被添加到全局环境
}

console.log("arg=" + arg);
console.log("arg2=" + arg2);
console.log("arg1=" + arg1);// 这里访问不到 arg1
