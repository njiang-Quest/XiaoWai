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
    
    <title>中南大学二手交易市场</title>
<link href="css/bases__25078__[1].css" rel="stylesheet" type="text/css" />
    
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
<c:set var="user" value="${user}"></c:set>
<span id="loginBox">
</span>

<a href="XiaoWai_ErShou_CreateXinxi.jsp?userid=${user.userId}" rel="nofollow">免费发布信息</a> | <a href="XiaoWai_ErShou_XinxiManager.jsp?userid=${user.userId}" rel="nofollow">个人管理中心</a> |  <span id="promote"><a href="http://www.baixing.com/feedback/?type=2&src=header" rel="nofollow">反馈</a></span>
| <a href="http://bbs.baixing.com/thread-34006-1-1.html" rel="nofollow" target="_blank">帮助</a></span>
<a href="XiaoWai_ErShou_Shouye.jsp" target="_self">中南校外二手市场网</a> &nbsp;|&nbsp;
&nbsp;

<div style="clear:both"></div>

</div><!--header-->

<style>
#filterTable .even {
	background: #effaea;
}
#filterTable .old {
	background: #f5fff1;
}
#filterTable {
	border-collapse:collapse;
}
#filterTable td{
	border:1px #dbe2cb solid;
	padding:5px 15px;
}
</style>

<div id="container">
<div id="subheader">

<div style="float:right;" class="links">
<a href="XiaoWai_ErShou_CreateXinxi.jsp" target="_blank" rel="nofollow">免费发布信息</a>
</div>

<c:set var="uctypeid" value="${ershoutypeid}"></c:set>
<c:if test="${uctypeid==0}">
<h1>中南大学--全部</h1>
</c:if>
<c:if test="${uctypeid==1}">
<h1>中南大学--二手台式电脑</h1>
</c:if>
<c:if test="${uctypeid==2}">
<h1>中南大学--二手笔记本</h1>
</c:if>
<c:if test="${uctypeid==3}">
<h1>中南大学--二手车</h1>
</c:if>
<c:if test="${uctypeid==4}">
<h1>中南大学--电脑配件</h1>
</c:if>
<c:if test="${uctypeid==5}">
<h1>中南大学--二手手机</h1>
</c:if>
<c:if test="${uctypeid==6}">
<h1>中南大学--服饰商品</h1>
</c:if>
<c:if test="${uctypeid==7}">
<h1>中南大学--其他</h1>
</c:if>
<a href="XiaoWai_ErShou_Shouye.jsp">回首页</a>
<div class="blank"></div>

<div id="filter" class="enhist">

<div class="block"><div class="b">

<form method="post" action="ErshouSearchZidingyiPriceServlet?uctypeid=${uctypeid}" target="_self"><a id="filter" style="display:none;"></a>

<table cellpadding="0" cellspacing="0" border="0" width="100%" >
<tr class="old"><td width="75px" align="right" valign="top">价格：</td><td><div class="filterValues">
 &nbsp;<a href="ErshouSearchFromtypeServlet?uctypeid=${uctypeid}"><strong>全部</strong></a>&nbsp;
 <a href="ErshouSearchFromPriceServlet?startprice=0&endprice=500&uctypeid=${uctypeid}" target="_self">500元以下</a> &nbsp;
 <a href="ErshouSearchFromPriceServlet?startprice=500&endprice=1000&uctypeid=${uctypeid}" target="_self">500-1000元</a> &nbsp;
 <a href="ErshouSearchFromPriceServlet?startprice=1000&endprice=1500&uctypeid=${uctypeid}" target="_self">1000-1500元</a> &nbsp;
 <a href="ErshouSearchFromPriceServlet?startprice=1500&endprice=2500&uctypeid=${uctypeid}" target="_self">1500-2500元</a> &nbsp;
 <a href="ErshouSearchFromPriceServlet?startprice=2500&endprice=10000&uctypeid=${uctypeid}" target="_self">2500元以上</a>
 <input type="hidden" name="价格" value=""> | <strong>或</strong> <input type="textbox" class="input" name="min" value="" size="6" />  到
 <input type="textbox" class="input" name="max" value=""  size="6"/> 元 <input type="submit" value="筛选"/></div></td></tr>
 
