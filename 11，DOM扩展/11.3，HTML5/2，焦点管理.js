
/**
 * HTML5 添加了辅助管理 DOM 焦点的功能。
 */

/**
 * 1，document.activeElement 属性
 *
 * 这个属性始终会引用 DOM 中当前获得了焦点的元素。
 * 元素获得焦点的方式有页面加载、用户输入（通常是通过按 Tab 键）和在代码中调用 focus()方法。
 *
 * 默认情况下，文档刚刚加载完成时，document.activeElement 中保存的是 document.body 元素的引用。
 * 文档加载期间，document.activeElement 的值为 null。
 */

var button = document.getElementById('mybtn');
button.focus();

console.log(button === document.activeElement);

/**
 * 2，document.hasFocus() 方法
 *
 * 用于确定文档是否获得了焦点。通过检测文档是否获得了焦点，可以知道用户是不是正在与页面交互。
 */
alert(document.hasFocus());