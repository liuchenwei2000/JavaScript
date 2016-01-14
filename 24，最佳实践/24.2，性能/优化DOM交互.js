
/**
 * 在 JavaScript 各个方面中， DOM 毫无疑问是最慢的一部分。
 * DOM 操作与交互要消耗大量时间，因为它们往往需要重新渲染整个页面或者某一部分。
 * 进一步说，看似细微的操作也可能要花很久来执行，因为 DOM 要处理非常多的信息。
 * 理解如何优化与 DOM 的交互可以极大得提高脚本完成的速度。
 */

/**
 * 1，最小化现场更新
 *
 * 一旦需要访问的 DOM 部分是已经显示的页面的一部分，那么就是在进行一个现场更新。
 * 之所以叫现场更新，是因为需要立即（现场）对页面对用户的显示进行更新。
 * 每一个更改，不管是插入单个字符，还是移除整个片段，都有一个性能惩罚，因为浏览器要重新计算无数尺寸以进行更新。
 * 现场更新进行得越多，代码完成执行所花的时间就越长；完成一个操作所需的现场更新越少，代码就越快。
 */

// 这段代码为列表添加了10个项目。
// 添加每个项目时，都有2个现场更新：一个添加<li>元素，另一个给它添加文本节点。
// 这样添加10个项目，这个操作总共要完成20个现场更新。

var list = document.getElementById("myList"),
    item,
    i;
for (i = 0; i < 10; i++) {
    item = document.createElement("li");
    list.appendChild(item);
    item.appendChild(document.createTextNode("Item " + i));
}

// 要修正这个性能瓶颈，需要减少现场更新的数量。一般有 2 种方法：
// 第一种是将列表从页面上移除，最后进行更新，最后再将列表插回到同样的位置。
// 这个方法不是非常理想，因为在每次页面更新的时候它会不必要的闪烁。
// 第二个方法是使用文档片段来构建 DOM 结构，接着将其添加到 List 元素中。
// 这个方式避免了现场更新和页面闪烁问题。

var list = document.getElementById("myList"),
    fragment = document.createDocumentFragment(),
    item,
    i;
for (i = 0; i < 10; i++) {
    item = document.createElement("li");
    fragment.appendChild(item);
    item.appendChild(document.createTextNode("Item " + i));
}

// 只有这里一次现场更新，它发生在所有项目都创建好之后。
// 文档片段用作一个临时的占位符，放置新创建的项目。
// 然后使用 appendChild() 将所有项目添加到列表中。
// 记住，当给 appendChild() 传入文档片段时，只有片段中的子节点被添加到目标，片段本身不会被添加的。
// 一旦需要更新 DOM，要考虑使用文档片段来构建 DOM 结构，然后再将其添加到现存的文档中。
list.appendChild(fragment);

/**
 * 2，使用 innerHTML
 *
 * 有两种在页面上创建 DOM 节点的方法：
 * 使用诸如 createElement() 和 appendChild() 之类的 DOM 方法，以及使用 innerHTML。
 * 对于小的 DOM 更改而言，两种方法效率都差不多。然而，对于大的 DOM 更改，
 * 使用 innerHTML 要比使用标准 DOM 方法创建同样的 DOM 结构快得多。
 *
 * 当把 innerHTML 设置为某个值时，后台会创建一个 HTML 解析器，
 * 然后使用内部的 DOM 调用来创建 DOM 结构，而非基于 JavaScript 的 DOM 调用。
 * 由于内部方法是编译好的而非解释执行的，所以执行快得多。
 */

// 使用 innerHTML 的关键在于（和其他 DOM 操作一样）最小化调用它的次数。
// 下面的代码在这个操作中用到 innerHTML 的次数太多了。

var list = document.getElementById("myList"),
    i;
for (i = 0; i < 10; i++) {
    list.innerHTML += "<li>Item " + i + "</li>"; // 需要避免
}

// 调用 innerHTML 实际上就是一次现场更新，构建好一个字符串然后一次性调用 innerHTML 要比调用 innerHTML 多次快得多。
var list = document.getElementById("myList"),
    html = "",
    i;
for (i = 0; i < 10; i++) {
    html += "<li>Item " + i + "</li>";
}
list.innerHTML = html;