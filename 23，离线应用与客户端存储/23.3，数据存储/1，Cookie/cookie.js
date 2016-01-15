
/**
 * JavaScript 中处理 cookie 有些复杂，因为 BOM 中的 document.cookie 属性设计蹩脚。
 * 这个属性的独特之处在于它会因为使用它的方式不同而表现出不同的行为。
 */

/**
 * 当用来获取属性值时，document.cookie 返回当前页面可用的（根据 cookie 的域、路径、
 * 失效时间和安全设置）所有 cookie 的字符串，一系列由分号隔开的名值对儿。
 * 所有名字和值都是经过 URL 编码的，所以必须使用 decodeURIComponent() 来解码。
 */
console.log(document.cookie);

/**
 * 当用于设置值的时候，document.cookie 属性可以设置为一个新的 cookie 字符串。
 * 这个 cookie 字符串会被解释并添加到现有的 cookie 集合中。设置 document.cookie 并不会覆盖 cookie，
 * 除非设置的 cookie 名称已经存在。设置 cookie 的格式和 Set-Cookie 头中使用的格式一样。
 */
document.cookie = "name=tom";
document.cookie = encodeURIComponent("code") + "=" + encodeURIComponent("0091")
	+ "; domain=.wrox.com; path=/";
console.log(document.cookie);
