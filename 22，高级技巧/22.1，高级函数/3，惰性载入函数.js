
/**
 * 因为浏览器之间行为的差异，多数 JS 代码包含了大量的 if 语句，在执行时才会进入正确的代码中。
 */

// 创建 XHR 对象的函数
function createXHR() {
    if (window.XMLHttpRequest) {
        // IE7+, Firefox, Chrome, Opera, Safari
        return new XMLHttpRequest();
    }else {
        // IE6, IE5
        return new ActiveXObject("Microsoft.XMLHTTP");
    }
}

// 每次调用 createXHR() 的时候，它都要对浏览器所支持的能力仔细检查。
// 即使只有一个 if 语句的代码，也肯定要比没有 if 语句的慢，所以
// 如果 if 语句不必每次执行，那么代码可以运行地更快一些。解决方案就是称之为惰性载入的技巧。
// 像下面这样，第一次调用函数时就不会损失性能，而在代码首次加载时会损失一点性能。
// 这个例子中使用的技巧是创建一个匿名、自执行的函数，用以确定应该使用哪一个函数实现。

var createXHR2 = (function () {
    if (window.XMLHttpRequest) {
        return function () {
            // IE7+, Firefox, Chrome, Opera, Safari
            return new XMLHttpRequest();
        };
    } else {
        return function () {
            // IE6, IE5
            return new ActiveXObject("Microsoft.XMLHTTP");
        };
    }
})();