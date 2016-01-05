
/**
 * querySelector() 方法接收一个 CSS 选择符，返回与该模式匹配的第一个元素，
 * 如果没有找到匹配的元素，返回 null。
 *
 * 通过 Document 类型调用该方法时，会在文档元素的范围内查找匹配的元素。
 * 通过 Element 类型调用该方法时，只会在该元素后代元素的范围内查找匹配的元素。
 * 如果传入了不被支持的选择符，会抛出错误。
 */

// 获取 body 元素
var body = document.querySelector("body");
// 获取 id 为 mydiv 的元素
var div = document.querySelector("#mydiv");
// 获取 class 为 selected 的第一个元素
var selected = document.querySelector(".selected");
// 获取 class 为 button 的第一个 img 元素
var img = document.body.querySelector("img.button");