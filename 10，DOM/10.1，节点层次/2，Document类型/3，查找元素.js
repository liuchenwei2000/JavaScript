
/**
 * document 对象查找元素的几个方法：getElementById()、getElementsByTagName()、getElementsByName()。
 */

/*
 * 1，getElementById() 方法接收一个参数：要获取元素的ID。
 * 如果找到相应的元素则返回该元素，否则返回null。
 * 
 * 这里的 ID 必须与页面中元素的 id 属性严格匹配，包括大小写。
 * 如果页面多个元素的 ID 值相同，则只返回文档中第一次出现的元素。 
 */

var myDiv = document.getElementById("myDiv");

/*
 * 2，getElementsByTagName() 方法接收一个参数，即要获取元素的标签名，而返回的是包含零个或多个元素的 NodeList。
 * 在 HTML 文档中，会返回一个 HTMLCollection 对象，它与 NodeList 非常相似，可以使用方括号语法或 item() 方法来访问其内的项。
 * 
 * 虽然标准规定标签名需要区分大小写，但为了最大限度地与既有 HTML 页面兼容，传给 getElementByTagName() 的标签名是不需要区分大小写的。
 */

var divs = document.getElementsByTagName("div");
console.log("divs.length=" + divs.length);
console.log("divs[0]=" + divs[0]);
console.log("divs.item(1)=" + divs.item(1));

// 要想获取文档中的所有元素，可以使用如下方式：

var all = document.getElementsByTagName("*");

/*
 * 3，getElementsByName() 方法会返回带有指定 name 属性的所有元素，也是一个 HTMLCollection 对象。
 * 
 * 最常用的情况是获取单选按钮，为了确保发送给浏览器的值正确无误，所有单选按钮必须具有相同的 name 属性。
 */

var radios = document.getElementsByTagName("color");