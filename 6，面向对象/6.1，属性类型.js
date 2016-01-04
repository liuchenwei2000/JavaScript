
/**
 * ES5 在定义只有内部才用的性质（attribute）时，描述了对象属性（property）的各种特征。
 * 这些性质是为了实现 JavaScript 引擎用的，因此在 JavaScript 中不能直接访问它们。
 * 为了表示性质是内部值，规范把它们用两对方括号表示，如[[Enumerable]]。
 */

/**
 * ECMAScript 中有两种属性：数据属性和访问器属性。
 * 
 * 1，数据属性
 *
 * 数据属性包含了一个数据值的位置，在这个位置可以读取和写入值。
 *
 * 有4个描述其行为的性质：
 * [[Configurable]]
 * 表示能否通过 delete 删除属性从而重新定义属性，能否修改属性的性质，或者能否把属性修改为访问器属性。默认值是 true。
 * [[Enumerable]]
 * 表示能否通过 for-in 循环返回属性。默认值是 true。
 * [[Writable]]
 * 表示能否修改属性的值。默认值是 true。
 * [[Value]]
 * 包含这个属性的数据值，读取属性值的时候，从这个位置读；写入属性值的时候，把新值保存在这个位置。默认值是 undefined。
 */

var person = {
		// 创建了一个名为 name 的属性，为它指定的值是 "tom"。
		// 也就是说 [[Value]] 性质将被设置为"tom"，而对这个值的任何修改都将反映在这个位置。
		name : "tom"
};

/**
 * 要修改属性默认的性质，必须使用 Object.defineProperty() 方法。
 * 
 * 这个方法接收三个参数：属性所在的对象、属性的名字和一个描述符对象。
 * 其中，描述符对象的属性必须是：configurable、enumerable、writable 和 value。
 * 设置其中的一个或多个值，可以修改对应的性质值。
 */

var person2 = {};

// 定义 person2 的 name 属性不可修改，且值为 Tom
Object.defineProperty(person2, "name", {
	writable : false,
	value : "Tom"
});

console.log("person2.name=" + person2.name);
// 这里即便对 person2 的 name 属性进行赋值也没有任何用处。
person2.name = "Ann";
console.log("person2.name=" + person2.name);


var person3 = {};

// 定义 person3 的 name 属性不可配置，且值为 Tom
Object.defineProperty(person3, "name", {
	configurable : false,
	value : "Tom"
});

console.log("person3.name=" + person3.name);
// 下面的操作是无效的
delete person3.name;
console.log("person3.name=" + person3.name);

// 一旦把属性定义为不可配置的，就不能再把它变回可配置了。
// 此时，再调用方法 Object.defineProperty() 修改除 writable 之外的性质，就会导致错误。
// 也就是说，可以多次调用 Object.defineProperty() 方法修改用一个属性，但在把 configurable 性质设置为 false 之后就会有限制了。
Object.defineProperty(person3, "name", {
	configurable : true,
	value : "Tom"
});

// 在调用 Object.defineProperty() 方法时，如果不指定，性质的默认值都是 false。
// 多数情况下，可能没有必要利用 Object.defineProperty() 方法提供的这些高级功能。


/**
 * 2，访问器属性
 *
 * 访问器属性不包含数据值，只包含一对 getter 和 setter 函数（不过这两个函数都不是必需的）。
 * 在读取访问器属性时，会调用 getter 函数，这个函数负责返回有效的值；
 * 在写入访问器属性时，会调用 setter 函数并传入新值，这个函数负责决定如何处理数据。
 *
 * 有4个描述其行为的性质：
 * [[Configurable]]
 * 表示能否通过 delete 删除属性从而重新定义属性，能否修改属性的性质，或者能否把属性修改为访问器属性。默认值是 true。
 * [[Enumerable]]
 * 表示能否通过 for-in 循环返回属性。默认值是 true。
 * [[Getter]]
 * 在读取属性时调用的函数，默认值是 undefined。
 * [[Setter]]
 * 在写入属性时调用的函数，默认值是 undefined。
 */

// 这是使用访问器属性的常见方式，即设置一个属性的值会导致其他属性发生变化。
var person4 = {
	_year : 2015,// 注意这里是 _year
	age : 0
};

// 访问器属性不能直接定义，必须使用 Object.defineProperty() 来定义。
Object.defineProperty(person4, "year", {// 注意这里是为 year 属性定义访问器
	get : function() {
		return this._year;
	},
	set : function(newValue) {
		this._year = newValue;
		this.age = 2015 - newValue;
	}
});

person4.year = 2000;// 这里访问的是 year 属性
console.log("person4.year=" + person4.year);
console.log("person4.age=" + person4.age);

// 不一定非要同时指定 getter 和 setter，只指定 getter 意味着属性是不可写入的，尝试写入属性会被忽略。

/**
 * 使用 Object.defineProperties() 方法定义多个属性性质
 * 
 * 该方法可以通过描述符一次定义多个属性。它接收两个对象参数：
 * 第一个对象是要添加和修改其属性的对象，第二个对象的属性与第一个对象中要添加或修改的属性一一对应。
 */

var book = {};

// 在 book 对象上定义了两个数据属性（_year 和 edition）和一个访问器属性（year）。
Object.defineProperties(book, {
	_year : {
		value : "2015"
	},
	
	edition : {
		value : 1
	},
	
	year : {
		get : function() {
			return this._year;
		},
		set : function(newValue) {
			this._year = newValue;
			this.edition = 2015 - newValue;
		}
	}
});


/**
 * 读取属性的性质
 * 
 * 通过 Object.getOwnPropertyDescriptor() 方法，可以取得给定属性的描述符。
 * 该方法接收两个参数：属性所在的对象和要读取其描述符的属性名称。
 * 返回值是一个对象，如果是访问器属性，这个对象的属性有 configurable、enumerable、get 和 set。；
 * 如果是数据属性，这个对象的属性有 configurable、enumerable、writable 和 value。
 */

var _yearDescriptor = Object.getOwnPropertyDescriptor(book, "_year");
console.log("_year.configurable=" + _yearDescriptor.configurable);
console.log("_year.enumerable=" + _yearDescriptor.enumerable);
console.log("_year.writable=" + _yearDescriptor.writable);
console.log("_year.value=" + _yearDescriptor.value);

var yearDescriptor = Object.getOwnPropertyDescriptor(book, "year");
console.log("year.configurable=" + yearDescriptor.configurable);
console.log("year.enumerable=" + yearDescriptor.enumerable);
console.log("year.get=" + yearDescriptor.get);
console.log("year.set=" + yearDescriptor.set);
