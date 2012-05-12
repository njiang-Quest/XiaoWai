<%@ page language="java" import="java.util.*" pageEncoding="GB2312"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    <meta http-equiv="refresh" content="3; url=/XiaoWai/ErshouManagerServlet" /> 
    <title>您好</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
   <script language="javascript">
	 function tz(){
	   
	   if(document.form.time.value>0)
	    {
		
		document.form.time.value = document.form.time.value-1;
		setTimeout('tz()','1000');
		}
	   
	 }
  </script>
  </head>
  
  <body onload="tz()">
    <form name="form">
操作失败...
<input type="text" name="time" style="border-style:solid" value="3" size="1" readonly>秒后自动跳转
</form>
  </body>
</html>
