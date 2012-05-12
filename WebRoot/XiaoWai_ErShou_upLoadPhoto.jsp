<%@ page language="java" import="java.util.*" pageEncoding="GB2312"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>上传照片</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
  <script type="text/javascript">
  </script>
  </head>
  
  <body>
    <font color="green" size="5px">信息发布成功，想为你的信息上传照片吗....</font>
      <form enctype="multipart/form-data" method="post" action="/XiaoWai/ErshouShangchuantupian">
         <table align="center" cellspacing="15">
	   <tr><td colspan="2"><input type="file" name="file1" title="浏览"/></td></tr>
	   
	   <tr>
	   <td align="left"><input type="submit" name="upphoto" value="上  传" align="right"/>&nbsp;&nbsp;&nbsp;</td>
	   
	   <td align="right"><input type="button" name="upphoto" value="跳  过" align="right" onclick="location.href='XiaoWai_ErShou_OperationSuccess.jsp'"/>&nbsp;&nbsp;&nbsp;</td>
	   </tr>
	   </table>
        
      </form>
  </body>
</html>
