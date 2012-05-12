<%@ page language="java" import="java.util.*" pageEncoding="gb2312"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
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

  </head>
  
  <body>
  <c:set var="album" value="${albumbean}"></c:set>
      <h3>我的相册>>${album.albtitle}>>上传照片</h3>
	   <hr />
	   <form action="AlbumUploadPhotoServlet" enctype="multipart/form-data" method="post">
	   <table align="center" cellspacing="15">
	   <tr><td colspan="2"><input type="file" name="file1" title="浏览"/></td></tr>
	   <tr><td colspan="2"><input type="file" name="file2" title="浏览"/></td></tr>
	   <tr><td colspan="2"><input type="file" name="file3" title="浏览"/></td></tr>
	   <tr><td colspan="2"><input type="file" name="file4" title="浏览"/></td></tr>
	   <tr><td colspan="2"><input type="file" name="file5" title="浏览"/></td></tr>
	   <tr>
	   <td align="right"><input type="submit" name="upphoto" value="上  传" align="right"/>&nbsp;&nbsp;&nbsp;</td>
	   
	   </tr>
	   </table>
	   </form>
  </body>
</html>
