
/**
 * Element 类型用于表现 XML 或 HTML 元素，提供了对元素标签名、子节点及属性的访问。
 */

var p = document.getElementById("p");

var textNode = p.firstChild;

console.log("textNode.nodeType=" + textNode.nodeType);// 3
console.log("textNode.nodeName=" + textNode.nodeName);// #text
console.log("textNode.nodeValue=" + textNode.nodeValue);// 节点所包含的文本
console.log("textNode.data=" + textNode.data);// 节点所包含的文本，同 nodeValue
console.log("textNode.parentNode=" + textNode.parentNode);// 某个 Element

// 有一些操作节点文本的方法，比如将参数文本添加到节点的末尾
textNode.appendData("This is new text.");

// 创建文本节点
var newNode = document.createTextNode("<strong>Hello</strong> World");
p.appendChild(newNode);

// 规范化文本节点
// DOM 中出现相邻文本节点的情况不在少数，因此有一个能够将相邻文本节点合并的方法。
console.log("p.childNodes.length="  + p.childNodes.length);
p.normalize();
console.log("p.childNodes.length="  + p.childNodes.length);