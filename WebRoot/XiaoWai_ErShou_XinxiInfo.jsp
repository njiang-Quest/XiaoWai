<%@ page language="java" import="java.util.*,com.csu.xiaowai.bean.*,com.csu.xiaowai.dao.*" pageEncoding="GB2312"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
 

<c:set var="ucb" value="${ucb}" scope="session"></c:set>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>${ucb.uctitle}-${ucb.price}Ԫ -У������г���</title>
    <link href="css/bases__25078__[1].css" rel="stylesheet" type="text/css" />

	<script language="javascript">
	  
	  function myback(){
	     history.back();
	  }
	
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
    <div id="header" class="nohist">

<span id="header_links" style="float:right;text-align:right">

<span id="loginBox">
</span>
<c:set var="user" value="${user}"></c:set>
<a href="XiaoWai_ErShou_CreateXinxi.jsp?userid=${user.userId}" rel="nofollow">��ѷ�����Ϣ</a> |  <span id="promote"></span>
</span>
<a href="XiaoWai_ErShou_Shouye.jsp" target="_self">����У������г���</a> &nbsp;|&nbsp;
����̨ʽ����&nbsp;

<div style="clear:both"></div>

</div><!--header-->

<style>
#metaTable {
    border-collapse:collapse;
    padding-bottom:10px;
    margin-bottom:10px;
    width:540px;
}
#metaTable td{
    color:#666;
    border:1px solid #E1E1E1;
    padding:2px 10px;
}
#metaTable td.short{
    width:270px;
}
#metaTable td label{
    color:#333;
    display:inline-block;
    width:85px;
    text-align:right;
    white-space:nowrap;
}
#metaTable td span{
    
}
</style>

<div id="container">
<div id="subheader">

<!-- google_ad_section_start -->

<h1>${ucb.uctitle}<span id="jifenBox">&nbsp;</span></h1>
<!-- google_ad_section_end -->

<div class="line"></div>
</div><!-- subheader -->

<div id="content" style="height:1000px;">

<div id="left">

<div id="commentBox" style="line-height:20px;font-size:12px;float:right;background:white; margin-left:10px; " class="dh_hide">
<div style="padding:2px 8px; ">
<div id="jubaoBox"></div>
</div>
<div style="padding:2px 8px;">
<div id="surveyBox"></div>
</div>
</div>



<table id="metaTable" border="0" align="center">
<tr>
  <td align="center">������id��</td>
  <td align="center"><label>${ucb.userid}</label></td>
</tr>
<tr>
  <td align="center">�۸�</td>
  <td align="center"><label>${ucb.price }</label>Ԫ</td>
</tr>
<tr>
  <td align="center">��ϵ�绰��</td>
  <td align="center"><label>${ucb.tel}</label></td>
</tr>
<tr>
  <td align="center">QQ��</td>
  <td align="center"><label>${ucb.qq }</label></td>
</tr>
<tr>
  <td align="center">��ַ��</td>
  <td align="center"><label>${ucb.address }</label></td>
</tr>
<tr>
  <td align="center">���ݣ�</td>
  <td align="center"><textarea cols="20" rows="5" disabled="disabled" align="center">${ucb.content}</textarea></td>
</tr>
</table>
��ϢͼƬ��
<div align="center"><img src="${ucb.ucimg }" height="500" width="500"></div>

<div style="clear:both;border-top: 1px solid rgb(235, 235, 235);padding: 5px;font-size:12px;" class="dh_hide">
��Ϣ��ţ�<span id="adId">${ucb.ucid}</span> &nbsp;
������id��<label>${ucb.userid}</label><br/>
</div><!--E:manage-->

<div  align="right" id="gads" class="datagrid" style="border:1px solid #ccc;">
<ul>
<li><a href="javascript:myback()">������һ��</a>&nbsp;&nbsp;<a href="XiaoWai_ErShou_Shouye.jsp">����ҳ>></a></li>

</ul>
</div>
<link href="css/facebox.css" rel="stylesheet" type="text/css" />
<style>.loginForm{width:310px;height:200;}</style>
<div id="footer" class="nohist">
<table width="100%"  border="0" cellspacing="0" cellpadding="0">
<tr>
<td>
&copy;2011<a target="_blank" href="http://jobs.baixing.com/?page_id=2" rel="nofollow">����У����</a> |
<a target="_blank" href="http://www.baixing.com/pages/bangui.php">У������Լ</a> |
<a href="http://www.baixing.com/feedback/?type=2&src=footer" target="_blank">��ϵ����</a>
</td>
</tr>
</table>
</div>
  </body>
</html>
