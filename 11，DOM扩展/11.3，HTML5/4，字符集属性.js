
/**
 * HTML5 新增了几个与文档字符集有关的属性。
 *
 * 其中，charset 属性表示文档中实际使用的字符集，也可以用来指定新字符集。
 * defaultCharset 属性表示根据默认浏览器及操作系统的设置，当前文档默认的字符集应该是什么。
 */

console.log(document.charset);
document.charset = 'GBK';
console.log(document.charset);

console.log(document.defaultCharset);