
/**
 * 在需要给文档插入大量新 HTML 标记的情况下，通过 DOM 操作仍然非常麻烦，
 * 因为不仅要创建一系列 DOM 节点，而且还要小心地按照正确的顺序把它们连接起来。
 * 相对而言，使用插入标记的技术，直接插入 HTML 字符串不仅更简单，速度也更快。
 *
 * 以下与插入标记相关的 DOM 扩展已经纳入了 HTML5 规范。
 */

/**
 * 1，innerHTML 属性
 *
 * 在读模式下，innerHTML 属性返回与调用元素的所有子节点（包括元素、注释和文本节点）对应的 HTML 标记。
 * 在写模式下，innerHTML 会根据指定的值创建新的 DOM 树，然后用这个 DOM 树完全替换调用元素原先的所有子节点。
 */

var div = document.getElementById('mydiv');
console.log(div.innerHTML);

// 因为 innerHTML 的值被认为是 HTML，所以其中的所有标签都会按照浏览器处理 HTML 的标准方式转换为元素
// （同样，这里的转换结果也因浏览器而异）。如果设置的值仅是文本而没有 HTML 标签，那么结果就是设置纯文本。
// 设置了 innerHTML 之后，可以像访问文档中的其他节点一样访问新创建的节点。
div.innerHTML = 'Foo Bar';

/**
 * 2，outerHTML 属性
 *
 * 在读模式下，outerHTML 返回调用它的元素本身及所有子节点的 HTML 标签。
 * 在写模式下，outerHTML 会根据指定的 HTML 字符串创建新的 DOM 子树，然后用这个 DOM 子树完全替换调用元素。
 */

console.log(div.outerHTML);

div.outerHTML = '<div><p>Foo Bar</p></div>';

/**
 * 在插入大量新 HTML 标记时，使用 innerHTML 属性与通过多次 DOM 操作先创建节点再指定它们之间的关系相比，效率要高得多。
 * 这是因为在设置 innerHTML 或 outerHTML 时，就会创建一个 HTML 解析器。
 * 这个解析器是在浏览器级别的代码（通常是 C++ 编写的）基础上运行的，因此比执行 JavaScript 快得多。
 * 不可避免地，创建和销毁 HTML 解析器也会带来性能损失，所以最好能够将设置 innerHTML 或 outerHTML 的次数控制在合理的范围内。
 */
