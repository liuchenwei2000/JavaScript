/**
 * GET 是最常见的请求类型，最常用于向服务器查询某些信息。
 * 必要时，可以将查询字符串参数追加到 URL 的末尾，以便将信息发送给服务器。
 * 对 XHR 而言，位于传入 open() 方法的 URL 末尾的查询字符串必须经过正确的编码才行。
 */
function testGet() {
    var xhr = new XMLHttpRequest();

    /**
     * 查询字符串中每个参数的名称和值都必须使用 encodeURIComponent() 进行编码，然后才能放到 URL 的末尾；
     * 而且所有名-值对儿都必须由和号（&）分隔。
     */
    xhr.open("GET", "/ajax/change.do?name1=value1&name2=value2", true);
    xhr.send(null);
}

// 下面这个函数可以辅助向现有 URL 的末尾添加查询字符串参数：
function addURLParam(url, name, value) {
    url += (url.indexOf("?") == -1 ? "?" : "&");
    url += encodeURIComponent(name) + "=" + encodeURIComponent(value);
    return url;
}
