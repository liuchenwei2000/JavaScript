

// 有两种在对象上创建特权方法的方式，第一种是在构造函数中定义特权方法。

function MyObject() {

	// 对象的私有变量（注意，不是属性）
	var counter = 0;

	// 对象的私有函数
	function log() {
		console.log("counter=" + counter);
	}
	
	/*
	 * 特权方法
	 * 
	 * 能够在构造函数中定义特权方法，是因为特权方法作为闭包有权访问在构造函数中定义的所有变量和函数。
	 * 私有变量 counter 和私有函数 log() 在外面只能通过该特权方法访问。 
	 */ 
	this.publicLog = function(){
		counter++;
		log();
	};
}

// 在创建 MyObject 的实例后，除了使用 publicLog() 这一途径外，
// 没有任何办法可以直接访问私有变量 counter 和私有函数 log()。

var myObj = new MyObject();
myObj.log();// error
myObj.publicLog();

// 利用私有变量和特权方法，可以隐藏那些不应该被直接修改的数据。

function Person(name) {// 私有变量 name，不允许直接被修改

	// 提供下面两个特权方法访问、修改私有变量 name
	this.getName = function() {
		return name;
	};

	this.setName = function(newName) {
		name = newName;
	};
}

var person = new Person("tom");
console.log("person=" + person.getName());
person.setName("jimmy");
console.log("person=" + person.getName());

// 该方式的缺点是：必须使用构造函数模式来达到这个目的，
// 因而针对每个实例都会创建同样一组特权方法，而使用静态私有变量来实现特权方法可以避免这个问题。
