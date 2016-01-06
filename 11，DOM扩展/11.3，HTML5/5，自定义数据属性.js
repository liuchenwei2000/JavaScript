
/**
 * HTML5 规定可以为元素添加非标准的属性，但要添加前缀 data-，
 * 目的是为元素提供与渲染无关的信息，或者提供语义信息。
 * 这些属性可以任意添加、随便命名，只要以 data- 开头即可。
 *
 * 如果需要给元素添加一些不可见的数据以便进行其他处理，那就要用到自定义数据属性。
 */

// 添加了自定义属性之后，可以通过元素的 dataset 属性来访问自定义属性的值。
// dataset 属性的值是 DOMStringMap 的一个实例，也就是一个名值对儿的映射。
// 在这个映射中，每个 data-name 形式的属性都会有一个对应的属性，只不过属性名没有 data- 前缀
var div = document.getElementById('div2');
console.log(div.dataset.appid);

// 判断 myname 属性是否有值
if(div.dataset.myname){
    console.log('Hello ' + div.dataset.myname);
}

// 设置新值
div.dataset.appid = 'newid';