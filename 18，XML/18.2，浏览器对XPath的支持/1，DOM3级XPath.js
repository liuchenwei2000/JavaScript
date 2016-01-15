
/**
 * DOM3 级 XPath 规范定义了在 DOM 中对 XPath 表达式求值的接口。
 * 最重要的两个类型是 XPathEvaluator 和 XPathResult。
 */

/**
 * XPathEvaluator 用于在特定的上下文中对 XPath 表达式求值。
 *
 * 这个类型有下列 3 个方法：
 *
 * createExpression(expression, nsresolver)
 * 将 XPath 表达式及相应的命名空间信息转换成一个 XPathExpression，
 * 这是查询的编译版。在多次使用同一个查询时很有用。
 *
 * createNSResolver(node)
 * 根据 node 的命名空间信息创建一个新的 XPathNSResolver 对象。
 * 在基于使用命名空间的 XML 文档求值时，需要使用 XPathNSResolver 对象。
 *
 * evaluate(expression, context, nsresolver, type, result)
 * 在给定的上下文中，基于特定的命名空间信息来对 XPath 表达式求值。剩下的参数指定如何返回结果。
 */

var result = xmldom.evaluate("employee/name", xmldom.documentElement, null,
    XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);

if (result !== null) {
    var node = result.iterateNext();
    while (node) {
        console.log(node.tagName);
        node = node.iterateNext();
    }
}