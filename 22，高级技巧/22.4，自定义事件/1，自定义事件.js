
/**
 * 自定义事件背后的概念是创建一个管理事件的对象，让其他对象监听那些事件。
 * 实际上，这是 JavaScript 实现的观察者模式示例。
 */

// 事件源
function Source() {
    // 储存事件处理程序
    this.listeners = [];
}

Source.prototype = {

    constructor: Source,

    // 添加监听器
    addListener: function (listener) {
        this.listeners.push(listener);
    },

    // 移除监听器
    removeListener: function (listener) {
        var len = this.listeners.length,
            i;
        for (i = 0; i < len; i++) {
            if (this.listeners[i] === listener) {
                break;
            }
        }

        this.listeners.splice(i, 1);
    },

    // 发送事件
    fireEvent: function (event) {
        if (!event.target){
            event.target = this;
        }
        var len = this.listeners.length;
        for (var i = 0; i < len; i++) {
            this.listeners[i](event);
        }
    }
};

// 自定义监听器
var listener1 = function (event) {
    console.log("【listener1】" + event.message);
};

var listener2 = function (event) {
    console.log("【listener2】" + event.message);
};

var source = new Source();
source.addListener(listener1);
source.addListener(listener2);

source.fireEvent({
    message: "Hello World"
});

source.removeListener(listener2);

source.fireEvent({
    message: "Well done"
});

// 因为这种功能是封装在一种自定义类型中的，其他对象可以继承 EventTarget 并获得这个行为
// Person 类型使用了寄生组合继承方法来继承 Source。
function Person(name){
    Source.call(this);
    this.name = name;
}

inheritPrototype(Person, Source);

function inheritPrototype(subType, superType){
    var prototype = object(superType.prototype);
    prototype.constructor = subType;
    subType.prototype = prototype;
}

function object(o) {
    function F() {
    }
    F.prototype = o;
    return new F();
}

Person.prototype.say = function (message) {
    // 在某种类型的其他方法中调用 fireEvent() 方法是很常见的，同时它通常不是公开调用的。
    this.fireEvent({
        message: message
    });
};

var teacher = new Person("Mr.Green");

var student1 = function (event) {
    console.log("【student1】" + event.message);
};

var student2 = function (event) {
    console.log("【student2】" + event.message);
};

teacher.addListener(student1);
teacher.addListener(student2);

teacher.fireEvent({
    message: "Class over"
});
