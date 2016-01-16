
/**
 * 键范围（key range）为使用游标增添了一些灵活性，可以使得游标只在指定的键范围内进行遍历。
 * 键范围由 IDBKeyRange 的实例表示。
 */
function testKeyRange(database){

    var transaction = database.transaction("users", "readonly");

    var users = transaction.objectStore("users");

    /**
     * 有四种定义键范围的方式:
     *
     * 第一种是使用 only() 方法，传入想要取得的对象的键值。
     */

    var onlyRange = IDBKeyRange.only("007");

    // 第二种方式是指定结果集的下界，下界表示游标开始的位置。
    // 从键为"007"的对象（不包含）开始，然后可以移动到最后。
    var lowerRange = IDBKeyRange.lowerBound("007");
    // 从键为"007"的对象（包含）开始，然后可以移动到最后。
    var lowerRange2 = IDBKeyRange.lowerBound("007", true);

    // 第三种方式是指定结果集的上界，也就是指定游标不能超越哪个键。
    // 从头开始，到键为"007"的对象（不包含）为止
    var upperRange = IDBKeyRange.upperBound("007");
    // 从头开始，到键为"007"的对象（包含）为止
    var upperRange2 = IDBKeyRange.upperBound("007", true);

    // 第四种方式是同时指定上、下界，使用 bound()方法。这个方法可以接收 4 个参数：
    // 表示下界的键、表示上界的键、表示是否跳过下界的布尔值（可选的）和表示是否跳过上界的布尔值（可选的）

    // 从键为"001"的对象（不包含）开始，到键为"007"的对象（不包含）为止
    var boundRange1 = IDBKeyRange.bound("001", "007");
    // 从键为"001"的对象（包含）开始，到键为"007"的对象（不包含）为止
    var boundRange2 = IDBKeyRange.bound("001", "007", true);
    // 从键为"001"的对象（包含）开始，到键为"007"的对象（包含）为止
    var boundRange3 = IDBKeyRange.bound("001", "007", true, true);
    // 从键为"001"的对象（不包含）开始，到键为"007"的对象（包含）为止
    var boundRange4 = IDBKeyRange.bound("001", "007", false, true);

    // 在定义键范围之后，把它传给 openCursor() 方法，就能得到一个符合相应约束条件的游标。
    var request = users.openCursor(onlyRange);

    request.onsuccess = function (event) {
        var cursor = event.target.result;
        if (cursor){ // 必须要检查是否为 null
            console.log("Key: " + cursor.key + ", Value: " + JSON.stringify(cursor.value));
            cursor.continue();
        } else {
            console.log("complete");// 遍历结束
        }
    };
    request.onerror = function (event) {
        console.log("Something error happened while opening cursor.");
    };
}
