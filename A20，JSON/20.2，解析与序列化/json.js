
/**
 * JSON之所以流行，主要是因为可以把JSON数据解析成有用的JavaScript对象，
 * 这比XML解析成DOM文档要便捷得多，因此，JSON就成了Web服务开发中交换数据的事实标准。
 * 
 * JSON对象
 * 
 * 早期的JSON解析器基本上都是使用JavaScript的eval()函数，ECMAScript5对解析JSON的行为进行规范，定义了全局对象JSON。
 * JSON对象有两个方法：stringify()和parse()，分别用于把JavaScript 对象序列化为JSON字符串和把JSON字符串解析为原生 JavaScript 值。 
 */

var book = {
	title : "Professional JavaScript",
	authors : [ "Tom Green" ],
	edition : 3
};

/**
 *  JSON.stringify() 输出的JSON字符串不包含任何空格字符或缩进。
 *  在序列化JavaScript对象时，所有函数及原型成员都会被有意忽略，不体现在结果中。
 *  此外，值为 undefined 的任何属性也都会被跳过。结果中最终都是值为有效JSON数据类型的实例属性。
 */
var jsonText = JSON.stringify(book);

log("jsonText=" + jsonText);

// 将JSON字符串直接传递给JSON.parse()就可以得到相应的JavaScript值。
// 虽然 book 和 bookCopy 具有相同的属性，但它们是独立的、没有任何关系的对象。
var bookCopy = JSON.parse(jsonText); 
log("bookCopy.title=" + bookCopy.title);

log("book === bookCopy ? " + (book === bookCopy));