
/**
 * 地理定位 API
 *
 * 地理定位（geolocation）是一个得到了广泛支持的一个新 API。
 * 通过这套 API，JavaScript 代码能够访问到用户的当前位置信息。
 * 当然，访问之前必须得到用户的明确许可，即同意在页面中共享其位置信息。
 * 如果页面尝试访问地理定位信息，浏览器就会显示一个对话框，请求用户许可共享其位置信息。
 * Geolocation API 在浏览器中的实现是 navigator.geolocation 对象，这个对象包含 3 个方法。
 */

/**
 * 1，getCurrentPosition()
 *
 * 调用这个方法会触发请求用户共享地理定位信息的对话框。
 * 这个方法接收 3 个参数：成功回调函数、失败回调函数（可选的）和选项对象（可选的）。
 */

navigator.geolocation.getCurrentPosition(function (position) {
	/**
	 * 成功回调函数会接收到一个 Position 对象，该对象有两个属性：coords 和 timestamp。
	 * 而 coords 对象中将包含下列与位置相关的信息，属性如下：
	 *
	 * latitude：以十进制度数表示的纬度。
	 * longitude：以十进制度数表示的经度。
	 * accuracy：经、纬度坐标的精度，以米为单位。
	 *
	 * 有些浏览器还可能会在 coords 对象中提供如下属性：
	 *
	 * altitude：以米为单位的海拔高度，如果没有相关数据则值为 null。
	 * altitudeAccuracy：海拔高度的精度，以米为单位，数值越大越不精确。
	 * heading：指南针的方向，0°表示正北，值为 NaN 表示没有检测到数据。
	 * speed：速度，即每秒移动多少米，如果没有相关数据则值为 null。
	 *
	 * 在实际开发中，latitude 和 longitude 是大多数 Web 应用最常用到的属性。
	 */
	console.log(position.coords.longitude + ", " + position.coords.latitude);
}, function (error) {
	/**
	 * 失败回调函数也会接收到一个参数。这个参数是一个对象，包含两个属性：message 和 code。
	 * 其中，message 属性中保存着给人看的文本消息，解释为什么会出错，
	 * 而 code 属性中保存着一个数值，表示错误的类型：用户拒绝共享（1）、位置无效（2）或者超时（3）。
	 *
	 * 实际开发中，大多数 Web 应用只会将错误消息保存到日志文件中，而不会因此修改用户界面。
	 */
	console.log("Error code: " + error.code);
	console.log("Error message: " + error.message);
}, {
	/**
	 * 选项对象用于设定信息的类型。可以设置的选项有三个：
	 *
	 * enableHighAccuracy 布尔值，表示必须尽可能使用最准确的位置信息。
	 * timeout 是以毫秒数表示的等待位置信息的最长时间。
	 * maximumAge 表示上一次取得的坐标信息的有效时间，以毫秒表示，如果时间到则重新取得新坐标信息。
	 */
	enableHighAccuracy: true,
	timeout: 5000,
	maximumAge: 25000
});

/**
 * 2，watchPosition()
 *
 * 如果希望跟踪用户的位置，那么可以使用 watchPosition()。
 * 这个方法接收的参数与 getCurrentPosition() 方法完全相同。
 * 实际上，watchPosition() 与定时调用 getCurrentPosition() 的效果相同。
 * 在第一次调用 watchPosition() 方法后，会取得当前位置，执行成功回调或者错误回调。
 * 然后，watchPosition() 就地等待系统发出位置已改变的信号（它不会自己轮询位置）。
 */

// 调用 watchPosition() 会返回一个数值标识符，用于跟踪监控的操作。
// 基于这个返回值可以取消监控操作，只要将其传递给 clearWatch() 方法即可。
var watchId = navigator.geolocation.watchPosition(function (position) {
	console.log(position.coords.longitude + ", " + position.coords.latitude);
}, function (error) {
	console.log("Error code: " + error.code);
	console.log("Error message: " + error.message);
});

navigator.geolocation.clearWatch(watchId);