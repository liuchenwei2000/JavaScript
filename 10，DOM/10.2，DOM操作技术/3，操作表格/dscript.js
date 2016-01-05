
/**
 * 为了方便构建表格，DOM 为 <table>、<tbody>、<tr> 元素添加了一些属性和方法。
 * 使用这些属性和方法创建表格的逻辑性更强，也更容易看懂。
 *
 * 为 <table> 元素添加的属性和方法如下:
 * caption：保存着对<caption>元素（如果有）的指针。
 * tBodies：是一个<tbody>元素的 HTMLCollection。
 * tFoot：保存着对<tfoot>元素（如果有）的指针。
 * tHead：保存着对<thead>元素（如果有）的指针。
 * rows：是一个表格中所有行的 HTMLCollection。
 * createTHead()：创建<thead>元素，将其放到表格中，返回引用。
 * createTFoot()：创建<tfoot>元素，将其放到表格中，返回引用。
 * createCaption()：创建<caption>元素，将其放到表格中，返回引用。
 * deleteTHead()：删除<thead>元素。
 * deleteTFoot()：删除<tfoot>元素。
 * deleteCaption()：删除<caption>元素。
 * deleteRow(pos)：删除指定位置的行。
 * insertRow(pos)：向 rows 集合中的指定位置插入一行。
 *
 * 为 <tbody> 元素添加的属性和方法如下:
 * rows：保存着<tbody>元素中行的 HTMLCollection。
 * deleteRow(pos)：删除指定位置的行。
 * insertRow(pos)：向 rows 集合中的指定位置插入一行，返回对新插入行的引用。
 *
 * 为 <tr> 元素添加的属性和方法如下:
 * cells：保存着<tr>元素中单元格的 HTMLCollection。
 * deleteCell(pos)：删除指定位置的单元格。
 * insertCell(pos)：向 cells 集合中的指定位置插入一个单元格，返回对新插入单元格的引用。
 */

// 创建 table
var table = document.createElement("table");
table.border = 1;
table.width = "100%";

// 创建 tbody
var tbody = document.createElement("tbody");
table.appendChild(tbody);

var row1 = tbody.insertRow(0);
var cell11 = row1.insertCell(0);
cell11.appendChild(document.createTextNode("1,1"));

var cell12 = row1.insertCell(1);
cell12.appendChild(document.createTextNode("1,2"));

var row2 = tbody.insertRow(1);
var cell21 = row2.insertCell(0);
cell21.appendChild(document.createTextNode("2,1"));

var cell22 = row2.insertCell(1);
cell22.appendChild(document.createTextNode("2,2"));

document.body.appendChild(table);