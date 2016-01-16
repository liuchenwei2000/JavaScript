
/**
 * IndexedDB 就是一个数据库，与关系数据库类似。
 * IndexedDB 最大的特色是使用对象保存数据，而不是使用表。
 * 一个 IndexedDB 数据库，就是一组位于相同命名空间下的对象的集合。
 * 一个网站可能有一个或多个 IndexedDB 数据库，每个数据库必须具有惟一的名称。
 */

/**
 * 1，创建数据库
 *
 * 使用 IndexedDB 的第一步是打开它，即把要打开的数据库名传给 indexDB.open()。
 * 如果传入的数据库已经存在，就会发送一个打开它的请求；
 * 如果传入的数据库还不存在，就会发送一个创建并打开它的请求。
 * 该方法还有第二个可选参数：数据库版本号，数据库创建的时候默认版本号为1。
 *
 * 总之，调用 indexDB.open() 会返回一个 IDBRequest 对象，在这个对象上可以添加 onerror 和 onsuccess 事件处理程序。
 */

var indexedDB = window.indexedDB || window.msIndexedDB || window.mozIndexedDB || window.webkitIndexedDB;

var request = indexedDB.open("test");
var database = null;

request.onerror = function(event){
	/**
	 * event.target.errorCode 中将保存一个错误码，表示问题的性质。可能的错误码如下：
	 *
	 * IDBDatabaseException.UNKNOWN_ERR(1)：意外错误，无法归类。
	 * IDBDatabaseException.NON_TRANSIENT_ERR(2)：操作不合法。
	 * IDBDatabaseException.NOT_FOUND_ERR(3)：未发现要操作的数据库。
	 * IDBDatabaseException.CONSTRAINT_ERR(4)：违反了数据库约束。
	 * IDBDatabaseException.DATA_ERR(5)：提供给事务的数据不能满足要求。
	 * IDBDatabaseException.NOT_ALLOWED_ERR(6)：操作不合法。
	 * IDBDatabaseException.TRANSACTION_INACTIVE_ERR(7)：试图重用已完成的事务。
	 * IDBDatabaseException.ABORT_ERR(8)：请求中断，未成功。
	 * IDBDatabaseException.READ_ONLY_ERR(9)：试图在只读模式下写入或修改数据。
	 * IDBDatabaseException.TIMEOUT_ERR(10)：在有效时间内未完成操作。
	 * IDBDatabaseException.QUOTA_ERR(11)：磁盘空间不足。
	 */
	console.log("Something error happened while trying to open: " + event.target.errorCode);
};
request.onsuccess = function(event){
	// event.target.result 是一个数据库实例对象
	database = event.target.result;
};

/**
 * 2，删除数据库
 *
 * 要删除现有数据库，可以调用 deleteDatabase 方法，并传递要删除的数据库名称。
 */

request = indexedDB.deleteDatabase("test");

request.onerror = function(event){
	console.log("Something error happened while trying to delete: " + event.target.errorCode);
};
request.onsuccess = function(event){
	console.log("Database deleted successfully");
};