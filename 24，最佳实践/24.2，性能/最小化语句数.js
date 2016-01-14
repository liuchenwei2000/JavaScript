
/**
 * JavaScript 代码中的语句数量也影响所执行的操作的速度。
 * 完成多个操作的单个语句要比完成单个操作的多个语句快。
 * 所以，就要找出可以组合在一起的语句，以减少脚本整体的执行时间。
 */

/**
 * 1，多个变量声明
 */

// 4 个语句单独声明很浪费
var count = 5;
var color = "blue";
var values = [1,2,3];
var now = new Date();

// 一个语句，变量声明只用了一个 var 语句，之间由逗号隔开。比单个变量分别声明快很多。
var count = 5,
    color = "blue",
    values = [1,2,3],
    now = new Date();


/**
 * 2，使用数组和对象字面量
 *
 * 只要有可能，尽量使用数组和对象的字面量方式来消除不必要的语句。
 */

// 用 4 个语句创建和初始化数组
var values = new Array();
values[0] = 123;
values[1] = 456;
values[2] = 789;

// 用 4 个语句创建和初始化对象
var person = new Object();
person.name = "Nicholas";
person.age = 29;
person.sayName = function () {
    alert(this.name);
};

// 只用一条语句创建和初始化数组
var values = [123, 456, 789];
// 只用一条语句创建和初始化对象
var person = {
    name : "Nicholas",
    age : 29,
    sayName : function(){
        alert(this.name);
    }
};