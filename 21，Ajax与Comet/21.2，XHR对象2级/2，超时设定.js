/**
 * XHR 对象添加了一个 timeout 属性，表示请求在等待响应多少毫秒之后就终止。
 * 在给 timeout 设置一个数值后，如果在规定的时间内浏览器还没有接收到响应，
 * 那么就会触发 timeout 事件，进而会调用 ontimeout 事件处理程序。
 */
function testTimeout() {

    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
        if (xhr.readyState == 4){
            try {
                if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304){
                    alert(xhr.responseText);
                } else {
                    alert("Request was unsuccessful: " + xhr.status);
                }
            } catch (ex){
                /**
                 * 将这个属性设置为 1000 毫秒，意味着如果请求在 1 秒钟内还没有返回，就会自动终止。
                 * 请求终止时，会调用 ontimeout 事件处理程序。但此时 readyState 可能已经改变为 4，
                 * 这意味着会调用 onreadystatechange 事件处理程序。
                 * 可是，如果在超时终止请求之后再访问 status 属性，就会导致错误。
                 * 为避免浏览器报告错误，可以将检查 status 属性的语句封装在一个 try-catch 语句当中。
                 */
            }
        }
    };
    xhr.open("POST", "/ajax/change.do", true);
    xhr.timeout = 1000; // 将超时设置为 1 秒钟
    xhr.ontimeout = function(){
        alert("Request did not return in a second.");
    };
    xhr.send(null);
}
