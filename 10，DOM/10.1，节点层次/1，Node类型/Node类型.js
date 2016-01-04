
/**
 * DOM 定义了一个 Node 接口，该接口将由 DOM 中的所有节点类型实现。
 * 
 * Node 接口在 JavaScript 中是作为 Node 类型实现的，除了IE之外，其他浏览器中都可以访问这个类型。
 * JavaScript 中的所有节点类型都继承自 Node 类型，因此所有节点类型都共享着相同的基本属性和方法。
 * 每个节点都有一个 nodeType 属性，用于表明节点的类型。
 *
 * 节点类型由在 Node 类型中定义的12个数值常量来表示：
 * 1		Node.ELEMENT_NODE
 * 2		Node.ATTRIBUTE_NODE
 * 3		Node.TEXT_NODE
 * 4		Node.CDATA_SECTION_NODE
 * 5		Node.ENTITY_REFERENCE_NODE
 * 6		Node.ENTITY_NODE
 * 7		Node.PROCESSING_INSTRUCTION_NODE
 * 8		Node.COMMENT_NODE
 * 9		Node.DOCUMENT_NODE
 * 10		Node.DOCUMENT_TYPE_NODE
 * 11		Node.DOCUMENT_FRAGMENT_NODE
 * 12		Node.NOTATION_NODE
 * 
 * 并不是所有节点类型都受到 Web 浏览器的支持，开发人员最常用的就是元素和文本节点。
 */ 

var node = document;// 代表某个 Node 

if (node.nodeType == Node.DOCUMENT_NODE) {// 在 IE 中需要直接使用数值 1
	console.log("node is document node");
}

// 要了解节点的具体信息，可以使用 nodeName 和 nodeValue 这两个属性，它们的值完全取决于节点的类型。
console.log("node.nodeName=" + node.nodeName);// 元素的标签名
console.log("node.nodeValue=" + node.nodeValue);

/**
 * 每个节点都有一个 childNodes 属性，保存着一个 NodeList 对象。
 * NodeList 是一种类数组对象，用于保存一组有序的节点，可以通过位置索引来访问这些节点。
 * 
 * NodeList 对象的独特之处在于，它实际上是基于 DOM 结构动态执行查询的结果，
 * 因此 DOM 结构的变化能够自动反映在 NodeList 对象中。
 */

// 下面两种语法都可以访问子 Node
var firstChild = node.childNodes[0];
var secondChild = node.childNodes.item(1);

// length 表示的是访问 NodeList 的那一刻其中包含节点的数量。
var count = node.childNodes.length;

// 每个节点都有一个 parentNode 属性，指向文档树中的父节点。
var pNode = node.parentNode;

// 第一个子节点和最后一个子节点也有便捷方法访问。
var firstChild = node.firstChild;
var lastChild = node.lastChild;

/**
 * 包含在 childNodes 列表中的每个节点互相之间都是同胞节点，通过使用列表中每个节点的
 * previousSibling 和 nextSubling 属性，可以访问同一列表中的前一个和后一个节点。 
 * 第一个节点的 previousSibling 属性为null，而最后一个节点的 nextSubling 属性也为null。
 */

var previousNode = firstChild.previousSibling;
var nextNode = firstChild.nextSibling;


// hasChildNodes() 方法在节点包含一或多个子节点的情况下返回 true
if (node.hasChildNodes()) {
	console.log("node has child nodes");
}

// 所有节点还有一个 ownerDocument 属性指向表示整个文档的文档节点。
var owner = node.ownerDocument;
