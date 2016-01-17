
/**
 * 对于某些数据，可能需要为一个对象存储空间指定多个键。
 * 比如，若要通过用户 ID 和用户名两种方式来保存用户资料，就需要通过这两个键来存取记录。
 * 为此，可以考虑将用户 ID 作为主键，然后为用户名创建索引。
 */

var indexedDB = window.indexedDB;

var request = indexedDB.open("test");
var database = null;

request.onerror = function(event){
    console.log("Something error happened while trying to open: " + event.target.errorCode);
};
request.onsuccess = function(event){
    database = event.target.result;
};
request.onupgradeneeded = function(event){
    database = request.result;
    var users = database.createObjectStore("users", {keyPath: "username"});

    /**
     * 创建索引的代码必须位于 upgradeneeded 事件处理函数中。
     *
     * 创建索引，首先引用对象存储空间，然后调用 createIndex() 方法。
     * 方法的第一个参数是索引的名字，第二个参数是索引的属性的名字，第三个参数是一个包含 unique 属性的选项（options）对象。
     * 这个选项通常都必须指定，因为它表示键在所有记录中是否唯一。
     */
    var index = users.createIndex("i_firstname", "firstName", {unique: false});
    var index2 = users.createIndex("i_lastname", "lastName", {unique: false});

    /**
     * 在对象存储空间上调用 deleteIndex() 方法并传入索引的名字可以删除索引。
     * 因为删除索引不会影响对象存储空间中的数据，所以这个操作没有任何回调函数。
     */
    users.deleteIndex("i_lastname");
};

function testIndex(database){

    var transaction = database.transaction("users", "readonly");

    var users = transaction.objectStore("users");

    // 可以像下面这样使用一个已经存在的索引
    var index = users.index("i_firstname");

    /**
     * 索引其实与对象存储空间很相似。
     *
     * 在索引上调用 openCursor() 方法也可以创建新的游标，除了会把索引键而非主键保存在 key 属性中之外，
     * 这个游标与在对象存储空间上调用 openCursor() 返回的游标完全一样。
     */

    var request = index.openCursor();

    request.onsuccess = function (event) {
        var cursor = event.target.result;
        if (cursor) {
            console.log(cursor.key);// 这里的 key 保存的是 firstName 而非主键
            cursor.continue();
        } else {
            console.log("complete");
        }
    };

    // 使用 get() 方法能够从索引中取得一个对象，只要传入相应的索引键即可
    request = index.get("James");
    request.onsuccess = function (event) {
        var user = event.target.result;
        console.log(JSON.stringify(user));
    };

    /**
     * 通过对象存储对象的 indexName 属性可以访问到为该空间建立的所有索引。
     */
    var indexNames = users.indexNames,
        i = 0,
        len = indexNames.length;

    for (; i < len; i++) {
        console.log("index:" + indexNames[i]);
    }
}