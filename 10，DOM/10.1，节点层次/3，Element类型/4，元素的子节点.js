
/**
 * 元素可以有任意数目的子节点和后代节点，因为元素可以是其他元素的子节点。
 * 元素的 childNodes 属性中包含了它的所有子节点，这些子节点有可能是元素、文本节点、注释或处理指令。
 * 不同浏览器在看待这些节点方面存在显著地不同。如下面的例子
 */

/**
 * 如果在 IE 中，那么 <ul> 元素会有3个子节点，分别是3个 <li> 元素。
 * 但如果是在其他浏览器中，<ul> 元素就会有7个元素，包括3个 <li> 元素和4个文本节点（表示<li>元素之间的空白符）。
 */
var ul = document.getElementById("myul");
var length = ul.childNodes.length;

console.log("ul.childNodes.length = " + length);

/**
 * 如果需要通过 childNodes 属性遍历子节点，一定不要忘记浏览器间的这一差别。
 * 这意味着在执行某项操作以前，通常都要先检查一下 nodeType 属性。
 */

for (var i = 0; i < length; i++) {
    if (ul.childNodes[i].nodeType == 1) {
        console.log("this is a node");
    }
}

/**
 * 元素也支持 getElementsByTagName() 方法，在通过元素调用该方法时，
 * 除了搜索起点是当前元素之外，其他方面都跟通过 document 调用这个方法相同，因此结果只会返回当前元素的后代。
 */

// 如果 ul 包含更多层次的后代元素，那么各个层次中包含的 <li> 元素也都会返回。
var items = ul.getElementsByTagName("li");
console.log(items.length);