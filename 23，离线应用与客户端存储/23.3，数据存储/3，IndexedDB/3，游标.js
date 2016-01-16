
/**
 * 使用事务可以直接通过已知的键检索单个对象。而在需要检索多个对象的情况下，则需要在事务内部创建游标。
 * 游标就是一个指向结果集的指针。与传统数据库查询不同，游标并不提前收集结果。
 * 游标指针会先指向结果中的第一项，在接到查找下一项的指令时，才会指向下一项。
 */
function testCursor(database){

    var transaction = database.transaction("users", "readonly");

    var users = transaction.objectStore("users");

    // 在对象存储空间上调用 openCursor() 方法可以创建游标。
    // 该方法返回的是一个请求对象，因此必须为该对象指定 onsuccess 和 onerror 事件处理程序。
    var request = users.openCursor();

    request.onsuccess = function (event) {
        /**
         * 在 onsuccess 事件处理程序执行时，可以通过 event.target.result 取得存储空间中的下一个对象。
         * 在结果集中有下一项时，这个属性中保存一个 IDBCursor 的实例，在没有下一项时，这个属性的值为 null。
         *
         * IDBCursor 的实例有以下几个属性：
         *
         * direction：数值，表示游标移动的方向。
         * 默认值为 IDBCursor.NEXT（0），表示下一项。IDBCursor.NEXT_NO_DUPLICATE（1）表示下一个不重复的项，
         * IDBCursor.PREV（2）表示前一项，而 IDBCursor.PREV_NO_DUPLICATE 表示前一个不重复的项。
         *
         * key：对象的键。
         * value：实际的对象。
         *
         * primaryKey：游标使用的键。可能是对象键，也可能是索引键。
         */
        var cursor = event.target.result;
        if (cursor){ // 必须要检查是否为 null
            // cursor.value 是一个对象，显示它之前先将它转换成 JSON 字符串。
            console.log("Key: " + cursor.key + ", Value: " + JSON.stringify(cursor.value));
            /**
             * 默认情况下，每个游标只发起一次请求。要想发起另一次请求，必须调用下面的一个方法。
             * continue(key)：移动到结果集中的下一项。
             * 参数 key 是可选的，不指定这个参数，游标移动到下一项；指定这个参数，游标会移动到指定键的位置。
             * advance(count)：向前移动 count 指定的项数。
             *
             * 这两个方法都会导致游标使用相同的请求，因此相同的 onsuccess 和 onerror 事件处理程序也会得到重用。
             * 调用 continue() 会触发另一次请求，进而再次调用 onsuccess/onerror 事件处理程序。
             * 在没有更多项可以迭代时，将最后一次调用 onsuccess 事件处理程序，此时 event.target.result 的值为 null。
             */
            cursor.continue();
        } else {
            console.log("complete");// 遍历结束
        }
    };
    request.onerror = function (event) {
        console.log("Something error happened while opening cursor.");
    };
}

/**
 * 使用游标也可以更新或删除某条记录。
 */
function testUpdateByCursor(database) {

    // 如果当前事务没有修改对象存储空间的权限，update() 和 delete() 会抛出错误。
    var transaction = database.transaction("users", "readwrite");
    var users = transaction.objectStore("users");

    var request = users.openCursor();

    request.onsuccess = function (event) {

        var cursor = event.target.result;

        if (cursor) {
            // 调用 update() 方法可以用指定的对象更新当前游标的 value。
            if (cursor.key == "007") {// 更新主键为 007 的对象
                var value = cursor.value; // 取得当前对象
                value.password = "magic!";// 给对象设置新的属性值

                var updateRequest = cursor.update(value); // 请求保存更新
                // var deleteRequest = cursor.delete();// 请求删除当前项
                updateRequest.onsuccess = function () {
                    console.log("update successfully");
                };
                updateRequest.onerror = function () {
                    console.log("update failed");
                };
            } else {
                cursor.continue();
            }
        }
    };
}