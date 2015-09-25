
/**
 * 操作节点
 * 
 * 并不是所有类型的节点都有子节点，如果在不支持子节点的节点上调用了这些方法，将会导致错误。
 */

var counter = 0;

function testAppendChild() {
	var div1 = document.getElementById("div1");

	var newNode = document.createElement("p");
	newNode.innerHTML = "new child " + (++counter);

	/*
	 * appendChild() 用于向 childNodes 列表的末尾添加一个节点， 然后 childNodes 
	 * 新增的节点、父节点以及以前的最后一个子节点的关系指针的都会相应的更新。
	 * 更新完成后，返回新增的节点。
	 */
	var result = div1.appendChild(newNode);
	alert("result === newNode ? " + (result === newNode));
}

function testAppendChild2() {
	var div1 = document.getElementById("div1");

	// 如果增加的节点已经存在于文档中，那就将该节点从原来的位置转移到新位置。
	div1.appendChild(div1.firstChild);
}

function testInsertBefore() {
	var div2 = document.getElementById("div2");

	var newNode = document.createElement("p");
	newNode.innerHTML = "new child " + (++counter);

	/*
	 * insertBefore() 用于把节点插入到特定的位置而不是放到末尾。
	 * 它接收两个参数：要插入的节点和作为参照的节点。
	 * 插入节点后，被插入的节点会变成参照节点的前一个同胞节点，同时被方法返回。
	 * 如果参照节点是null，则插入到末尾。
	 */
	div2.insertBefore(newNode, div2.firstChild);
}

function testReplaceChild() {
	var div = document.getElementById("div_p");
	
	var newNode = document.createElement("p");
	newNode.innerHTML = "new child " + (++counter);

	/*
	 * replaceChild() 接受两个参数：要插入的节点和要替换的节点。
	 * 要替换的节点将由这个方法返回并从文档树中删除，同时由要插入的节点占据其位置。
	 * 被替换节点的所有关系指针都会被从它替换的节点复制过来。
	 */
	div.replaceChild(newNode, div.firstChild);
}

function testRemoveChild() {
	var div1 = document.getElementById("div1");
	
	/*
	 * removeChild() 用于移除节点，参数是要移除的节点，被移除的节点将成为方法的返回值。
	 */
	div1.removeChild(div1.firstChild);
}
