## 客户端检测 ##


面对普遍存在的各浏览器间的不一致性问题，利用客户端检测方法可以突破或者规避种种局限性。

不到万不得已，就不要使用客户端检测。只要能找到更通用的方法，就应该优先采用。先设计最通用的方案，然后再使用特定于浏览器的技术增强该方案。

由于浏览器间存在差别，通常要根据不同浏览器的能力分别编写不同的代码。有不少客户端检测方法，但下列是最经常使用的。

* 能力检测

	在编写代码之前先检测特定浏览器的能力。例如，脚本在调用某个函数之前，可能要先检测该函数是否存在。这种检测方法将开发人员从考虑具体的浏览器类型和版本中解放出来，让他们把注意力集中到相应的能力是否存在上。

* 怪癖检测

	怪癖实际上是浏览器实现中存在的bug。由于怪癖检测与能力检测相比效率更低，因此应该只在某个怪癖会干扰脚本运行的情况下使用。

* 用户代理检测

	通过检测用户代理字符串（UserAgent）来识别浏览器。用户代理字符串中包含大量与浏览器有关的信息，包括浏览器、平台、操作系统及浏览器版本。
	
	
令人欣慰的是，充满风险的浏览器嗅探技术正在被更简单也更健壮的对象检测技术所取代。
