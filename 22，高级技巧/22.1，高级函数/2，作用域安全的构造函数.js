
/**
 * 构造函数其实就是一个使用 new 操作符调用的函数。
 *
 * 当使用 new 调用时，构造函数内用到的 this 对象会指向新创建的对象实例，同时给它分配这些属性。
 */

function Bad(message) {
    this.message = message;
}

var goodObject = new Bad("OK");
console.log(goodObject.message);

// 问题出在当没有使用 new 操作符来调用该构造函数的情况上。由于该 this 对象是在运行时绑定的，
// 所以直接调用 Bad() 时 this 会映射到全局对象(如 window)上，导致全局对象属性的意外增加。

Bad("Oh no");
console.log(window.message);

/**
 * 这个问题的解决方法就是创建一个作用域安全的构造函数。
 *
 * 作用域安全的构造函数在进行任何更改前，首先确认 this 对象是正确类型的实例。
 * 如果不是，那么会创建新的实例并返回。
 */

function Good(code) {
    if (this instanceof Good) {
        this.code = code;
    } else {
        return new Good(code);
    }
}

var good1 = new Good("OK");
console.log(good1.code);

// 问题出在当没有使用 new 操作符来调用该构造函数的情况上。由于该 this 对象是在运行时绑定的，
// 所以直接调用 Bad() 时 this 会映射到全局对象(如 window)上，导致全局对象属性的意外增加。

var good2 = Good("Still OK");
console.log(good2.code);
console.log(window.code);// undefined