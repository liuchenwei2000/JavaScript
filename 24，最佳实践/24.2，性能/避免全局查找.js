
/**
 * 访问全局变量总是要比访问局部变量慢，因为需要遍历作用域链。
 * 只要能减少花费在作用域链上的时间，就能增加脚本的整体性能。
 */

function updateUI_Old() {
    var imgs = document.getElementsByTagName("img");

    for (var i = 0, len = imgs.length; i < len; i++) {
        imgs[i].title = document.title + " image " + i;
    }
}

// updateUI_Old 函数包含了两个对于全局 document 对象的引用。
// 如果在页面上有多个图片，那么 for 循环中的 document 引用就会被执行多次甚至上百次，每次都会要进行作用域链查找。
// 通过创建一个指向 document 对象的局部变量，就可以通过限制一次全局查找来改进这个函数的性能。如下：

// 与原来的的版本相比，现在的函数只有一次全局查找，肯定更快。
// 将在一个函数中会用到多次的全局对象存储为局部变量总是没错的。

function updateUI_New() {
    var doc = document;
    var imgs = doc.getElementsByTagName("img");

    for (var i = 0, len = imgs.length; i < len; i++) {
        imgs[i].title = doc.title + " image " + i;
    }
}