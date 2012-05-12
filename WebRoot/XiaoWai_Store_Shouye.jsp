<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>

<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>

    
    <title>中南大学商家网</title>
<link href="css/Style[1].css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="js/tabs.js"></script>


<link rel="apple-touch-icon" href="images/apple_icon_.png" /> 
<!--[if IE]><script type="text/javascript" src="js/expressions.js"></script><![endif]--> 
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
    <script type="text/javascript">
	   
	   function cleartext(){
	   
	     document.getElementById('searchKey').value='';
	   }
	   
	   
	</script>
  </head>
  
  <body>
   <%@include file="XiaoWai_header.jsp" %>
<div class="header">
 



<div class="logo">
<div class="logoz" align="center"><a href="/"><font color="#00FF00" size="+6">校外商家网</font></a></div>
<div class="logozh">
<!-- 广告位置 -->
</div>
</div>
<div class="daohang">
<div class="daohangs">
<ul>
<li class="daohangsbk"><a href="#">首页</a></li>
<li class="daohangsbk"><a href="StoreSearchStorefromtype?storetype=休闲娱乐" target="_blank">休闲娱乐商家</a></li>
<li class="daohangsbk"><a href="StoreSearchStorefromtype?storetype=餐饮" target="_blank">餐饮美食商家</a></li>
<li class="daohangsbk"><a href="StoreSearchStorefromtype?storetype=超市" target="_blank">商场购物商家</a></li>
<li class="daohangsbk"><a href="StoreSearchStorefromtype?storetype=教育" target="_blank">教育培训商家</a></li>
<li class="daohangsbk"><a href="StoreSearchStorefromtype?storetype=服饰" target="_blank">服装饰品商家</a></li>
<li class="daohangsbk"><a href="StoreSearchStorefromtype?storetype=其他" target="_blank">其他行业商家</a></li>
</ul>
</div>

<div class="syssnr">
<form action="/XiaoWai/StoreSearchFromtitleServlet" method="Post" name="searchform" id="searchform">
<div class="syssnr1"></div><div class="syssnr2">搜索商家</div><blockquote><blockquote><blockquote><blockquote><div class="syssnr3"> 
<input type="text" id="searchKey" name="title" class="button" value="输入关键字搜索" onfocus="cleartext()"> 
<input type="hidden" name="show" value="title,zhuying,jianjie"> 
<input type="hidden" name="tempid" value="1"> 
<input type="hidden" name="tbname" value="shangjia"></div></blockquote></blockquote></blockquote></blockquote><div class="syssnr4"><input type="submit" value="搜索商家" /></div>
</form>
</div>
</div>


<div class="daohangx">
<ul>
<c:forEach begin="0" end="5" var="storebean" items="${allstorevec}"> 
   <li><a href="StoreSearchComfromstoreid?storeid=${storebean.storeid}" target="_blank">${storebean.storename}</a></li>
</c:forEach>
</ul>
</div>
<div class="daohangx1">
<ul><li><a href="XiaoWai_ErShou_Shouye.jsp">校外二手市场</a></li><li></li></ul>
</div>
</div>
<br />
<div class="pmd">
<marquee scrollamount=3>友情提示：最近接到很多商家要求建设独立网站申请，校外商家网只免费提供商家宣传网页展示服务，不开展独立建设网站业务。如商家需要独立网站，请联系通化地区提供建站服务的网站。<a href="http://www.baidu.com/s?wd=%CD%A8%BB%AF%CD%F8%D5%BE%BD%A8%C9%E8&f=12&rsp=0&oq=%CD%A8%BB%AF%CD%F8%D5%BE%BD%A8%D5%BE" target="_blank">点此查看通化地区提供此项服务的网站。</a>
</marquee>
</div>

<!-- 首页内容上 -->

<!-- 首页内容下 -->

<!-- 首页友情 -->

<div class="footer">
<div class="footernr">
<div class="footer1">
<a href=sitemap.xml target=_blank>网站地图</a> | 
<a href=/bz/8.html target=_blank>关于我们</a> |
<a href=/bz/9.html target=_blank>联系方式</a> |
<a href=/e/tool/gbook/?bid=1 target=_blank>留言反馈</a> |
<a href=http://www.520435.com/bz/1.html target=_blank>开店帮助</a> |
<a href=http://www.520435.com/bz/1.html target=_blank>新手帮助</a> |
<a href=/bz/10.html target=_blank>广告服务</a></div>
<div class="footer2">本站为您提供<b>校外网信息</b>、<b>中南校外网商家</b>信息查询服务.  Powered by <strong><a href="http://www.phome.net" target="_blank">EmpireCMS</a></strong></div>
<div class="footer3"> 客服电话:15843518660 客服QQ:1662094999 <script language="javascript" type="text/javascript" src="js/641101.js"></script></div>
</div>
</div>
<!-- JiaThis Button BEGIN -->

<!-- JiaThis Button END -->
</body>
</html>
