
/**
 * 解析选项
 * 
 * JSON.parse() 也可以接收一个参数，该参数是一个函数，将在每个键值对上调用。
 * 与 JSON.stringify() 接收的过滤函数（replacer）相对应，这个函数被称为还原函数（reviver），
 * 但这两个函数的签名是相同的——都接收两个参数，一个键和一个值，而且都需要返回一个值。
 * 
 * 如果还原函数返回 undefined，则表示要从结果中删除相应的键：如果返回其他值，则将该值插入到结果中。
 */

// 还原 Date 对象

var book = {
	title : "Professional JavaScript",
	authors : [ "Tom Green" ],
	edition : 3,
	releaseDate : new Date(2010,10,1)
};

var jsonText = JSON.stringify(book);
log("jsonText=" + jsonText);

var bookCopy = JSON.parse(jsonText, function(key,value){
	if("releaseDate" == key) {
		return new Date(value);
	}else {
		return value;
	}
}); 
log("bookCopy.releaseDate.getFullYear()=" + bookCopy.releaseDate.getFullYear());
