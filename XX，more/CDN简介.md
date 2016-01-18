## CDN ##

我们总是希望网页可以尽可能地快，希望页面的容量尽可能地小，同时希望浏览器尽可能多地进行缓存。如果许多不同的网站使用相同的 JavaScript 框架，那么把框架库存放在一个通用的位置供每个网页分享就变得很有意义。

CDN (Content Delivery Network) 内容分发网络，解决了这个问题。CDN 是包含可分享代码库的服务器网络。Google 为一系列 JavaScript 库提供了免费的 CDN，包括：jQuery、Prototype、MooTools、Dojo、YUI 等。

如需在网页中使用 JavaScript 框架库，只需在 <script\> 标签中引用该库即可：如引用 jQuery：
	
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>