
/**
 * 为了将 XML 解析为 DOM 文档，浏览器引入了 DOMParser 类型。
 *
 * 在解析 XML 之前，首先必须创建一个 DOMParser 的实例，然后再调用 parseFromString() 方法。
 * 这个方法接受两个参数：要解析的 XML 字符串和内容类型（内容类型始终都应该是"text/xml"）。
 * 返回的值是一个 Document 的实例。
 */

var parser = new DOMParser();

var xmldom = parser.parseFromString("<root><child/></root>", "text/xml");

console.log(xmldom.documentElement.tagName);// root
console.log(xmldom.documentElement.firstChild.tagName);// child

// 操作 XML DOM，就像 HTML DOM 一样
var anotherChild = xmldom.createElement("child");
xmldom.documentElement.appendChild(anotherChild);

var children = xmldom.getElementsByTagName("child");
console.log(children.length);// 2

/**
 * 在发生解析错误时，仍然会从 parseFromString() 中返回一个 Document 对象，
 * 但这个对象的文档元素是 <parsererror>，而文档元素的内容是对解析错误的描述。
 *
 * 可以使用下面的方式，对解析错误进行监控。
 */

var parser = new DOMParser(),
	xmldom,
	errors;
try {
	xmldom = parser.parseFromString("<root>", "text/xml");
	errors = xmldom.getElementsByTagName("parsererror");
	if (errors.length > 0){
		throw new Error("Parsing error!");
	}
} catch (ex) {
	alert("Parsing error!");
}
