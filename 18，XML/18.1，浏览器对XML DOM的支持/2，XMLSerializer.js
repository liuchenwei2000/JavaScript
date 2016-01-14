
/**
 * XMLSerializer 对象可以将 DOM 文档序列化为 XML 字符串。
 *
 * 要序列化 DOM 文档，首先必须创建 XMLSerializer 的实例，
 * 然后将文档传入其 serializeToString () 方法，
 */

var xmldom = parser.parseFromString("<root><child/></root>", "text/xml");

var serializer = new XMLSerializer();
var xml = serializer.serializeToString(xmldom);

console.log(xml);

/**
 * XMLSerializer 可以序列化任何有效的 DOM 对象，不仅包括个别的节点，也包括 HTML 文档。
 * 将 HTML 文档传入 serializeToString() 以后，HTML 文档将被视为 XML 文档，因此得到的代码也将是格式良好的。
 */

var html = serializer.serializeToString(document);
console.log(html);