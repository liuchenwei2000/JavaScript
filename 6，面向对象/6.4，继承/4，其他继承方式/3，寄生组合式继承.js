
function combinationInheritance(){

    /**
     * 组合继承是 JavaScript 最常用的继承模式；不过，它也有自己的不足。
     * 组合继承最大的问题就是无论什么情况下，都会调用两次超类型构造函数：
     * 一次是在创建子类型原型的时候，另一次是在子类型构造函数内部。
     *
     * 在第一次调用 SuperType 构造函数时，SubType.prototype 会得到两个属性：
     * name 和 colors；它们都是 SuperType 的实例属性，只不过现在位于 SubType 的原型中。
     * 当调用 SubType 构造函数时，又会调用一次 SuperType 构造函数，这次又在新对象上创建了实例属性 name 和 colors。
     * 于是，这两个属性就屏蔽了原型中的两个同名属性。这就是调用两次 SuperType 构造函数的结果。
     */

    function SuperType(aname) {
        this.name = aname;
        this.colors = ['RED','BLUE','GREEN'];
    }

    SuperType.prototype.sayName = function(){
        console.log("Hi " + this.name);
    };

    function SubType(aname, amessage) {
        SuperType.call(this, aname);// 第二次调用 SuperType()
        this.message = amessage;
    }

    SubType.prototype = new SuperType();// 第一次调用 SuperType()
    SubType.prototype.constructor = SubType;

    SubType.prototype.getMessage = function(){
        return this.message;
    };
}

/**
 * 寄生组合式继承，即通过借用构造函数来继承属性，通过原型链的混成形式来继承方法。
 * 基本思路是：不必为了指定子类型的原型而调用超类型的构造函数，所需要的无非就是超类型原型的一个副本而已。
 * 本质上，就是使用寄生式继承来继承超类型的原型，然后再将结果指定给子类型的原型。
 */

/**
 * inheritPrototype() 函数实现了寄生组合式继承的最简单形式。
 * 这个函数接收两个参数：子类型构造函数和超类型构造函数。
 * 在函数内部，第一步是创建超类型原型的一个副本。
 * 第二步是为创建的副本添加 constructor 属性，从而弥补因重写原型而失去的默认的 constructor 属性。
 * 最后一步，将新创建的对象（即副本）赋值给子类型的原型。
 */
function inheritPrototype(subType, superType){
    var prototype = object(superType.prototype); // 创建对象
    prototype.constructor = subType; // 增强对象
    subType.prototype = prototype; // 指定对象
}

function object(o) {
    function F() {
    }
    F.prototype = o;
    return new F();
}

function SuperType(aname) {
    this.name = aname;
    this.colors = ['RED', 'BLUE', 'GREEN'];
}

SuperType.prototype.sayName = function () {
    console.log("Hi " + this.name);
};

function SubType(aname, amessage) {
    SuperType.call(this, aname);// 第二次调用 SuperType()
    this.message = amessage;
}

// 调用 inheritPrototype() 函数去替换前面例子中为子类型原型赋值的语句
inheritPrototype(SubType,SuperType);
SubType.prototype.constructor = SubType;

SubType.prototype.getMessage = function () {
    return this.message;
};

/**
 * 这个例子的高效率体现在它只调用了一次 SuperType 构造函数，并且因此避免了在
 * SubType.prototype 上面创建不必要的、多余的属性。
 * 与此同时，原型链还能保持不变；因此，还能够正常使用 instanceof 和 isPrototypeOf()。
 * 开发人员普遍认为寄生组合式继承是引用类型最理想的继承范式。
 */
