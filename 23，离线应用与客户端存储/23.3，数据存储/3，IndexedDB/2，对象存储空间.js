
var indexedDB = window.indexedDB;

var request = indexedDB.open("test");
var database = null;

/**
 * 3，数据库版本
 *
 * 一个数据库一次只能有一个版本。在首次创建数据库时，它的初始版本编号为 1。
 * 创建数据库之后，数据库（和它的对象存储 object store）只能通过一种称为 versionchange 的特殊类型的事务来更改。
 * 要在创建数据库后更改对象存储，必须打开具有更高版本的数据库，因为此操作会触发 upgradeneeded 事件。
 */

request.onerror = function(event){
    console.log("Something error happened while trying to open: " + event.target.errorCode);
};
request.onsuccess = function(event){
    database = event.target.result;
};
request.onupgradeneeded = function(event){
    database = request.result;

    /**
     * 修改数据库或对象存储（类似 RDB 的表）的代码必须位于 upgradeneeded 事件处理函数中。
     * 另外在创建对象存储空间时，必须指定一个全局唯一的键（类似表的主键列）。
     */

    // 第二个参数 keyPath 是对象存储空间中将要保存对象的一个属性，而这个属性将作为存储空间的键来使用。
    var users = database.createObjectStore("users", {keyPath: "username"});
};

/**
 * 4，事务
 *
 * 对对象存储空间的所有操作都是通过事务来完成的。在数据库对象上调用 transaction() 方法可以创建事务。
 * 任何时候，只要想读取或修改数据，都要通过事务来组织所有操作。
 * 在 IndexedDB 中，事务会自动提交或回滚。所以无需手动 commit 或者 rollback。
 */

// 可以像下面这样创建事务，最常见的方式是传入要访问的一或多个对象存储空间。
// var transaction = database.transaction("users");

// 这样就能保证只加载 users 存储空间中的数据，以便通过事务进行访问。
// 如果要访问多个对象存储空间，也可以在第一个参数的位置上传入字符串数组。
// var transaction = db.transaction(["users", "anotherStore"]);

/**
 * 事务默认是以只读方式访问数据。要修改访问方式，必须在创建事务时传入第二个参数，这个参数表示访问模式：
 * readonly 只读
 * readwrite 读写
 * versionchange 版本变更
 */

var transaction = database.transaction("users", "readwrite");

/**
 * 5，操作
 *
 * 获取事务对象后，可以使用 objectStore() 方法传入存储空间的名称，就可以访问特定的存储空间。
 * 然后，可以使用 add() 和 put() 方法，使用 get() 可以取得值，使用 delete()可以删除对象，而使用 clear()则可以删除所有对象。
 * get() 和 delete() 方法都接收一个对象键作为参数，而所有这 5 个方法都会返回一个新的请求对象。
 */

var users = transaction.objectStore("users");

// add() 或 put() 方法都可以添加数据，这两个方法都接收一个参数，即要保存的对象，然后这个对象就会被保存到存储空间中。
// 这两个方法在操作空间中已经包含键值相同的对象时有区别：add() 会返回错误（类似 INSERT），而 put() 则会重写原有对象（类似 UPDATE）。
users.add({
    username: "007",
    firstName: "James",
    lastName: "Bond",
    password: "foo"
});

users.get("007").onsuccess = function (event) {
    var user = event.target.result;
    console.log(JSON.stringify(user));
};


// 因为一个事务可以完成任何多个请求，所以事务对象本身也有事件处理程序：
// onerror 和 oncomplete。这两个事件可以提供事务级的状态信息。
transaction.onerror = function(event){
    // 整个事务都被取消了
    console.log("rollback");
};
transaction.oncomplete = function(event){
    // 整个事务都成功完成了
    console.log("commited");
};