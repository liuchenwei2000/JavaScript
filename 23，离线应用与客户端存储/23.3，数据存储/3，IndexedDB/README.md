## IndexedDB ##

Indexed Database API，或者简称为 IndexedDB，是在浏览器中保存结构化数据的一种数据库。IndexedDB 是为了替代目前已被废弃的 Web SQL Database API 而出现的。IndexedDB 的思想是创建一套 API，方便保存和读取 JavaScript 对象，同时还支持查询及搜索。

IndexedDB 设计的操作完全是**异步**进行的。因此，大多数操作会以请求方式进行，但这些操作会在后期执行，然后如果成功则返回结果，如果失败则返回错误。差不多每一次 IndexedDB 操作，都需要注册 onerror 或 onsuccess 事件处理程序，以确保适当地处理结果。

在得到完整支持的情况下，IndexedDB 将是一个作为 API 宿主的全局对象。由于 API 仍然可能有变化，浏览器也都使用提供商前缀，因此这个对象在 IE10 中叫 msIndexedDB，在Firefox 4 中叫 mozIndexedDB，在 Chrome 中叫 webkitIndexedDB。所以为了兼容性，需要以下面的方式获取 IndexedDB 对象：
	
	var indexedDB = window.indexedDB || window.msIndexedDB || window.mozIndexedDB || window.webkitIndexedDB;