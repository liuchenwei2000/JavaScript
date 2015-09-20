
// 操作方法：concat()、slice()、splice()

/**
 * concat() 方法：可以基于当前数组中的所有项创建一个新数组。
 * 
 * 具体来说，这个方法会先创建当前数组的一个副本，然后将接收到的参数添加到这个副本的末尾，最后返回新构建的数组。
 * 在没有给 concat() 方法传递参数的情况下，它只是复制当前数组并返回副本。
 * 如果传递给 concat() 方法的是一个或多个数组，则该方法会将这些数组中的每一项都添加到结果数组中。
 * 如果传递的值不是数组，这些值就会被简单地添加到结果数组的末尾。
 */ 

var colors = [ "red", "green", "yellow" ];
var colors2 = colors.concat("blue", [ "orange", "pink" ]);

console.log("colors=" + colors);
console.log("colors2=" + colors2);


/**
 * slice() 方法：可以基于当前数组中的一个或多个项创建一个新数组。
 * 
 * 接收一个或两个参数，即要返回项的起始和结束位置。
 * 在只有一个参数的情况下，slice() 方法返回从该参数指定位置开始到当前数组末尾的所有项。
 * 如果有两个参数，该方法返回起始和结束位置之间的项————但不包括结束位置的项。
 * slice() 方法不会影响原始数组。
 */ 

var array1 = [ "a", "b", "c", "d", "e", "f", "g" ];
var array2 = array1.slice(2);
var array3 = array1.slice(2, 5);

console.log("array1=" + array1);
console.log("array1.slice(2)=" + array2);
console.log("array1.slice(2, 5)=" + array3);


/**
 * splice() 方法：主要用于向数组的中部插入值，使用方式有如下三种：
 * 
 * 删除：
 * 可以删除任意数量的项，只需指定2个参数：要删除的第一项的位置和要删除的项数。
 * 
 * 插入：
 * 可以向指定位置插入任意数量的项，只需提供3个参数：起始位置、0（要删除的项数）和要插入的项。
 * 如果要插入多个项，可以传入更多的参数。
 * 
 * 替换：
 * 可以向指定位置插入任意数量的项，且同时删除任意数量的项，只需指定3个参数：
 * 起始位置、要删除的额项数和要插入的任意数量的项。插入的项数不必与删除的项数相等。
 * 
 * splice() 方法始终都会返回一个数组，该数组中包含从原始数组中删除的项（如果没有删除任何项，则返回一个空数组）。
 */ 

var numbers = [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ];
console.log("numbers=" + numbers);

var removed = numbers.splice(0, 1);// 删除第一项
console.log("removed=" + removed);

numbers.splice(1, 0, 9999, 8888);// 插入两项
console.log("numbers=" + numbers);

numbers.splice(5, 2, 111, 222, 333);// 删除两项，插入三项
console.log("numbers=" + numbers);
