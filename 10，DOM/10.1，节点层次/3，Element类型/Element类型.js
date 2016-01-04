
/**
 * Element 类型用于表现 XML 或 HTML 元素，提供了对元素标签名、子节点及属性的访问。
 */

var div = document.getElementById("mydiv");

console.log("div.nodeType=" + div.nodeType);// 1
console.log("div.nodeName=" + div.nodeName);// DIV
console.log("div.nodeValue=" + div.nodeValue);// null
console.log("div.parentNode=" + div.parentNode);// 可能是 Document 或 Element

// 要访问元素的标签名，可以使用 nodeName 属性，也可以使用 tagName 属性，它们返回相同的值。
console.log("div.nodeName == div.tagName ? " + (div.nodeName == div.tagName));

// 在 HTML 中，标签名始终以全部大写表示，而在 XML 或 XHTML 中，标签名则始终会与源代码中的保持一致。
if (div.tagName.toLowerCase() == "div") {// 最好使用这种比较方式
	console.log("this is a div tag");
}