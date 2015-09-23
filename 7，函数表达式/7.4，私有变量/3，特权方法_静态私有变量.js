
// 通过在私有作用域中定义私有变量或函数，也可以创建特权方法。

(function() {// 这是一个私有作用域

	// 私有变量
	var counter = 0;

	// 私有函数
	function log() {
		console.log("counter=" + counter);
	}

	// 构造函数
	MyObject = function() {
	};
	
	/*
	 * 特权方法
	 * 
	 * 公有方法是在 MyObject 原型上定义的，这是典型的原型模式。
	 * 这个模式在定义构造函数时并没有使用函数声明，而是使用了函数表达式。
	 * 这是因为函数声明只能创建局部函数，但并不是我们想要的。
	 * 出于同样的原因，也没有在声明 MyObject 时使用 var 关键字。
	 * 从而使得 MyObject 变成了一个全局变量，能够在私有作用域之外被访问到。
	 */ 
	MyObject.prototype.publicLog = function(){
		counter++;
		log();
	};
})();

// 在创建 MyObject 的实例后，除了使用 publicLog() 这一途径外，
// 没有任何办法可以直接访问私有变量 counter 和私有函数 log()。

var myObj = new MyObject();
myObj.publicLog();


/*
 * 该模式与构造函数中定义特权方法的主要区别在于私有变量和函数是由实例共享的，所有实例都使用同一个变量和函数。 
 */

(function() {// 这是一个私有作用域

	// 在这种模式下，变量 name 就变成了一个静态的、由所有实例共享的属性。
	// 也就是说，在一个实例上调用 setName() 会影响所有实例。
	
	// 私有变量
	var name = "";

	// 构造函数
	Person = function(aname) {
		name = aname;
	};

	Person.prototype.getName = function() {
		return name;
	};

	Person.prototype.setName = function(newName) {
		name = newName;
	};
})();

var person1 = new Person("tom");
console.log("person1.getName()=" + person1.getName());
person1.setName("ann");
console.log("person1.getName()=" + person1.getName());

var person2 = new Person("jimmy");
console.log("person2.getName()=" + person2.getName());
console.log("person1.getName()=" + person1.getName());
