
/**
 * document 对象还有一些属性提供了所表现的网页的一些信息。
 */

// 1，title 属性包含着 <title> 元素中的文本————显示在浏览器窗口和标题栏或标签页上。
// 通过这个属性可以取得当前页面的标题，也可以修改当前页面的标题并反映在浏览器的标题栏中。

var html = document.title;
console.log("document.title=" + document.title);

document.title = "new title";
console.log("document.title=" + document.title);


/*
 * 2，URL、domain 和 referrer 三个属性都与对网页的请求有关。
 * 
 * URL 属性中包含页面完整的 URL（即地址栏中显示的URL）。
 * domain 属性中只包含页面的域名。
 * referrer 属性中则保存着链接到当前页面的那个页面的URL，在没有来源页面的情况下可能返回空字符串。
 * 
 * 所有这些信息都存在于请求的 HTTP 头部，只不过通过这些属性能够在 JavaScript 中访问它们而已。
 */

console.log("document.URL=" + document.URL);
console.log("document.domain=" + document.domain);
console.log("document.referrer=" + document.referrer);

/*
 * URL 和 domain 属性是相互关联的，如果 URL 等于 "http://www.mysite.com/app"，那么 domain 就等于 www.mysite.com。
 * 这三个属性，只有 domain 是可以设置的，但由于安全方面的限制，也并非可以给 domain 设置任何值。
 * 如果 URL 中包含一个子域名，例如 "app.mysite.com"，那么就只能将 domain 设置为 "mysite.com"，不能将其设置为 URL 中不包含的域。
 * 
 * 当页面中包含来自其他子域的框架（frame）或内嵌框架时，能够设置 domain 就非常方便了。
 * 由于跨域安全限制，来自不同子域的页面无法通过 JavaScript 通信。
 * 而通过将每个页面的 domain 设置为相同的值，这些页面就可以相互访问对方包含的 JavaScript 对象了。
 * 
 * 另外，浏览器对 domain 属性还有一个限制，如果域名一开始是松散的，那就不能将它再设置为紧绷的。
 * 比如将 domain 设置为 "mysite.com"之后，就不能再将其设置回 "app.mysite.com"，否则会出错。
 */
