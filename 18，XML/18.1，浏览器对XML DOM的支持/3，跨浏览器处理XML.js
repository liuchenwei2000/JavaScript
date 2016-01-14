
/**
 * 编写能够跨浏览器处理 XML 的函数是常见的需求。
 */

// 对解析 XML 而言，下面这个函数可以在所有四种主要浏览器中使用。

function parseXml(xml) {
    var xmldom = null;
    if (typeof DOMParser != "undefined") {
        xmldom = (new DOMParser()).parseFromString(xml, "text/xml");
        var errors = xmldom.getElementsByTagName("parsererror");
        if (errors.length) {
            throw new Error("XML parsing error:" + errors[0].textContent);
        }
    } else if (typeof ActiveXObject != "undefined") {
        xmldom = createDocument();
        xmldom.loadXML(xml);
        if (xmldom.parseError != 0) {
            throw new Error("XML parsing error: " + xmldom.parseError.reason);
        }
    } else {
        throw new Error("No XML parser available.");
    }
    return xmldom;
}

// 对序列化 XML 而言，下面这个函数可以在所有四种主要浏览器中使用。

function serializeXml(xmldom) {
    if (typeof XMLSerializer != "undefined") {
        return (new XMLSerializer()).serializeToString(xmldom);
    } else if (typeof xmldom.xml != "undefined") {
        return xmldom.xml;
    } else {
        throw new Error("Could not serialize XML DOM.");
    }
}

var xmldom = null;
try {
    xmldom = parseXml("<root><child/></root>");
} catch (ex) {
    alert(ex.message);
}

var xml = serializeXml(xmldom);
console.log(xml);