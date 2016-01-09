/**
 * POST 请求通常用于向服务器发送应该被保存的数据。
 * 应该把数据作为请求的主体提交，而 GET 请求传统上不是这样。
 * POST 请求的主体可以包含非常多的数据，而且格式不限。
 * 与 GET 请求相比， POST 请求消耗的资源会更多一些。
 * 从性能角度来看，以发送相同的数据计，GET 请求的速度最多可达到 POST 请求的两倍。
 */
function testPost() {
    var xhr = new XMLHttpRequest();

    /**
     * 默认情况下，服务器对 POST 请求和提交 Web 表单的请求并不会一视同仁。
     * 因此，服务器端必须有程序来读取发送过来的原始数据，并从中解析出有用的部分。
     * 不过，可以使用 XHR 来模仿表单提交：
     * 首先将 Content-Type 头部信息设置为 application/x-www-form-urlencoded，也就是表单提交时的内容类型，
     * 其次是以适当的格式创建一个字符串，POST 数据的格式与查询字符串格式相同。
     */
    xhr.open("POST", "/ajax/change.do", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    var form = document.getElementById("user-info");
    xhr.send(serialize(form));// serialize 函数见 14，表单\14.4，表单序列化\serialize.html
}
