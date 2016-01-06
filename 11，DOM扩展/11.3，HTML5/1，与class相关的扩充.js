
/**
 * HTML 中 class 属性用得越来越多，一方面可以通过它为元素添加样式，另一方面还可以用它表示元素的语义。
 * 有很多 JavaScript 代码会来操作 CSS 类，比如动态修改类或者搜索文档中具有给定类或给定的一组类的元素等。
 * 为了让开发人员适应并增加对 class 属性的新认识，HTML5 新增了很多 API，致力于简化 CSS 类的用法。
 */

/**
 * 1，getElementsByClassName() 方法
 *
 * 接收一个参数，即一个包含一或多个类名的字符串，返回带有指定类的所有元素的 NodeList。
 * 传入多个类名时，类名的先后顺序不重要。这种原生的实现具有极大的性能优势。
 *
 * 可以通过 document 对象及所有 HTML 元素调用该方法。
 *
 * 调用这个方法时，只有位于调用元素子树中的元素才会返回。
 *
 * 使用这个方法可以更方便地为带有某些类的元素添加事件处理程序，从而不必再局限于使用 ID 或标签名。
 */

// 获取 class 属性中包含 user 和 important 的所有元素
document.getElementsByClassName('user important');

// 获取 id 为 mydiv 的元素中 class 属性为 selected 的所有子元素
document.getElementById('mydiv').getElementsByClassName('selected');

/**
 * 2，classList 属性
 *
 * 在操作 class 属性时，需要通过 className 属性值字符串添加、删除和替换类名。
 * 所以即使只修改字符串一部分，也必须每次都设置整个字符串的值。
 * HTML5 新增了一种操作 class 的方式——为所有元素添加 classList 属性，可以让操作更简单也更安全。
 */
var div = document.getElementById('mydiv');
console.log(div.className);

// HTML5 之前如果需要修改 class 属性值，就必须对字符串进行裁剪、拼接等操作。
// 使用 classList 属性可以更简便的操作 class 属性值

var divClassList = div.classList;

// length 属性表示包含元素的数量。
console.log(divClassList.length);

for (var i = 0; i < divClassList.length; i++) {
    // 可以使用 item() 方法或 中括号 语法访问其内元素
    console.log(divClassList.item(i));
    //console.log(divClassList[i]);
}

// 将给定的字符串值添加到列表中。如果值已经存在，就不再添加。
divClassList.add('newclass');
console.log(div.className);

// 从列表中删除给定的字符串。
divClassList.remove('important');
console.log(div.className);

// 如果列表中已经存在给定的值，就删除它；如果列表中没有给定的值，就添加它。
divClassList.toggle('selected');
console.log(div.className);
divClassList.toggle('selected');
console.log(div.className);

// 判断列表中是否存在给定的值，如果存在则返回 true，否则返回 false。
if(divClassList.contains('selected')){
    console.log("selected");
}