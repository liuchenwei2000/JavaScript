## JavaScript 简介 ##

JavaScript，一种专为网页交互而设计的直译式脚本语言，是一种动态类型、弱类型、基于原型的语言，内置支持类型。它的解释器被称为 JavaScript 引擎，为浏览器的一部分，广泛用于客户端的脚本语言，最早是在 HTML 网页上使用，用来给 HTML 网页增加动态功能。然而现在JavaScript 也可被用于网络服务器，如 Node.js。

完整的 JavaScript 包括以下几个部分：

* ECMAScript：描述了该语言的语法和基本对象。
* 文档对象模型（DOM）：提供访问和操作网页内容的方法和接口。
* 浏览器对象模型（BOM）：提供与浏览器交互的方法和接口。

JavaScript常用来完成以下任务：

* 嵌入动态文本于 HTML 页面
* 对浏览器事件作出响应
* 读写 HTML 元素
* 在数据被提交到服务器之前验证数据
* 检测访客的浏览器信息
* 控制 cookies，包括创建和修改等

必须说明的是，虽然 JavaScript 核心语法不难，但是它的复杂性体现在另外两个方面：

* 首先，它涉及大量的外部API。

	JavaScript要发挥作用，必须与其他组件配合，这些外部组件五花八门，数量极其庞大，几乎涉及网络应用的各个方面，掌握它们绝非易事。

* 其次，JavaScript语言有一些设计缺陷。

	某些地方相当不合理，另一些地方则会出现怪异的运行结果。学习 JavaScript，很大一部分时间是用来搞清楚哪些地方有陷阱。另外一些程序员则感到，为了更合理地编写 JavaScript 程序，就不能用 JavaScript 来写，而必须发明新的语言，比如CoffeeScript、TypeScript、Dart 这些新语言的发明目的，多多少少都有这个因素。

尽管如此，目前看来，JavaScript 的地位还是无法动摇。加之，语言标准的快速进化，使得 JavaScript 功能日益增强，而语法缺陷和怪异之处得到了弥补。

* 优秀的特性：函数、弱类型、动态对象和富有表现力的对象字面表示法。
* 糟糕的特性：基于全局变量的编程模型。所有编译单元的所有顶级变量被撮合到一个被称为全局对象（the global object）的公共命名空间中。
* 原型继承是有争议的特性。

### 为什么要学 JavsScript

* 操控浏览器的能力

	JavaScript 的发明目的，就是作为浏览器的内置脚本语言，为网页开发者提供操控浏览器的能力。它是目前唯一一种通用的浏览器脚本语言，所有主流浏览器全部支持。它可以让网页呈现各种特殊效果，为用户提供良好的互动体验。


* 广泛的使用领域

	近年来，JavaScript 的使用范围，慢慢超越了浏览器，正在向通用的系统语言发展。

	* 浏览器的平台化
	
		随着 HTML5 的出现，浏览器本身的功能越来越强，不再仅仅能浏览网页，而是越来越像一个平台，JavaScrip t因此得以调用许多系统功能，比如操作本地文件、操作图片、调用摄像头和麦克风等等。这使得 JavaScript 可以完成许多以前无法想象的事情。
	
	* Node.js
	
		Node.js 项目使得 JavaScript 可以用于开发服务器端的大型项目，网站的前后端都用 JavaScript 开发已经成为了现实。有些嵌入式平台（Raspberry Pi）能够安装 Node.js，于是 JavaScript 就能为这些平台开发应用程序。
	
	* 数据库操作
	
		JavaScript 甚至也可以用来操作数据库。NoSQL 数据库这个概念，本身就是在 JSON（JavaScript Object Notation，JavaScript对象表示法）格式的基础上诞生的，大部分 NoSQL 数据库允许 JavaScript 直接操作。基于 SQL 语言的开源数据库 PostgreSQL 支持 JavaScript 作为操作语言，可以部分取代 SQL 查询语言。
	
	* 跨移动平台
	
		PhoneGap 项目使得 JavaScript 可以开发在多种移动平台（iOS 和 Android）上使用的应用程序。Mozilla 基金会的手机操作系统 Firefox OS，更是直接将 JavaScript 作为操作系统的平台语言。
	
	* 内嵌脚本语言
	
		越来越多的应用程序，将 JavaScript 作为内嵌的脚本语言，比如 Adobe 公司的著名 PDF 阅读器 Acrobat、Linux 桌面环境 GNOME 3。
	
	* 跨平台的桌面应用程序
	
		Chromium OS、Windows8 等操作系统直接支持 JavaScript 编写应用程序。Mozilla 的 Open Web Apps 项目、Google 的 Chrome App 项目、以及 TideSDK 项目，可以用来编写运行于 Windows、Mac OS 和 Android 等多个桌面平台的程序，不依赖浏览器。


* 强大的性能

	JavaScript的性能优势体现在以下方面：
	
	* 灵活的语法，表达力强。
	
		JavaScript 既支持类似C语言清晰的过程式编程，也支持灵活的函数式编程，可以用来写并发处理（concurrent）。这些语法特性已经被证明非常强大，可以用于许多场合，尤其适用非同步编程。
		
		JavaScript 的所有值都是对象，这为程序员提供了灵活性和便利性。因为你可以很方便地、按照需要随时创造数据结构，不用进行麻烦的预定义。
		
		JavaScript 的标准还在快速进化中，并不断合理化，并添加更适用的语法特性。
	
	* 支持编译运行。
		
		JavaScript 语言本身，虽然是一种解释型语言，但是在现代浏览器中，JavaScript 都是编译后运行。程序会被高度优化，运行效率接近二进制程序。而且，JavaScript 引擎正在快速发展，性能将越来越好。
	
	* 事件驱动和非阻塞式设计。
		
		JavaScript 程序可以采用事件驱动（event-driven）和非阻塞式（non-blocking）设计，在服务器端适合高并发环境，普通的硬件就可以承受很大的访问量。