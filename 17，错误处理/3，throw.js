/**
 * 与 try-catch 语句相配的还有一个 throw 操作符，用于随时抛出自定义错误。
 * 抛出错误时，必须要给 throw 操作符指定一个值，这个值是什么类型，没有要求。
 * 如果把 throw 与 try 和 catch 一起使用，那么就能够控制程序流，并生成自定义的错误消息。
 * 在遇到 throw 操作符时，代码会立即停止执行。仅当有 try-catch 语句捕获到被抛出的值时，代码才会继续执行。
 */

// 通过使用某种内置错误类型，可以更真实地模拟浏览器错误。
// 每种错误类型的构造函数接收一个参数，即实际的错误消息。
// 这行代码抛出了一个通用错误，带有一条自定义错误消息。
// 浏览器会像处理自己生成的错误一样，来处理这行代码抛出的错误。
// 在创建自定义错误消息时最常用的错误类型是 Error、 RangeError、 ReferenceError 和 TypeError。
throw new TypeError("Error occured");//

// 利用原型链还可以通过继承 Error 来创建自定义错误类型
// 浏览器对待继承自 Error 的自定义错误类型，就像对待其他错误类型一样。
// 如果要捕获自己抛出的错误并且把它与浏览器错误区别对待的话，创建自定义错误是很有用的。
function MyError(mesaage){
    this.name = "my error";
    this.message = mesaage;
}

MyError.prototype = new Error();

throw new MyError("Something wrong happened");