
/**
 * HTML5 扩展了 HTMLDocument，增加了新的功能。
 * 与 HTML5 中新增的其他 DOM 扩展类似，这些变化同样基于那些已经得到很多浏览器完美支持的专有扩展。
 * 所以，尽管这些扩展被写入标准的时间相对不长，但很多浏览器很早就已经支持这些功能了。
 */

/**
 * 1，readyState 属性
 *
 * readyState 属性有两个可能的值：
 * loading，正在加载文档；
 * complete，已经加载完文档。
 *
 * 使用 document.readyState 的最恰当方式，就是通过它来实现一个指示文档已经加载完成的指示器。
 * 在这个属性得到广泛支持之前，要实现这样一个指示器，必须借助 onload 事件处理程序设置一个标签，表明文档已经加载完毕。
 */

if(document.readyState == 'complete'){
    console.log("document ready");
}

/**
 * 2，兼容模式
 *
 * document.compatMode 属性用于区分渲染页面的模式是标准的还是混杂的。
 * 在标准模式下，该属性的值等于 "CSS1Compat"，而在混杂模式下，该属性的值等于 "BackCompat"。
 */

console.log(document.compatMode);

/**
 * 3，head 属性
 *
 * HTML5 新增了 document.head 属性，引用文档的 <head> 元素。
 */

console.log(document.head);