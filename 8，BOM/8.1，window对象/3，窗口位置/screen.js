
/**
 * 用来确定和修改 window 对象位置的属性和方法有很多，但是各浏览器的实现是不同的。
 * 
 * 使用下列代码可以跨浏览器取得窗口左边和上边的位置。 
 */
function showScreenInfo() {
	var leftPos = (typeof window.screenLeft == "number") ? window.screenLeft
			: window.screenX;
	var topPos = (typeof window.screenTop == "number") ? window.screenTop
			: window.screenY;

	alert("(leftPos, topPos)=(" + leftPos + ", " + topPos + ")");
}

/**
 * 最终结论就是无法在跨浏览器的条件下取得窗口左边和上边的精确坐标值。
 * 然而，使用 moveTo() 和 moveBy() 方法倒是有可能将窗口精确地移动到一个新位置。
 * 
 * 这两个方法都接收两个参数：
 * 其中 moveTo() 接收的是新位置的 x 和 y 坐标值，而 moveBy() 接收的是在水平和垂直方向上移动的像素数。
 * 注：这两个方法可能会被浏览器禁用。
 */
function moveScreenTo(){
	// 将窗口移动到 (300,400)
	window.moveTo(300, 400);
}

function moveScreenBy(){
	// 将窗口向右移动 50 像素，向下移动 100 像素。（负数值表示向左、向上）
	window.moveBy(50, 100);
}