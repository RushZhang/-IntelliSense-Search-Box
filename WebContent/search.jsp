<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<link rel = "stylesheet" href="style.css" type="text/css">


<script language='javascript' src='script.js'></script>


<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Search</title>
</head>
<body>
	<div id="mydiv">
		<!-- 输入框 -->
		<input type="text" size=50 id="keyword" onkeyup="getMoreContents()" onblur="clearContent()" onfocus="getMoreContents()"/>
		<input type="button" value="Google" width="50px" />
		<!-- 内容展示的区域 -->
		<div id="popDiv">
			<table id="content_table" bgcolor="#FFAFA" border="0" cellspacing="0"
				cellpadding="0">
				<tbody id="content_table_body">
					<!-- 动态的数据在这里 -->
					<!-- <tr><td>ajax1</td></tr>
					<tr><td>ajax2</td></tr>
					<tr><td>ajax3</td></tr>
					<tr><td>ajax4</td></tr> -->
				</tbody>
			</table>
		</div>
	</div>
</body>
</html>