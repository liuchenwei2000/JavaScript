
/**
 * IndexedDB 就是一个数据库，与关系数据库类似。
 * IndexedDB 最大的特色是使用对象保存数据，而不是使用表。
 * 一个 IndexedDB 数据库，就是一组位于相同命名空间下的对象的集合。
 */

/**
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

// 由于已经创建了版本号为 1 的数据库，打开版本为 3 的时候，控制台会输出：DB version changed to 3
request = indexedDB.open("test", 3);

/**
 * 在建立了与数据库的连接之后，下一步就是使用对象存储空间（类似 RDB 的表）。
 * 如果数据库的版本与你传入的版本不匹配，那可能就需要创建一个新的对象存储空间。
 *
 * 在创建对象存储空间之前，必须要想清楚想要保存什么数据类型。
 * 因为在创建对象存储空间时，必须指定一个全局唯一的键（类似表的主键列）。
 */

// 第二个参数 keyPath 是对象存储空间中将要保存对象的一个属性，而这个属性将作为存储空间的键来使用。
var users = database.createObjectStore("users", {keyPath: "username"});

var user = {
	username: "007",
	firstName: "James",
	lastName: "Bond",
	password: "foo"
};

/**
 * 对对象存储空间的所有操作都是通过事务来完成的。在数据库对象上调用 transaction() 方法可以创建事务。
 * 任何时候，只要想读取或修改数据，都要通过事务来组织所有操作。
 */

// 可以像下面这样创建事务，最常见的方式是传入要访问的一或多个对象存储空间。
// var transaction = database.transaction("users");

// 这样就能保证只加载 users 存储空间中的数据，以便通过事务进行访问。
// 如果要访问多个对象存储空间，也可以在第一个参数的位置上传入字符串数组。
// var transaction = db.transaction(["users", "anotherStore"]);

/**
 * 事务默认是以只读方式访问数据。要修改访问方式，必须在创建事务时传入第二个参数，
 * 这个参数表示访问模式，用 IDBTransaction 接口定义的如下常量表示：
 * READ_ONLY（0）表示只读。
 * READ_WRITE（1）表示读写。
 * VERSION_CHANGE（2）表示改变。
 */

// IE 和 Firefox 实现的是 IDBTransaction，但在 Chrome 中则叫 webkitIDBTransaction，所以使用下面的代码统一接口：
var IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction;
var transaction = db.transaction("users", IDBTransaction.READ_WRITE);

/**
 * 获取事务对象后，可以使用 objectStore() 方法传入存储空间的名称，就可以访问特定的存储空间。
 * 然后，可以使用 add() 和 put() 方法，使用 get() 可以取得值，使用 delete()可以删除对象，而使用 clear()则可以删除所有对象。
 * get()和 delete()方法都接收一个对象键作为参数，而所有这 5 个方法都会返回一个新的请求对象。
 */

/**
 * 有了存储空间就可以使用 add() 或 put() 方法来向其中添加数据。
 * 这两个方法都接收一个参数，即要保存的对象，然后这个对象就会被保存到存储空间中。
 * 这两个方法的区别在空间中已经包含键值相同的对象时会体现出来：
 * add() 会返回错误（类似 INSERT），而 put() 则会重写原有对象（类似 UPDATE）。
 */

request = transaction.objectStore("users").add(user);
request.onerror = function (event) {
	console.log("Something error happened while inserting user");
};
request.onsuccess = function (event) {
	console.log("User has been inserted.");
};



// 因为一个事务可以完成任何多个请求，所以事务对象本身也有事件处理程序： onerror 和 oncomplete。
// 这两个事件可以提供事务级的状态信息。
transaction.onerror = function(event){
//整个事务都被取消了
};
transaction.oncomplete = function(event){
//整个事务都成功完成了
};




















