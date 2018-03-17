var xmlHttp;
//获得用户输入内容的关联信息
function getMoreContents() {
	//首先获得用户的输入
	var content = document.getElementById("keyword");
	if (content.value == "") {
		clearContent();
		return;
	}
	//给服务器发送用户输入的内容，采用ajax异步，要用XMLHttp对象
	xmlHttp = createXMLHttp();
	//创建完了就给服务器发送数据
	var url = "search?keyword=" + escape(content.value); //escape可以让中文不出问题
	//true表示js脚本会在send()方法执行后继续执行，而不会等待来自服务器的响应
	xmlHttp.open("GET", url, true);
	//xmlHttp绑定回调方法，会在xmlHttp状态改变时候被调用, 改变一次调用一次
	//xmlHttp的状态0-4,我们只关心4，4代表complete。完成之后再调用回调方法才有意义
	xmlHttp.onreadystatechange = callback; //只要状态改变就会触发这个函数
	xmlHttp.send(null);//这里不用写参数，因为我们用get，再url的？后边已经有参数了

}

//这个函数就是用来获得XMLHttp对象
function createXMLHttp() {
	//对于大多数浏览器都是用
	var xmlHttp;
	if (window.XMLHttpRequest) { //如果浏览器支持这个对象
		xmlHttp = new XMLHttpRequest();
	}
	if (window.ActiveXObject) { //破IE，如果是JQuery就可以不考虑兼容问题
		xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
		if (!xmlHttp) {
			xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
		}
	}
	return xmlHttp;
}

//回调函数
function callback() {
	if (xmlHttp.readyState == 4) { //4就是成功
		if (xmlHttp.status == 200) {
			//交互成功获得的相应数据，文本格式
			var result = xmlHttp.responseText;
			//解析获得的数据
			var json = eval("(" + result + ")");
			//获得数据了，就可以动态显示了，展示到输入框的下边
			clearContent();
			setContent(json);
		}
	}
}

//设置关联数据的展示
function setContent(contents) {

	setLocation();
	//首先获得关联数据的长度，由此确定生成多少个tr
	var size = contents.length;
	for (var i = 0; i < size; i++) {
		var nextNode = contents[i]; //代表json数据的第i个元素
		var tr = document.createElement("tr");
		var td = document.createElement("td");
		td.setAttribute("border", "0");
		td.setAttribute("bgcolor", "#FFFAFA");
		td.onmouseover = function() {
			this.className = "mouseOver";
		};
		td.onmouseout = function() {
			this.className = "mouseOut";
		};
		td.onclick = function() {
			//当鼠标点击选择了关联数据，就会输入到框里
		};
		var text = document.createTextNode(nextNode);
		td.appendChild(text);
		tr.appendChild(td);
		document.getElementById("content_table_body").appendChild(tr);
	}
}

//清空之前的数据，动态生成的tr，td
function clearContent() {
	var contentTableBody = document
	.getElementById("content_table_body");
	var size = contentTableBody.childNodes.length;
	for (var i = size - 1; i >= 0; i--) {
		contentTableBody.removeChild(contentTableBody.childNodes[i]);
	}
	document.getElementById("popDiv").style.border="none";
}

//设置显示关联信息的位置
function setLocation(){
	//关联信息的显示位置要和输入框一致
	var content = document.getElementById("keyword");
	var width = content.offsetWidth; //输入框的宽度
	var left = content["offsetLeft"]; //到左边框的距离
	var top = content["offsetTop"] + content.offsetHeight; //到顶部的距离
	//获得显示数据的div
	var popDiv = document.getElementById("popDiv");
	popDiv.style.border = "black 1.5px solid";
	popDiv.style.left = left+"px";
	popDiv.style.top = top+"px";
	popDiv.style.width = width+"px";
	document.getElementById("content_table").style.width = width+"px";
}