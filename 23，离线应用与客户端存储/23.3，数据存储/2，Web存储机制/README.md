## Web存储机制 ##

Web Storage 是 HTML5 的一部分。目的是克服由 cookie 带来的一些限制，当数据需要被严格控制在客户端上时，无须持续地将数据发回服务器。

Web Storage 的两个主要目标是： 

* 提供一种在 cookie 之外存储会话数据的途径。
* 提供一种存储大量可以跨会话存在的数据的机制。

最初的 Web Storage 规范包含了两种对象的定义：sessionStorage 和 globalStorage。
这两个对象在支持的浏览器中都是以 windows 对象属性的形式存在的。

### Storage 类型

Storage 类型提供最大的存储空间（因浏览器而异）来存储名值对。Storage 的实例与其他对象类似，有如下方法：

* clear()： 删除所有值。
* getItem(name)：根据指定的 name 获取对应的值。
* key(index)：获得 index 位置处的值的名字。
* removeItem(name)：删除由 name 指定的名值对。
* setItem(name, value)：为指定的 name 设置一个对应的值。

其中，`getItem()`、`removeItem()` 和 `setItem()` 方法可以直接调用，也可通过 Storage 对象间接调用。因为每个项都是作为属性存储在该对象上的，所以可以通过点语法或者方括号语法访问属性来读取/设置值，或者通过 delete 操作符进行删除。不过，还建议使用方法而不是属性来访问数据，以免某个键会意外重写该对象上已经存在的成员。还可以使用 length 属性来判断有多少名值对存放在 Storage 对象中。但无法判断对象中所有数据的大小。

Storage 类型只能存储字符串，非字符串的数据在存储之前会被转换成字符串。

### Storage 事件

对 Storage 对象进行任何修改，都会触发 storage 事件。当通过属性或 setItem() 方法保存数据，使用 delete 操作符或 removeItem() 删除数据，或者调用 clear()方法时，都会发生该事件。这个事件的 event 对象有以下属性：

* domain：发生变化的存储空间的域名。
* key：设置或者删除的键名。
* newValue：如果是设置值，则是新值；如果是删除键，则是 null。
* oldValue：键被更改之前的值。

无论对 sessionStorage、globalStorage 还是 localStorage 进行操作，都会触发 storage 事件，但不作区分。

### 限制

与其他客户端数据存储方案类似，Web Storage 同样也有限制。这些限制因浏览器而异。一般来说，对存储空间大小的限制都是以每个来源（协议、域和端口）为单位的。换句话说，每个来源都有固定大小的空间用于保存自己的数据。考虑到这个限制，就要注意分析和控制每个来源中有多少页面需要保存数据。

对于 sessionStorage 和 localStorage 而言，浏览器会设置每个来源 2.5MB-5MB 的限制，具体数值不尽相同。