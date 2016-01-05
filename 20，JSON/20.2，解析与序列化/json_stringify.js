
/**
 * 序列化选项
 * 
 * JSON.stringify() 除了要序列化的 JavaScript 对象外，还可以接收另外两个参数，
 * 这两个参数用于指定以不同的方式序列化 JavaScript 对象。
 * 第一个参数是个过滤器，可以是一个数组或者是一个函数；第二个参数是一个选项，表示是否在JSON字符串中保留缩进。
 * 单独或组合使用这两个参数，可以更全面深入地控制JSON的序列化。
 */

// 1，过滤结果

var book = {
	title : "Professional JavaScript",
	authors : [ "Tom Green" ],
	edition : 3
};

// 如果过滤器参数是数组，那么 JSON.stringify() 的结果中将只包含数组中列出的属性。
var jsonText = JSON.stringify(book, [ "title", "authors" ]);
console.log("jsonText=" + jsonText);

// 如果第二个参数是函数，则行为会有所不同。传入的函数接收两个参数，属性名和属性值。
// 根据属性名可以知道应该如何处理要序列化的对象中的属性。为了改变序列化对象的结果，函数返回的值就是相应属性的值。
// 如果函数返回了 undefined，那么相应的属性会被忽略。
jsonText = JSON.stringify(book, function(key, value) {
	switch (key) {
	case "authors":
		return value.join(",");
	case "edition":
		return undefined;
	default:
		return value;
	}
});

console.log("jsonText=" + jsonText);


// 2，字符串缩进

// JSON.stringify()的第三个参数用于控制结果中的缩进和空白符，并自动插入换行符。
jsonText = JSON.stringify(book, null, 4);
console.log("jsonText=" + jsonText);


// 3，toJSON() 方法

// 如果 JSON.stringify() 还不能满足某些对象进行自定义序列化的需求，则可以通过对象上调用 toJSON() 方法，返回其自身的JSON数据格式。
var book2 = {
	title : "Professional JavaScript",
	authors : [ "Tom Green" ],
	edition : 3,
	toJSON : function() {
		return this.title;
	}
};

/**
 * 把一个对象传入 JSON.stringify()，序列化该对象的顺序如下：
 * 1，如果存在 toJSON() 方法而且能通过它取得有效的值，则调用该方法。否则，按默认顺序执行序列化。
 * 2，如果提供了第二个参数，应用这个函数过滤器。传入函数过滤器的值是第1步返回的值。
 * 3，对第2步返回的每个值进行相应的序列化。
 * 4，如果提供了第三个参数，执行相应的格式化。
 */
jsonText = JSON.stringify(book2);
console.log("jsonText=" + jsonText);
