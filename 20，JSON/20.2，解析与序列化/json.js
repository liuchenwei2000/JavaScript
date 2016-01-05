
/**
 * JSON之所以流行，主要是因为可以把 JSON 数据解析成有用的 JavaScript 对象，
 * 这比 XML 解析成 DOM 文档要便捷得多，因此 JSON 就成了 Web 服务开发中交换数据的事实标准。
 * 
 * JSON 对象
 * 
 * 早期的 JSON 解析器基本上都是使用 JavaScript 的 eval() 函数，ES5 对解析 JSON 的行为进行规范，定义了全局对象 JSON。
 * JSON 对象有两个方法：stringify()和parse()，分别用于把 JavaScript 对象序列化为 JSON 字符串和把 JSON 字符串解析为原生 JavaScript 值。
 */

var book = {
	title : "Professional JavaScript",
	authors : [ "Tom Green", "Jimmy Brown" ],
	edition : 3
};

/**
 *  JSON.stringify() 输出的 JSON 字符串不包含任何空格字符或缩进。
 *  在序列化 JavaScript 对象时，所有函数及原型成员都会被有意忽略，不体现在结果中。
 *  此外，值为 undefined 的任何属性也都会被跳过。结果中最终都是值为有效 JSON 数据类型的实例属性。
 */
var jsonText = JSON.stringify(book);

console.log("jsonText=" + jsonText);

// 将 JSON 字符串直接传递给 JSON.parse() 就可以得到相应的 JavaScript 值。
// 虽然 book 和 bookCopy 具有相同的属性，但它们是独立的、没有任何关系的对象。
var bookCopy = JSON.parse(jsonText); 
console.log("bookCopy.title=" + bookCopy.title);

console.log("book === bookCopy ? " + (book === bookCopy));