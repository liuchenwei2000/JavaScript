## 表单 ##

在 HTML 中，表单是由 <form> 元素来表示的，而在 JavaScript 中，表单对应的则是 HTMLFormElement 类型。HTMLFormElement 继承了 HTMLElement，因而与其他 HTML 元素具有相同的默认属性。不过，HTMLFormElement 也有它自己下列独有的属性和方法：

* acceptCharset：服务器能够处理的字符集；等价于 HTML 中的 accept-charset 特性。
* action：接受请求的 URL；等价于 HTML 中的 action 特性。
* elements：表单中所有控件的集合（HTMLCollection）。
* enctype：请求的编码类型；等价于 HTML 中的 enctype 特性。
* length：表单中控件的数量。
* method：要发送的 HTTP 请求类型，通常是"get"或"post"；等价于 HTML 的 method 特性。
* name：表单的名称；等价于 HTML 的 name 特性。
* reset()：将所有表单域重置为默认值。
* submit()：提交表单。
* target：用于发送请求和接收响应的窗口名称；等价于 HTML 的 target 特性。