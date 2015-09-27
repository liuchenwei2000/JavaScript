
/**
 * 所有 HTML 元素都由 HTMLElement 类型或其子类型表示。
 * 
 * HTMLElement 类型直接继承自 Element 并添加了一些属性，这些属性分别对应于每个 HTML 元素中都存在的标准属性。如下：
 * 
 * id：元素在文档中的唯一标识符。
 * title：有关元素的附加说明信息，一般通过工具提示条显示出来。
 * className：与元素的 class 属性对应，即为元素指定的 CSS 类。
 */

// 这些属性都可以用来取得或者修改相应的属性值。
var div = document.getElementById("mydiv");

console.log("div.id=" + div.id);
console.log("div.title=" + div.title);
console.log("div.className=" + div.className);

/*
 * 并不是对所有属性的修改都会在页面上直观地表现出来：
 * 对 id 的修改对用户而言是透明不可见的，而对 title 的修改则只会在鼠标移动到这个元素之上时才会显示出来。
 * 修改 className 时，如果新 class 关联了与此前不同的 CSS 样式，那么就会立即应用新的样式。
 */
div.id = "newID";
div.title = "newTitle";
div.className = "newClassName";