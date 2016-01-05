
/**
 * 对于元素间的空格，IE9 及之前版本不会返回文本节点，而其他浏览器都会返回文本节点。
 * 这样就导致了在使用 childNodes 和 firstChild 等属性时的行为不一致。
 * 为了弥补这一差异，而同时又保持 DOM 规范不变，Element Traversal 规范新定义了一组属性。
 * 
 * Element Traversal API 为 DOM 元素添加了以下 5 个属性：
 *
 * childElementCount：返回子元素（不包括文本节点和注释）的个数。
 * firstElementChild：指向第一个子元素（不包括文本节点和注释）；firstChild 的元素版。
 * lastElementChild：指向最后一个子元素（不包括文本节点和注释）；lastChild 的元素版。
 * previousElementSibling：指向前一个同辈元素（不包括文本节点和注释）；previousSibling 的元素版。
 * nextElementSibling：指向后一个同辈元素（不包括文本节点和注释）；nextSibling 的元素版。
 */

// 利用这些元素不必担心空白文本节点，从而可以更方便地查找 DOM 元素。
var child = document.firstElementChild;
while(child != document.lastElementChild){
    // do something with child
    child = child.nextElementSibling;
}