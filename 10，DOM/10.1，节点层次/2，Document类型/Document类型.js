
/**
 * document 类型表示文档，在浏览器中，document 对象表示整个 HTML 页面，
 * 而且 document 对象是 window 对象的一个属性，因此可以将其作为全局对象来访问。
 * 通过这个对象，不仅可以取得与页面有关的信息，而且还能操作页面的外观及其底层结构。
 */

console.log("document.nodeType=" + document.nodeType);// 9
console.log("document.nodeName=" + document.nodeName);// #document
console.log("document.nodeValue=" + document.nodeValue);// null
console.log("document.parentNode=" + document.parentNode);// null
console.log("document.ownerDocument=" + document.ownerDocument);// null
