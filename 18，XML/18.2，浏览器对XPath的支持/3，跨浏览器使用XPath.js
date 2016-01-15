
/**
 * 鉴于 IE 对 XPath 功能的支持有限，因此跨浏览器 XPath 只能保证达到 IE 支持的功能。
 * 换句话说，也就是要在其他使用 DOM3 级 XPath 对象的浏览器中，
 * 重新创建 selectSingleNode() 和 selectNodes() 方法。
 * 为了求得最佳的浏览器兼容性，建议在 JavaScript 中使用 XPath 时，只考虑使用这两个方法。
 */

function selectSingleNode(context, expression, namespaces) {
    var doc = (context.nodeType != 9 ? context.ownerDocument : context);
    if (typeof doc.evaluate != "undefined") {
        var nsresolver = null;
        if (namespaces instanceof Object) {
            nsresolver = function (prefix) {
                return namespaces[prefix];
            };
        }
        var result = doc.evaluate(expression, context, nsresolver,
            XPathResult.FIRST_ORDERED_NODE_TYPE, null);
        return (result !== null ? result.singleNodeValue : null);
    } else if (typeof context.selectSingleNode != "undefined") {
        //创建命名空间字符串
        if (namespaces instanceof Object) {
            var ns = "";
            for (var prefix in namespaces) {
                if (namespaces.hasOwnProperty(prefix)) {
                    ns += "xmlns:" + prefix + "='" + namespaces[prefix] + "' ";
                }
            }
            doc.setProperty("SelectionNamespaces", ns);
        }
        return context.selectSingleNode(expression);
    } else {
        throw new Error("No XPath engine found.");
    }
}

function selectNodes(context, expression, namespaces) {
    var doc = (context.nodeType != 9 ? context.ownerDocument : context);
    if (typeof doc.evaluate != "undefined") {
        var nsresolver = null;
        if (namespaces instanceof Object) {
            nsresolver = function (prefix) {
                return namespaces[prefix];
            };
        }
        var result = doc.evaluate(expression, context, nsresolver,
            XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
        var nodes = new Array();
        if (result !== null) {
            for (var i = 0, len = result.snapshotLength; i < len; i++) {
                nodes.push(result.snapshotItem(i));
            }
        }
        return nodes;
    } else if (typeof context.selectNodes != "undefined") {
        //创建命名空间字符串
        if (namespaces instanceof Object) {
            var ns = "";
            for (var prefix in namespaces) {
                if (namespaces.hasOwnProperty(prefix)) {
                    ns += "xmlns:" + prefix + "='" + namespaces[prefix] + "' ";
                }
            }
            doc.setProperty("SelectionNamespaces", ns);
        }
        var result = context.selectNodes(expression);
        var nodes = new Array();
        for (var i = 0, len = result.length; i < len; i++) {
            nodes.push(result[i]);
        }
        return nodes;
    } else {
        throw new Error("No XPath engine found.");
    }
}