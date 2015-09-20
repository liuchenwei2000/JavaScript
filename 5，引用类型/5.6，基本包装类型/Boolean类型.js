
// Boolean 类型

// Boolean 类型是与布尔值对应的引用类型，可以像下面这样创建 Boolean 对象。
var trueObj = new Boolean(true);
var falseObj = new Boolean(false);

// Boolean 类型的实例重写了valueOf()方法，返回其表示的基本类型值true或false。
console.log("trueObj.valueOf()=" + trueObj.valueOf());
console.log("falseObj.valueOf()=" + falseObj.valueOf());

// 重写了 toString() 方法，返回字符串“true”或“false”。
console.log("trueObj.toString()=" + trueObj.toString());
console.log("falseObj.toString()=" + falseObj.toString());

// 因为 Boolean 类型会带来混淆，所以建议永远不要使用 Boolean 对象。

console.log("falseObj && true=" + (falseObj && true));// 这里 falseObj 是一个对象，始终返回 true
console.log("falseObj.valueOf() && true=" + (falseObj.valueOf() && true));