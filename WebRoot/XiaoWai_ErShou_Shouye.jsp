<%@ page language="java" import="java.util.*,com.csu.xiaowai.bean.*,com.csu.xiaowai.dao.*" pageEncoding="GB2312"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
  
  	<c:set var="user" value="${user}"></c:set>

    
    <title>二手交易市场</title>
<link href="css/bases__25078__[1].css" rel="stylesheet" type="text/css" />

<link href="css/home-frame-all-min.css" rel="stylesheet" type="text/css" /> 
<link ui-rel="prefetchframe" rel="stylesheet" type="text/css" href="css/home-all-min.css" /> 
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
   <script>
	function noSeamMarquee(obj,max,t,h){
	  if(h==0)
		cont=obj.innerHTML;  
	  obj.innerHTML+=cont;
	  if(h>max)
		eval('clearTimeout(timer_'+obj.id+')');
	  h++;
	  eval('timer_'+obj.id+'=setTimeout("noSeamMarquee('+obj.id+','+max+','+t+','+h+')",'+t*1000+');');
	}
   </script>
  </head>
  
  <body>
    <%@include file="XiaoWai_header.jsp" %>




<div id="headerPromo" style="width:980px;margin:0 auto;display:none;" class="nohist"></div>
<div id="header" class="nohist">




<span id="header_links" style="float:right;text-align:right">

${user.name}
<a href="XiaoWai_ErShou_CreateXinxi.jsp?userid=${user.userId}" rel="nofollow">免费发布信息</a> |<span id="promote"><a href="ErshouManagerServlet?userid=${user.userId}" rel="nofollow">个人信息管理</a></span>
| <a href="" rel="nofollow" target="_blank">帮助</a></span>
校园二手市场，为每个校园建立一个生机勃勃的信息栏！
<div style="clear:both"></div>

</div><!--header-->
<style>
#categories table {
	border-collapse: collapse;
	border: 1px solid #e1e1e1;
}
#categories td {
	width: 20%;
	line-height: 30px;
	border: 1px solid #e1e1e1;
}
#categories h3 {
	font-size: 14px;
	margin: 5px 5px 5px 0;
	padding: 0 10px;
	background: #7cb71e url(images/titlebg.gif) no-repeat right;
/*	border-bottom: 1px solid #498d07;*/
}
#categories h3 a {
	color: #FFB;
}
#categories i {
	padding-left: 2px;
	font-style: normal;
	font-size: 9px;
	color: #999;
}
#categories div.s, #categories div.d {
	padding: 0 0 0 10px;
	float:left;
	width: 169px;
	white-space: nowrap;
}
#categories div.d {
	width: 79px;
}
#categories div.sub a {
	margin-right: 10px;
}
#categories .spr {
	border-top: 1px dotted #ccc;
	margin: 10px 0 -20px;
}
</style>

<div id="container">
<div id="subheader" style="padding:0px 20px;">
<div class="blank10"></div> 
<table width="100%">
<tr>
<td style="width:110px"><a href="/" style="
	display: block;
	width: 108px;
	height: 54px;
	"><img src="images/xiaowai.jpg"></a>
<td style="text-align:center;width:80px;line-height:1.2"><a href="#" style="
	margin: 8px 0 0;
	display: block;
	font-size: 15px;
	font-family: 微软雅黑, 黑体;
	font-weight: bold;
	color: #0D0057;
	">中南大学</a>
	<a href="#"><small>切换学校</small></a>
<td id="lvBanner" align="center">
</td>
<td style="width:300px;text-align:right;" class="links">
<strong><a href="XiaoWai_ErShou_CreateXinxi.jsp?userid=${user.userId}" target="_blank" rel="nofollow">免费发布信息</a></strong> | <a href="ErshouManagerServlet?userid=${user.userId}" target="_blank" rel="nofollow">信息管理</a>
</table>

<div class="line"></div>
</div><!-- subheader -->

<div id="content" style="height:1000px;">


<div id="headline" style="margin: -10px 0 0 -5px;height:95px;width:850px;">

