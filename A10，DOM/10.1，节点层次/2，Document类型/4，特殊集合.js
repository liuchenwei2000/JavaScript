
/**
 * document 对象还有一些特殊的集合，这些集合都是 HTMLCollection 对象，
 * 为访问文档常用的部分提供了快捷方式。这些集合中的项会随着当前文档内容的更新而更新。
 */


// document.anchors：包含文档中所有带 name 属性的 <a> 元素。
console.log(document.anchors.length);
// document.applets：包含文档中所有的 <applet> 元素。
console.log(document.applets.length);
// document.forms：包含文档中所有的 <form> 元素。
console.log(document.forms.length);
// document.images：包含文档中所有的 <image> 元素。
console.log(document.images.length);
// document.links：包含文档中所有带 href 属性的 <a> 元素。
console.log(document.links.length);
