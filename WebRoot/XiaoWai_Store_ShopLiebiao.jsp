<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>校外网百业信息</title>
    <link href="css/shangjia.css" rel="stylesheet" type="text/css" />
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<script type="text/javascript">
	   
	   function cleartext(){
	   
	     document.getElementById('searchKey').value='';
	   }
	   
	   
	</script>

  </head>
  
  <body class="listpage">
<div class="header">
<div class="denglu">
<div class="dengluz"></div>
<div class="dengluy"><ul><li><span class="dengluy1"><img src="images/d2.png" alt="订餐" border="0"/></span><span class="dengluy2"><a href="/canyin/">订餐饮</a></span></li>
<li><span class="dengluy1"><img src="images/d5.png" alt="订宾馆酒店" border="0"/></span><span class="dengluy2"><a href="/hyjd/">订酒店</a></span></li></ul></div>
</div>
<div class="logo">
<div class="logoz"><a href="/"><font color="#00FF00" size="+6">校外商家网</font></a></div>
<div class="logozh">
<!-- 广告位置 -->
</div>
<div class="logoy"></div>
</div>
<div class="daohang">
<div class="daohangs">

<ul>
<li class="daohangsbk"><a href="XiaoWai_Store_Shouye.jsp" target="_blank">首页</a></li>
<li class="daohangsbk"><a href="StoreSearchStorefromtype?storetype=休闲娱乐">休闲娱乐商家</a></li>
<li class="daohangsbk"><a href="StoreSearchStorefromtype?storetype=餐饮">餐饮美食商家</a></li>
<li class="daohangsbk"><a href="StoreSearchStorefromtype?storetype=超市">商场购物商家</a></li>
<li class="daohangsbk"><a href="StoreSearchStorefromtype?storetype=教育">教育培训商家</a></li>
<li class="daohangsbk"><a href="StoreSearchStorefromtype?storetype=服饰">服装饰品商家</a></li>
<li class="daohangsbk"><a href="StoreSearchStorefromtype?storetype=其他">其他行业商家</a></li>
</ul>
</div>
<c:set var="storetype" value="${qstoretype}"></c:set>

<div class="syssnr">
<form action="/XiaoWai/StoreSearchFromtitleAndtype?storetype=${storetype}" method="Post"  id="searchform">
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
<ul><li><a href="XiaoWai_ErShou_Shouye.jsp">校外二手市场</a></li></ul>
</div>
</div>





<div class="spz">
<div class="spzdqwz">
<div class="spzdqwz1"></div>

<div class="spzdqwz2">您当前的位置&nbsp;>&nbsp;
<c:if test="${storetype==0}">
全部
</c:if>
<c:if test="${storetype!=0}">
${storetype}
</c:if>
商家
</div>
<div class="spzdqwz3"></div>
</div>
<div class="spdhnr">
<div class="spdhnrz">
<div class="spdhnrzdh">
<div class="spdhnrzdhbt">商家分类导航</div>
<div class="spdhnrzdhnr">
<div class="spdhnrzdhnr1"><a href="StoreSearchStorefromtype?storetype=休闲娱乐" target="_blank">休闲娱乐商家</a></div>
<div class="spdhnrzdhnr1"><a href="StoreSearchStorefromtype?storetype=餐饮" target="_blank">餐饮美食商家</a></div>
<div class="spdhnrzdhnr1"><a href="StoreSearchStorefromtype?storetype=超市" target="_blank">商场购物商家</a></div>
<div class="spdhnrzdhnr1"><a href="StoreSearchStorefromtype?storetype=教育" target="_blank">教育培训商家</a></div>
<div class="spdhnrzdhnr1"><a href="StoreSearchStorefromtype?storetype=服饰" target="_blank">服装饰品商家</a></div>
<div class="spdhnrzdhnr1"><a href="StoreSearchStorefromtype?storetype=其他" target="_blank">其他行业商家</a></div>
</div>
</div>
<div class="tcwgsm">
<div class="spdhnrzdhbt"><a href="/bz/">校外网购问题</a></div>
<div class="tcwgsmnr">
<div class="tcwgsmnr1"><a href="/bz/14.html" target="_blank">·免责声明</a></div>
<div class="tcwgsmnr1"><a href="/bz/15.html" target="_blank">·商家网络宣传推广的优势</a></div>
</div>
</div>
</div>
<%
  String mypage = request.getParameter("mypage");
%>
<c:set var="page" value="${0}"></c:set>
<c:set var="allpage" value="${qstoreallpage}"></c:set>
<c:set var="mypage" value="<%=mypage%>"></c:set>
<c:if test="${mypage!=null}">
  <c:set var="page" value="${mypage}"></c:set>
</c:if>
<div class="spdhnry">

<div class="spdhnrybt"><div class="spdhnrybtz">${storetype}商家</div><div class="spdhnrybty"><a href="http://www.520435.com/ad/2.html">1.加盟我们的优势！</a> </div>
</div>

<div class="spdhnrynr">
<c:forEach var="qstoremap" items="${qstoremap}"  begin="${page}" end="${page}">
    <c:set var="qstorevec" value="${qstoremap.value}"></c:set>
	<c:forEach var="storebean" items="${qstorevec}">
		<div class="spzs">
		<div class="spzsimg"><a href="StoreSearchComfromstoreid?storeid=${storebean.storeid}" title="${storebean.storename}" target="_blank" class="bs"><img src="${storebean.storeimg}" alt="${storebean.storename}" border="0" class="spdhnrynrimg" /></a></div>
		<div class="spzsjj">
		<div class="spzsjjmz"><a href="StoreSearchComfromstoreid?storeid=${storebean.storeid}" title="${storebean.storename}" target="_blank">${storebean.storename}</a></div>
		<div class="spzsjjkf"><span class="hong">主要经营：</span>${storebean.content}</div>
		<div class="spzsjjdz"><span class="hong">联系电话：</span>${storebean.tel}</div>
		<div class="spzsjjtj"><span class="hong">店铺地址：</span>${storebean.address}</div>
		</div>
		</div>
	</c:forEach>
</c:forEach>
</div>
</div>
</div>


<div class="clear"></div>
<div class="fenye">
<c:if test="${allpage!=0}">
	第${page+1}页,总共${allpage}页.
	<c:if test="${page!=0}">
	   <a href="XiaoWai_Store_ShopLiebiao.jsp?mypage=${page-1}">上一页</a>
	</c:if>
	<c:if test="${(page+1)!=allpage}">
	   <a href="XiaoWai_Store_ShopLiebiao.jsp?mypage=${page+1}">下一页</a>
	</c:if>
</c:if>
<c:if test="${allpage==0}">
没有数据，不好意思的啦。。。
</c:if>
</div>


<!-- 全站底部 -->
<div class="footer">
<div class="footernr">
<div class="footer1">
<a class=mBottomLink href="javascript:myAddPanel('通化百业信息','http://www.520435.com/')">加入收藏</a> | 
<a href=/bz/8.html target=_blank>关于我们</a> |
<a href=/bz/9.html target=_blank>联系方式</a> |
</div>
<div class="footer2">Copyright  2006-2009 520435.COM All Right Reserved</div>
<div class="footer3">吉ICP备06006359号</div>
</div>
</div>
</body>
</html>
