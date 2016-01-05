
/**
 * 使用 document.createElement() 方法可以创建新元素。
 * 这个方法只接受一个参数，即要创建元素的标签名。
 * 这个标签名在 HTML 文档中不区分大小写，而在 XML 文档中，则区分大小写。
 */

var div = document.createElement("div");

// 创建新元素的同时，也为其设置了 ownerDocument 属性。
// 还可以操作元素的属性，为它添加更多子节点，以及执行其他操作。

div.id = 'newdiv';
div.title = 'this is a new div';

// 在新元素上设置属性只是给它们赋予相应的信息，由于新元素尚未被添加到 DOM 中，因此设置这些属性不会影响浏览器的显示。
// 可以通过 appendChild()、replaceChild()、insertBefore() 等方法添加到 DOM 树中。
// 一旦将元素添加到 DOM 中，浏览器就会立即呈现该元素。此后，对这个元素所作的任何修改都会实时反映到浏览器中。

document.body.appendChild(div);