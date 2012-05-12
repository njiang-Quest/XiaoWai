<%@ page language="java" import="java.util.*" pageEncoding="GB2312"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    <c:set var="user" value="${user}"></c:set>
    <title>My JSP 'XiaoWai_RefreshVisitors.jsp' starting page</title>
    
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
  <ul class="people-list" id="footPrintList" style="margin-left:0px;"> 
    <c:forEach var="visitor" items="${allVisitors2}" begin="0" end="2">
		<li><span class="headpichold"> 
		<a style="cursor:pointer;" namecard="" href="/XiaoWai/PersonalPageServlet?userID=${visitor.userId }&visitorID=${user.userId }">
		<img src="${visitor.userimg }"  width="50" height="50" onload="roundify(this)" /></a> 
		</span> 
		<span class="clearfix"> 
		<a  href="" namecard="225134350">${visitor.name }</a></span> 

		</li>

	</c:forEach>
  </ul>
  </body>
</html>
