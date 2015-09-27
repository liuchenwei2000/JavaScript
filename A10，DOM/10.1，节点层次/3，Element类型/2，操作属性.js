
/**
 * 每个元素都有一个或多个属性，它们的用途是给出相应元素或其内容的附加信息。
 * 操作属性的 DOM 方法主要有三个：getAttribute()、setAttribute() 和 removeAttribute()。
 * 这三个方法可以针对任何属性使用，这些属性都可以用来取得或者修改相应的属性值。
 */

var div = document.getElementById("mydiv");

/**
 * 1，getAttribute()
 * 
 * 在通过 JavaScript 以编程方式操作 DOM 时，开发人员经常不使用 getAttribute()，而是只使用对象的属性。
 * 只有在取得自定义属性值的情况下，才会使用 getAttribute()。
 */

// 属性的名称不区分大小写，即 ID 和 id 代表的是同一个属性。
console.log("div.getAttribute(\"id\")=" + div.getAttribute("id"));
console.log("div.getAttribute(\"ID\")=" + div.getAttribute("ID"));
console.log("div.getAttribute(\"title\")=" + div.getAttribute("title"));
console.log("div.getAttribute(\"class\")=" + div.getAttribute("class"));
// 也可以获取自定义属性的值
console.log("div.getAttribute(\"a_custom_attr\")=" + div.getAttribute("a_custom_attr"));

// 任何元素的所有属性，也都可以通过 DOM 元素本身的属性来访问。
// 不过，只有公认的（非自定义的）属性才会以属性的形式添加到 DOM 对象中。
console.log("div.id=" + div.id);
console.log("div.title=" + div.title);
console.log("div.align=" + div.align);


/**
 * 2，setAttribute()
 * 
 * 这个方法接受两个参数：要设置的属性名和值。
 * 如果属性已经存在，则会以指定的值替换现有的值；如果属性不存在，则会创建该属性并设置相应的值。
 */

// 通过 setAttribute() 方法既可以操作 HTML 属性也可以操作自定义属性，通过该方法设置的属性名会被统一转换成小写形式。
div.setAttribute("id", "new_id");
div.setAttribute("title", "new_title");
div.setAttribute("a_custom_attr", "Welcome!");

console.log("div.getAttribute(\"id\")=" + div.getAttribute("id"));
console.log("div.getAttribute(\"title\")=" + div.getAttribute("title"));
console.log("div.getAttribute(\"a_custom_attr\")=" + div.getAttribute("a_custom_attr"));

// 同 getAttribute() 方法，任何元素的所有属性也都可以通过 DOM 元素本身的属性来设值。
// 不过，只有公认的（非自定义的）属性才会以属性的形式添加到 DOM 对象中。
div.align = "left";
console.log("div.align=" + div.align);


/**
 * 3，removeAttribute()
 * 
 * 用于彻底删除元素的属性。它不仅会清除属性的值，还会从元素中完全删除该属性。
 */

div.removeAttribute("a_custom_attr");
console.log("div.getAttribute(\"a_custom_attr\")=" + div.getAttribute("a_custom_attr"));
