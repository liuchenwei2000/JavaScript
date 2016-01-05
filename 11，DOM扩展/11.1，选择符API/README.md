## Selectors API ##

**Selectors API** 是由 W3C 发起制定的一个标准，致力于让浏览器 **原生** 支持 CSS 查询（即根据 CSS 选择符选择与某个模式匹配的 DOM 元素）。

在此之前，所有实现这一功能的第三方 JS 库都会写一个基础的 CSS 解析器，然后再使用已有的 DOM 方法查询文档并找到匹配的节点。尽管库开发人员一再改进这一过程的性能，但最终还是只能通过运行 JavaScript 代码来完成查询操作。而把这个功能变成原生 API 之后，解析和树查询操作可以在浏览器内部通过编译后的代码来完成，极大地改善了性能。

Selectors API Level1 的核心是两个方法：`querySelector()` 和 `querySelectorAll()`。在兼容的浏览器中，可以通过 `Document` 及 `Element` 类型的实例调用它们。

