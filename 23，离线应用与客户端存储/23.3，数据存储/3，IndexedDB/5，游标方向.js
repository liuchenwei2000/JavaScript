
/**
 * openCursor() 方法可以接收两个参数：
 * 第一个参数是 IDBKeyRange 的实例，第二个是表示方向的字符串常量。
 */
function testCursorDirection(database){

    var transaction = database.transaction("users", "readonly");

    var users = transaction.objectStore("users");

    /**
     * 正常情况下，游标都是从存储空间的第一项开始，调用 continue() 或 advance() 前进到最后一项。
     * 游标的默认方向值是 next。
     */

    // 如果对象存储空间中有重复的项，而想让游标跳过那些重复的项，可以使用 nextunique 作为第二个参数
    var request = users.openCursor(null, "nextunique");
    // prev 表示让游标在对象存储空间中向前移动，即从最后一个对象开始，逐个迭代，直至第一个对象。
    var request2 = users.openCursor(null, "prev");
    // prevunique 表示让游标在对象存储空间中向前移动并且跳过重复的项。
    var request3 = users.openCursor(null, "prevunique");

    request2.onsuccess = function (event) {
        var cursor = event.target.result;
        if (cursor){ // 必须要检查是否为 null
            console.log("Key: " + cursor.key + ", Value: " + JSON.stringify(cursor.value));
            cursor.continue();
        } else {
            console.log("complete");// 遍历结束
        }
    };
    request2.onerror = function (event) {
        console.log("Something error happened while opening cursor.");
    };
}
