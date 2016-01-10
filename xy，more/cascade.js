
/**
 * 有一些方法没有返回值，如果让这些方法返回 this 而不是 undefined，就可以启用级联。
 * 级联技术（链式调用）可以产生出极富表现力的接口。
 */
function Person() {

	this.setCode = function (_code) {
		this.code = _code;
		return this;
	};

	this.setName = function (_name) {
		this.name = _name;
		return this;
	};

	this.setMessage = function (_message) {
		this.message = _message;
		return this;
	};

	this.toString = function () {
		return this.code + ", " + this.name + ", " + this.message;
	}
}

var person = new Person();
// 启用了级联技术，可以在单独一条语句中依次调用同一个对象的多个方法。
var result = person.setCode('c001').setName("Tom").setMessage("Hello World").toString();
console.log(result);

