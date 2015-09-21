
// String 类型

// String 类型是与字符串对应的引用类型，可以像下面这样创建 String 对象。
var strObj = new String("hello");

// String 对象的方法也可以在所有基本的字符串值中访问到。
console.log("\"world\".valueOf()=" + "world".valueOf());

// 继承的 valueOf()、toString()和 toLocaleString()方法，都返回对象所表示的基本字符串值。
console.log("strObj.valueOf()=" + strObj.valueOf());
console.log("strObj.toString()=" + strObj.toString());
console.log("strObj.toLocaleString()=" + strObj.toLocaleString());

// length 属性表示字符串中包含多少个字符。
console.log("strObj.length=" + strObj.length);


/**
 * String 类型提供了很多方法，用于辅助完成对 ECMAScript 中字符串的解析和操作。
 */

// 1，字符方法：charAt()、charCodeAt()
// 这两个方法用于访问字符串中特定字符，都接收一个参数，即基于 0 的字符位置。

console.log("strObj.charAt(0)=" + strObj.charAt(0));// 以单字符字符串的形式返回
console.log("strObj.charCodeAt(0)=" + strObj.charCodeAt(0));// 以单字符字符编码的形式返回

// ECMAScript5 还支持下面的访问字符的方法：
console.log("strObj[0]=" + strObj[0]);

// 2，字符串操作方法：concat()、slice()、substr()、substring()

// concat() 用于将一个或多个字符串拼接起来，返回拼接得到的新字符串。
// 但是通常情况下，直接使用 + 操作符更方便一些。
var result = strObj.concat(" world");
console.log("strObj=" + strObj);
console.log("result=" + result);

/*
 * slice()、substr()、substring()
 * 
 * 都返回被操作字符串的一个子字符串，而且都接收一或两个参数。
 * 第一个参数指定子字符串的开始位置，第二个参数表示子字符串在哪里结束。
 * slice() 和 substring() 的第二个参数指定的是子字符串最后一个字符在原字符串中的位置加一；
 * substr() 的第二个参数指定的是返回的字符个数。
 * 
 * 这三个方法不会修改字符串本身的值，它们只是返回一个基本类型的字符串值，对原始字符串没有影响。
 */

console.log("result.slice(2,5)=" + result.slice(2, 5));
console.log("result.substr(2,5)=" + result.substr(2, 5));
console.log("result.substring(2,5)=" + result.substring(2, 5));

// 如果没有指定第二个参数，则将字符串的长度作为结束位置。
console.log("result.slice(4)=" + result.slice(4));
console.log("result.substr(4)=" + result.substr(4));
console.log("result.substring(4)=" + result.substring(4));

// 3，字符串位置方法：indexOf()、lastIndexOf()
// 这两个方法都是从一个字符串中搜索给定的子字符串，然后返回子字符串的位置（如果没有找到该子字符串则返回 -1）
// indexOf()方法从字符串的开头向后搜索子字符串，lastIndexOf()方法从字符串的末尾向前搜索子字符串。
console.log("result.indexOf('o')=" + result.indexOf('o'));
console.log("result.lastIndexOf('o')=" + result.lastIndexOf('o'));

// 4，字符串转换方法：trim()、toLowerCase()、toUpperCase()

var orgin = "  this  is ";
// trim() 方法会创建一个字符串的副本，删除前置及后缀的所有空格，然后返回结果。
console.log("orgin.trim=" + orgin.trim());

// 大小写转换方法，都不会影响原字符串。
console.log("result.toLowerCase()=" + result.toLowerCase());
console.log("result.toUpperCase()=" + result.toUpperCase());

// 5，字符串模式匹配方法：match()、search()、replace()、split()

var text = "cat, bat, fat, sat";
var pattern = /.at/;

// match() 只接收一个参数，要么是一个正则表达式，要么是一个 RegExp 对象。
// 它返回一个数组，第一项是与整个模式匹配的字符串，之后每一项（如果有）保存着与正则表达式中的捕获组匹配的字符串。
var matcheds = text.match(pattern);
console.log("matcheds.index=" + matcheds.index);
console.log("matcheds[0]=" + matcheds[0]);
console.log("matcheds.length=" + matcheds.length);

// search() 接收的参数与 match() 方法相同，返回字符串中第一个匹配项（从开头向后查找）的索引，如果没有找到匹配项，则返回-1。
var pos = text.search(/at/);// at 第一次出现的位置
console.log("pos=" + pos);

/*
 * replace() 方法用于替换子字符串，它接收两个参数：
 * 第一个参数可以是 RegExp 对象或者一个字符串（它不会被转换成正则表达式）；
 * 第二个参数可以是一个字符串或者一个函数。
 * 
 * 如果第一个参数是字符串，那么只会替换第一个子字符串，要想替换所有子字符串，
 * 唯一的办法就是提供一个正则表达式，而且要指定全局标志（g）。
 */
var result = text.replace("at", "ond");
console.log("result=" + result);

var result2 = text.replace(/at/g, "ond");
console.log("result2=" + result2);

// split() 方法可以基于指定的分隔符将一个字符串分割成多个子字符串，并将结果放在一个数组中。
// 分隔符可以是字符串，也可以是一个 RegExp 对象。
// 也可以接收可选的第二个参数，用于指定数组的大小，以便确保返回的数组不会超过既定大小。
var values = text.split(",");
console.log("values=" + values);

var values2 = text.split(",", 2);
console.log("values2=" + values2);

// 6，字符串其他方法：localeCompare()

/*
 * localeCompare() 方法比较两个字符串，并返回下列值中的一个：
 * 
 * 1，如果字符串在字母表中应该排在参数字符串之前，则返回一个负数（一般是 -1，具体值看浏览器实现）。
 * 2，如果字符串等于参数字符串之前，则返回0。
 * 3，如果字符串在字母表中应该排在参数字符串之后，则返回一个正数（一般是 1，具体值看浏览器实现）。
 */

 console.log("\"hello\".localeCompare(\"world\")=" + "hello".localeCompare("world"));
 console.log("\"hello\".localeCompare(\"hello\")=" + "hello".localeCompare("hello"));
 console.log("\"hello\".localeCompare(\"aworld\")=" + "hello".localeCompare("aworld"));
