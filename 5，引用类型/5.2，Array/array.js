
// 1，创建数组

// 创建 Array 实例的方式有两种，第一种是使用 new 操作符后跟 Array 构造函数。
var array1 = new Array();
console.log("array1.length=" + array1.length);

// 如果预先知道数组要保存元素的数量，也可以直接指定，而该数量会自动变成 length 属性的值。
var array2 = new Array(20);
console.log("array2.length=" + array2.length);

// 也可以向 Array 构造函数传递数组中应该包含的元素。
var array3 = new Array("one", "two", "three");
console.log("array3.length=" + array3.length);

// 使用 Array 构造函数时也可以省略 new 操作符。
var array4 = Array("one");
console.log("array4.length=" + array4.length);

// 创建 Array 实例的第二种方式是使用数组字面量表示法。
var array5 = [];// 创建空数组
console.log("array5.length=" + array5.length);

// 数组字面量由一对包含数组项的方括号表示，多个数组项之间用逗号隔开。
var array6 = [ "a", "b", "c", "d" ];
console.log("array6.length=" + array6.length);

// 2，存取属性

// 在读取和设置数组的元素值时，要使用方括号并提供相应值得数字索引（基于0）。
var colors = [ "red", "green", "yellow" ];
console.log("colors[0]=" + colors[0]);

colors[1] = "blue";
console.log("colors[1]=" + colors[1]);

// 如果设置某个值的索引超过了数组现有项数，数组就会自动增加到该索引值加1的长度。
colors[3] = "pink";
console.log("colors.length=" + colors.length);

// 数组的项数保存在 length 属性中，但它不是只读的，通过设置这个属性，可以从数组的末尾移除项或向数组中添加新项。
var names = [ "Tim", "Lucy", "Tom" ];
console.log("names[2]=" + names[2]);
names.length = 2;
console.log("names[2]=" + names[2]);

// 由于数组最后一项的索引始终是 length-1，因此下一项的位置就是length。通过下面的操作可以很方便地在数组末尾添加新项。
names[names.length] = "Peter";
names[names.length] = "Bill";
names[names.length] = "Jimmy";

console.log("names[4]=" + names[4]);

// 当把一个值放在超出当前数组大小的位置时，数组就会重新计算其长度值，即长度值等于最后一项的索引加1。
names[99] = "100";
console.log("names.length=" + names.length);
console.log("names[98]=" + names[98]);// 但不存在的元素值全部都是 undefined

// 将数组清空的一个有效方法，就是将 length 属性设为0。
names.length = 0;
console.log("names.length=" + names.length);

// 3，遍历数组

var mycars = new Array();
mycars[0] = "Saab";
mycars[1] = "Volvo";
mycars[2] = "BMW";

// 第一种方式
for (i = 0; i < mycars.length; i++) {
	console.log(mycars[i]);
}

// 第二种方式，for-in循环
for (var x in mycars) {
	console.log(mycars[x])
}
