
/**
 * IE 对 XPath 的支持是内置在基于 ActiveX 的 XML DOM 文档对象中的，没有使用 DOMParser 返回的 DOM 对象。
 * 因此，为了在 IE9 及之前的版本中使用 XPath，必须使用基于 ActiveX 的实现。
 * 这个接口在每个节点上额外定义了两个的方法：selectSingleNode()和 selectNodes()。
 */

// selectSingleNode() 方法接受一个 XPath 模式，在找到匹配节点时返回第一个匹配的节点，如果没有找到匹配的节点就返回 null。
var element = xmldom.documentElement.selectSingleNode("employee/name");

if (element !== null){
    console.log(element.xml);
}

//  selectNodes() 也接受一个 XPath 模式，返回与模式匹配的所有节点的 NodeList（如果没有匹配的节点，则返回包含零项的 NodeList）。
var elements = xmldom.documentElement.selectNodes("employee/name");
console.log(elements.length);