## Cookie ##

HTTP Cookie，通常直接叫做 cookie，最初是在客户端用于存储会话信息（http session）的。

该标准要求服务器对任意 HTTP 请求发送名为 Set-Cookie 的 HTTP 头作为响应的一部分，其中包含会话信息。例如，这种服务器响应的头可能如下：

	HTTP/1.1 200 OK
	Content-type: text/html
	Set-Cookie: name=tom
	Other-header: other-header-value

这个 HTTP 响应设置以 name 为名称、以 tom 为值的一个 cookie，名称和值在传送时都必须是 URL 编码的。浏览器会存储这样的会话信息，并在这之后，通过为每个请求添加名为 Cookie 的 HTTP 头将信
息发送回服务器，如下所示：
	
	GET /index.html HTTP/1.1
	Cookie: name=tom
	Other-header: other-header-value

### 限制

cookie 在性质上是绑定在特定的域名下的。当设定了一个 cookie 后，再给创建它的域名发送请求时，
都会包含这个 cookie。这个限制确保了储存在 cookie 中的信息只能让特定的接收者访问，而无法被其他域访问。

由于 cookie 是存在客户端计算机上的，因此加入了一些限制确保 cookie 不会被恶意使用，同时不会占
据太多磁盘空间。每个域的 cookie 总数是有限的，不过浏览器之间各有不同，一般都是几十个。当超过单个域名限制之后还要再设置 cookie，浏览器就会清除以前设置的 cookie。 

浏览器中对于 cookie 的尺寸也有限制。大多数浏览器都有大约 4096B（加减 1）的长度限制。为了最佳的浏览器兼容性，最好将整个 cookie 长度限制在 4095B（含 4095）以内。尺寸限制影响到一个域下所有的 cookie，而并非每个 cookie 单独限制。如果尝试创建超过最大尺寸限制的 cookie，那么该  cookie 会被悄无声息地丢掉。

### 构成

cookie 由浏览器保存的以下几块信息构成：

* 名称
	
	一个唯一确定 cookie 的名字。cookie 名称是不区分大小写的，实践中最好将 cookie 名称看作是区分大小写的，因为某些服务器会这样处理 cookie。cookie 的名称必须是经过 URL 编码的。

* 值

	储存在 cookie 中的字符串值。值必须被 URL 编码。

* 域（domain）
	
	cookie 对于哪个域是有效的。所有向该域发送的请求中都会包含这个 cookie 信息。这个值可以包含子域（subdomain，如 www.google.com），也可以不包含 （如 .google.com，则对于 google.com 的所有子域都有效）。如果没有明确设定，那么这个域会被认作来自设置 cookie 的那个域。

* 路径（path）
	
	对于指定域中的那个路径，才会向服务器发送 cookie。例如，可以指定 cookie 只有从 `http://www.google.com/books/` 中才能访问，那么 `http://www.google.com` 的页面就不会发送 cookie 信息，即使请求都是来自同一个域的。

* 失效时间（expires）
	
	表示 cookie 何时应该被删除的时间戳（也就是，何时应该停止向服务器发送这个 cookie）。默认情况下，浏览器会话结束时即将所有 cookie 删除；不过也可以自己设置删除时间。这个值是个 GMT 格式的日期（Wdy, DD-Mon-YYYY HH:MM:SS GMT），用于指定应该删除 cookie 的准确时间。因此，cookie 可在浏览器关闭后依然保存在用户的机器上。如果你设置的失效日期是个以前的时间，则 cookie 会被立刻删除。

* 安全标志（secure）
	
	指定后，cookie 只有在使用 SSL 连接的时候才发送到服务器。例如，cookie 信息只能发送给 `https://www.google.com`，而 `http://www.google.com` 的请求则不能发送 cookie。

每一块信息都作为 Set-Cookie 头的一部分，使用分号加空格分隔每一段，如下例所示：
	
	HTTP/1.1 200 OK
	Content-type: text/html
	Set-Cookie: name=tom; expires=Mon, 22-Jan-07 07:10:24 GMT; domain=.google.com; path=/; secure
	Other-header: other-header-value

该头信息指定了一个叫做 name 的 cookie，它会在格林威治时间 2007 年 1 月 22 日 7:10:24 失效，同时对于 www.google.com 和 google.com 的任何子域（如 p2p.google.com）都有效。secure 标志是 cookie 中唯一一个非名值对的部分，直接包含一个 secure 单词。

尤其要注意，域、路径、失效时间和安全标志都是服务器给浏览器的指示，以指定何时应该发送 cookie。这些参数并不会作为发送到服务器 cookie 信息的一部分，只有名值对才会被发送。

### 子 Cookie

为了绕开浏览器的单域名下的 cookie 数限制，一些开发人员使用了一种称为子 cookie（subcookie）
的概念。子 cookie 是存放在单个 cookie 中的更小段数据，也就是使用 cookie 值来存储多个名称值对。

子 cookie 最常见的的格式如下所示：

	name=name1=value1&name2=value2&name3=value3&name4=value4&name5=value5

子 cookie 一般也以查询字符串的格式进行格式化，然后这些值可以使用单个 cookie 进行存储和访问，而非对每个名值对使用不同的 cookie 存储。最后网站或者 Web 应用程序可以无需达到单域名 cookie 上限也可以存储更加结构化的数据。

### 关于 cookie 的思考

由于所有的 cookie 都会由浏览器作为请求头发送，所以在 cookie 中存储大量信息会影响到特定域的请求性能。cookie 信息越大，完成对服务器请求的时间也就越长。尽管浏览器对 cookie 进行了大小限制，不过最好还是尽可能在 cookie 中少存储信息，以避免影响性能。

一定不要在 cookie 中存储重要和敏感的数据。cookie 数据并非存储在一个安全环境中，其中包含的任何数据都可以被他人访问。所以不要在 cookie 中存储诸如信用卡号、密码或者个人地址之类的数据。

cookie 的性质和它的局限使得其并不能作为存储大量信息的理想手段，所以又出现了其他方法。