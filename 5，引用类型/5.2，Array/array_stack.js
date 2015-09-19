
// 1，栈方法

/**
 * 数组可以表现的像栈一样。栈是一种LIFO（后进先出）的数据结构。
 * ECMAScript为数组专门提供了 push() 和 pop() 方法，以便实现类似栈的行为。
 * 
 * push() 方法可以接收任意数量的参数，把它们逐个添加到数组末尾，并返回修改后数组的长度。
 * pop() 方法则从数组末尾移除最后一项，减少数组的长度，然后返回移除的项。
 */

var colors = [];
var length = colors.push("red", "blue");
log("now colors length=" + length);

length = colors.push("yellow");
log("now colors length=" + length);
log("now colors=" + colors);

var item = colors.pop();
log("colors.pop()=" + item);
log("now colors length=" + colors.length);


// 2，队列方法

/**
 * 数组也可以表现的像队列一样。队列是一种FIFO（先进先出）的数据结构。
 * 实现这一操作的方法是 shift()，它能够移除数组的第一项并返回该项的值，同时将数组长度减1。
 * 结合使用 shift() 和 push()方法，可以像使用队列一样使用数组。
 * 
 * ECMAScript 还提供了 unshift() 方法，它能在数组前端添加任意个项并返回新数组的长度。
 * 同时使用 unshift() 和 pop() 方法，可以从相反的方向模拟队列。即在数组的前端添加项，从数组的末端移除项。
 */

item = colors.shift();
log("colors.shift()=" + item);
log("now colors length=" + colors.length);

length = colors.unshift("pink", "orange");
log("now colors length=" + colors.length);
log("now colors=" + colors);