</table>
</form>
</div>
</div></div><!-- filter -->
</div><!--subheader-->

<div id="content" style="height:1000px;">

<div id="left">

<div id="datagrid" class="datagrid enhist">



<c:set var="page" value="${0}"></c:set>
<%
  String mypage = request.getParameter("mypage");
%>
<c:set var="allpage" value="${ershouliebiaoallpage}"></c:set>
<c:set var="mypage" value="<%=mypage%>"></c:set>
<c:if test="${mypage!=null}">
  <c:set var="page" value="${mypage}"></c:set>
</c:if>
<div class="blank10"></div>

<ol>
<li class="head">二手台式电脑</li>
  <c:forEach var="ershouliebiaomap" items="${ershouliebiaomap}" begin="${page}" end="${page}">
    <c:set var="vec" value="${ershouliebiaomap.value}"></c:set>
		<c:forEach var="ucb" items="${vec}">
			<li>${ucb.time }<a href="ErshouSearchOneComServlet?ucid=${ucb.ucid}">${ucb.uctitle }--${ucb.price }元</a>&nbsp;&nbsp;&nbsp;
				<c:if test="${ucb.ucimg!=null}">
				   <font color="red">图</font>
				</c:if>
			</li>
		</c:forEach>
 </c:forEach>
</ol>

<div class="blank10"></div>

<ul></ul>

</div><!--datagrid-->

<div class="blank10"></div>

<div class="pager" align="center">
<c:if test="${allpage!=0}">
	第${page+1}页,总共${allpage}页.
	<c:if test="${page!=0}">
	   <a href="XiaoWai_ErShou_XinXiLiebiao.jsp?mypage=${page-1}">上一页</a>
	</c:if>
	<c:if test="${(page+1)!=allpage}">
	   <a href="XiaoWai_ErShou_XinXiLiebiao.jsp?mypage=${page+1}">下一页</a>
	</c:if>
</c:if>
<c:if test="${allpage==0}">
没有数据，欢迎您发布...
</c:if>
</div><!--left-->


<div id="right">

</div><!--right-->

<div style="clear:both;"></div>
</div><!--content-->
<script>document.getElementById('content').style.height = 'auto';</script>

<div id="subfooter">

<style type="text/css">
.link {margin-top:10px; padding:5px;}
.link a { color: #707070; line-height:20px;}
#InnerLink a {display:inline-block;width:122px;margin-right:12px;white-space: nowrap;overflow:hidden;}
</style>
<div class="link" id="InnerLink" style="border-top:1px solid #CCC">
	<a href="http://www.baixing.com/diannao/%E6%B9%96%E5%8D%97/" target="_blank" title="湖南师范大学二手台式电脑报价">湖南师范大学二手台式电脑报价</a>
	<a href="http://www.baixing.com/diannao/%E6%B9%96%E5%8D%97/" target="_blank" title="湖南大学二手台式电脑报价">湖南大学二手台式电脑报价</a>
	<a href="http://www.baixing.com/diannao/%E6%B9%96%E5%8D%97/" target="_blank" title="中南林业科技大学二手台式电脑报价">中南林业科技大学二手台式电脑报价</a>
</div>
</div><!--subfooter-->

</div><!--E:container-->

<div id="footer" class="nohist" align="right">
<table width="100%"  border="0" cellspacing="0" cellpadding="0" >
<tr>
<td>
&copy;2011<a target="_blank" href="" rel="nofollow">关于校外网</a> |
<a target="_blank" href="">校外网公约</a> |
<a href="" target="_blank">联系我们</a>
</td>
</tr>
</table>

</div>
  </body>
</html>
