
/**
 * document 对象有两个内置的访问其子节点的快捷方式：documentElement 和 doctype。
 */

// 1，documentElement 属性始终指向 HTML 页面中的 <html> 元素。

var html = document.documentElement; 

console.log("html === document.firstChild ? " + (html === document.firstChild));// true
console.log("html === document.childNodes[0] ? " + (html === document.childNodes[0]));// true

// document 对象还有一个 body 属性，直接指向 <body> 元素。
// 所有浏览器都支持 documentElement 属性和 body 属性。

var body = document.body;
console.log("body === html.lastChild ? " + (body === html.lastChild));// true


// 2，另一个可能的子节点是 doctype，通常将 <!DOCTYPE> 标签看成一个与文档其他部分不同的实体。
// 浏览器对 doctype 的支持不一致，因此这个属性的用处很有限。

var doctype = document.doctype;
console.log(doctype);

// 一般用不着在 document 对象上调用 appendChild()、removeChild()和 replaceChild() 方法，
// 因为文档类型（如果存在的话）是只读的，而且它只能有一个元素子节点（该节点通常早就已经存在了）。