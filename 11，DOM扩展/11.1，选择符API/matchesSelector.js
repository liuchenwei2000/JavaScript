
/**
 * Selectors API Level2 规范为 Element 类型新增了一个方法 matchesSelector()，
 * 该方法接收一个 CSS 选择符参数，如果调用元素与该选择符匹配，则返回 true，否则返回 false。
 *
 * 在取得某个元素引用的情况下，使用这个方法能够方便地检测它是否会被 querySelector() 或 querySelectorAll() 方法返回。
 */

if(document.body.matchesSelector('.panel')){
    // do something
}

// 但现在还没有浏览器支持 matchesSelector() 方法，只是有一些实验性的实现，
// 如 IE 的 msMatchesSelector() 方法和 Chrome 的 webkitMatchesSelector() 方法。
// 可以用下面的方式实现：

function matchesSelector(element, selector) {
    if (element.msMatchesSelector) {
        return element.msMatchesSelector(selector);
    } else if (element.webkitMatchesSelector) {
        return element.webkitMatchesSelector(selector);
    } else {
        throw new Error("Not Supported");
    }
}
