/**
 * 现代 Web 应用中频繁使用的一项功能就是表单数据的序列化，XMLHttpRequest 2 级为此定义了FormData 类型。
 * FormData 为序列化表单以及创建与表单格式相同的数据（用于通过 XHR 传输）提供了便利。
 */
function testFormData() {

    /**
     * 创建了一个 FormData 对象，并向其中添加了一些数据。
     * append() 方法接收两个参数：键和值，分别对应表单字段的名字和字段中包含的值。
     */
    var data = new FormData();
    data.append("name", "Nicholas");

    // 通过向 FormData 构造函数中传入表单元素，也可以用表单元素的数据预先向其中填入键值对。
    var data2 = new FormData(document.forms[0]);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/ajax/change.do", true);

    // 创建了 FormData 的实例后，可以将它直接传给 XHR 的 send()方法
    xhr.send(data2);
    // 使用 FormData 的方便之处体现在不必明确地在 XHR 对象上设置请求头部。
    // XHR 对象能够识别传入的数据类型是 FormData 的实例，并配置适当的头部信息。
}
