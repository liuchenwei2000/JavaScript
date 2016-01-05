
/**
 * querySelectorAll() 方法接收的参数与 querySelector() 方法一样，
 * 都是一个 CSS 选择符，但返回的是所有匹配的元素而不仅仅是第一个元素。
 * 具体来说，返回值实际上是带有所有属性和方法的 NodeList 实例，
 * 而其底层实现类似于一组元素的快照，而非不断对文档进行搜索的动态查询。
 *
 * 如果没有找到匹配的元素，NodeList 就是空的。与 querySelector() 类似：
 * 通过 Document 类型调用该方法时，会在文档元素的范围内查找匹配的所有元素。
 * 通过 Element 类型调用该方法时，只会在该元素后代元素的范围内查找匹配的所有元素。
 * 如果传入了不被支持的选择符，会抛出错误。
 */

// 获取所有 <em> 元素
var ems = document.querySelectorAll("em");
// 获取 class 为 selected 的所有元素
var selecteds = document.querySelectorAll(".selected");
// 获取所有 <p> 元素中的所有 <strong> 元素
var strongs = document.body.querySelector("p strong");

var len = strongs.length;
for (var i = 0; i < len; i++) {
    console.log(strongs.item(i).nodeName);
    console.log(strongs[i].nodeValue);
}