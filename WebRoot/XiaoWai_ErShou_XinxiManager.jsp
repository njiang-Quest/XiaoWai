<%@ page language="java" import="java.util.*,com.csu.xiaowai.dao.*,com.csu.xiaowai.bean.*" pageEncoding="GB2312"%>
<%
String path = request.getContextPath(); 
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html> 
  <head>
    <base href="<%=basePath%>">
    
    <title>发布的信息</title>
<link href="css/bases_25345.css" rel="stylesheet" type="text/css" />
<script language="javascript">
  

</script>
    
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
    <div id="headerPromo" style="width:980px;margin:0 auto;display:none;" class="nohist"></div>
<div id="header" class="nohist">
    
<span id="header_links" style="float:right;text-align:right">
<c:set var="user" value="${user}"></c:set>

<span id="loginBox">
</span>

<a href="XiaoWai_ErShou_CreateXinxi.jsp?userid=${user.userId}" rel="nofollow">免费发布信息</a>|<span id="promote"></span>
</span>

<a href="XiaoWai_ErShou_Shouye.jsp">二手市场网</a> &raquo; ${user.name}
<div style="clear:both"></div>

</div><!--header-->

<style>
#dashboard small {
	color: #999;
}
#dashboard strong {
	float:right;
	color:black;
}
#dashboard th {
	width: 35px;
	color: #999;
}

</style>


<div id="container">
<div id="subheader" class="nohist">
<div class="links">
<a href="XiaoWai_ErShou_CreateXinxi.jsp?userid=${user.userId}">免费发布信息</a>
</div>

<h1>管理中心</h1>
</div><!--subheader-->

<div id="content">

<style>
.primaryTabs {
	background: url(images/headerbg.jpg) repeat-x left top;
	border: #63B02D solid 1px;
	border-bottom: none;
	height: 38px;
}
.primaryTabs a, .primaryTabs a:visited {
	background: url(images/headerbg.jpg) repeat-x left top transparent;
	float: left;
	display: block;
	padding: 5px 12px;
	color: #FFFFBB;
	text-decoration: none;
}

.primaryTabs a:hover {
	color:#ecec7f;
	text-decoration: none;
}

.primaryTabs a.actv, .primaryTabs a.actv:visited, .primaryTabs a.actv:hover {
	background: url(images/headerbg.jpg) repeat-x left -50px transparent;
	color: black;
	border: none;
}
.secondrayTabs {
	background: url(images/headerbg.jpg) repeat-x left -150px;
	font-size: 12px;
	border: 1px solid #d3dbb6;
}

.secondrayTabs a, .secondrayTabs a:visited {
	float: left;
	display: block;
	color: black;
	padding: 1px 10px;
	text-decoration: none;
	margin:5px 0 0 2px;
}

.secondrayTabs a:hover {
        color: #0066cc;
}

.secondrayTabs a.actv, .secondrayTabs a.actv:visited {
	font-weight: bold;
	border: 1px solid #d3dbb6;
	background: #f0f9ef;
}
</style>

<div class="primaryTabs">
<a style="padding:0 0 0 2px;">&nbsp;</a>
	发布的信息	<div class="blank"></div>
</div><!--.primaryTabs-->


<div class="blank10"></div>

<div id="left">

<div id="msg" style="text-align:right"></div>


<style>
.datagrid {
	width: 100%;
}
.datagrid td {
	line-height: 1.8;
	padding: 5px 0;
}
.datagrid a {
	padding: 0;
}
</style>
<c:set var="page" value="${0}"></c:set>
<c:set var="allpage" value="${ershougerenallpage}"></c:set>

<%
  
  String mypage = request.getParameter("mypage");
%>
<c:set var="mypage" value="<%=mypage%>" scope="request"></c:set>
<c:if test="${mypage!=null}">
  <c:set var="page" value="${mypage}"></c:set>
</c:if>
<table class="datagrid" cellspacing="0" cellpadding="0">
  <c:forEach var="ershougerenmap" items="${ershougerenmap}" begin="${page}" end="${page}">
    <c:set var="ershougerenvec" value="${ershougerenmap.value}"></c:set>
	<c:forEach var="ucb" items="${ershougerenvec}">
	    <tr>
			<td style="width:80px">${ucb.time}
			<td><a href="ErshouSearchOneComServlet?ucid=${ucb.ucid}">${ucb.uctitle}</a>
				<b></b>
				<span style="color:red"></span>
				<br /><small style="color:gray;"><span id="vc_95196499"></span></small>
			<td style="text-align:right;width:240px;"><small><a href="XiaoWai_ErShou_UpdateXinxi.jsp?ucid=${ucb.ucid}">修改</a> - <a href="ErshouDeleteComServlet?ucid=${ucb.ucid}">删除</a><br/></small>
		</tr>
	</c:forEach>
  </c:forEach>
</table>


</div><!--left-->

<div id="right">


<div class="block" id="dashboard">
<div class="t">
<table width="100%">
<tr>
<td style="font-size:14px;">
 ${user.name}
<th>
<tr>
</table>
</div>
<div class="b">
<!-- 徽章 -->

</div>
</div><!--dashboard-->

<div class="blank10"></div>
<div class="block" style="margin-bottom: 10px">
</div>

</div><!--right-->

<div class="blank"></div>

</div><!--content-->

<div id="subfooter" align="center">
<c:if test="${page!=0}">
   <a href="XiaoWai_ErShou_XinxiManager.jsp?mypage=${page-1}">上一页</a>
</c:if>
<c:if test="${(page+1)!=allpage}">
   <a href="XiaoWai_ErShou_XinxiManager.jsp?mypage=${page+1}">下一页</a>
</c:if>
        第${page+1}页,总共${allpage}页.
</div><!--subfooter-->

</div><!--E:container-->

<div id="footer" class="nohist">
<table width="100%"  border="0" cellspacing="0" cellpadding="0">
<tr>
<td style="text-align:right;">
&copy;2011<a target="_blank" href="" rel="nofollow">关于校外网</a> |
<a target="_blank" href="">校外网公约</a> |
<a href="" target="_blank">联系我们</a>
</td>
</tr>
</table>

</div>
  </body>
</html>