<marquee scrolldelay="1" direction="right" onMouseOver="this.stop()" onMouseOut="this.start()" >
<%
    UserDao userdao = new UserDao();
    Vector vec = userdao.SearchAllUsedGoods();
    for(int i = 0;i<vec.size();i++){
      UsedCommodityBean ucb = (UsedCommodityBean)vec.get(i);
      String img = ucb.getUcimg();
      String ucid = ucb.getUcid();
      if(img!=null){
%>
<a href="ErshouSearchOneComServlet?ucid=<%=ucid%>"><img src="<%=img%>" height="130px" width="100px">&nbsp;</a>
<%}%>
<%}%>
</marquee>
</div>


<div class="blank10">
</div>

<div id="categories">
<table width="100%" cellpadding="0" cellspacing="0" border="0">
<tr>
<td valign="top">
<h3>物品交易</h3><div class="s"><a href="ErshouSearchFromtypeServlet?uctypeid=1" target="_blank">二手台式电脑</a><i></i></div>
<div class="s"><a href="ErshouSearchFromtypeServlet?uctypeid=4" target="_blank">电脑配件/宽带</a><i></i></div>
<div class="s"><a href="ErshouSearchFromtypeServlet?uctypeid=2" target="_blank">二手笔记本</a><i></i></div>
<div class="s"><a href="ErshouSearchFromtypeServlet?uctypeid=5" target="_blank">二手手机</a><i></i></div>
<div class="s"><a href="ErshouSearchFromtypeServlet?uctypeid=3" target="_blank">二手车交易</a><i></i></div>
<div class="s"><a href="ErshouSearchFromtypeServlet?uctypeid=6" target="_blank">服装和饰品</a><i></i></div>
<div class="s"><a href="ErshouSearchFromtypeServlet?uctypeid=7" target="_blank">其他</a><i></i></div>
<div class="s"><a href="ErshouSearchFromtypeServlet?uctypeid=0" target="_blank">全部</a><i></i></div>
</td>
</tr>

<tr>
<td style="padding:15px;">
<form method="post" action="/XiaoWai/ErshouShouyeSearchServlet">
<input type="text" size="50" class="input" name="query"/>
<select style="margin-left:10px;" name="cate">
<option value="0">全部</option>
<option value="1">二手台式电脑</option>
<option value="4">电脑配件/宽带</option>
<option value="5">二手手机</option>
<option value="2">二手笔记本</option>
<option value="3">二手车交易</option>
<option value="6">服装和饰品</option>
<option value="7">其他</option>
</select>
<input type="submit" value="搜索" title="在二手市场搜索" />
</form>
</td>
<td align="center">
<br></td>
</tr>
</table>

</div>

<div id="cities">
  <style>
#cities th, #cities td {
	text-align: left;
	line-height: 1.6;
}
#cities th {
	width: 65px;
	border-right: 1px solid #e1e1e1;
	vertical-align: top;
        font-size: 12px;
        padding: 3px 0 1px;
}
#cities a {
	white-space: nowrap;
	margin-right: 5px;
	font-size: 12px;
}
</style>
<table id="cities" cellspacing="10" cellpadding="0">
<tr>
<th>周边学校
<td>
<a href="http://yiyang.baixing.com/">中南林业科技大学</a>
<a href="http://xiangtan.baixing.com/">湖南女子大学</a>
<a href="http://zhuzhou.baixing.com/">湖南交通职业技术学院</a>
<a href="http://pingxiang.baixing.com/">湖南大学</a>
<a href="http://loudi.baixing.com/">湖南师范大学</a>
<a href="http://yueyang.baixing.com/">湖南广播电视大学</a>
</table></div>

<div id="footer" class="nohist">
<table width="100%"  border="0" cellspacing="0" cellpadding="0">
<tr>
<td>
<a target="_blank" href="" rel="nofollow">关于校外网</a> |
<a target="_blank" href="">校外网公约</a> |
<a href="" target="_blank">联系我们</a>&copy; 2011 校外网 </td>
</table>
</div>
<!-- footer end -->
  </body>
</html>
