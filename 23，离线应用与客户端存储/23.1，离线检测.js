
/**
 * HTML5 定义了一个 navigator.onLine 属性，这个属性值为 true 表示设备能上网，值为 false 表示设备离线。
 */

if (navigator.onLine) {
	alert("It's online");
} else {
	alert("It's offline");
}

/**
 * HTML5 还定义了两个事件：online 和 offline。
 * 当网络从离线变为在线或者从在线变为离线时，分别触发这两个事件。这两个事件在 window 对象上触发。
 */

window.online = function(){
	alert("OK");
};

window.offline = function(){
	alert("Sorry");
};

/**
 * 为了检测应用是否离线，在页面加载后，最好先通过 navigator.onLine 取得初始的状态。
 * 然后，就是通过上述两个事件来确定网络连接状态是否变化。
 * 当上述事件触发时，navigator.onLine 属性的值也会改变，不过必须要手工轮询这个属性才能检测到网络状态的变化。
 */